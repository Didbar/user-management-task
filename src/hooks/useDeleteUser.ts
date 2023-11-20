import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteUser } from 'src/api/users'

const useDeleteUser = (onDelete?: () => void) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ['users'] })
      onDelete && onDelete()
    },
  })
}

export default useDeleteUser
