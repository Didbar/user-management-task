import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteGroup } from 'src/api/groups'

const useDeleteGroup = (onDelete?: () => void) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteGroup,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['groups'] })
      onDelete && onDelete()
    },
  })
}

export default useDeleteGroup
