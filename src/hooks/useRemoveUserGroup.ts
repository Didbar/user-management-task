import { useMutation, useQueryClient } from '@tanstack/react-query'
import { removeUserGroup } from 'src/api/users'

interface Variables {
  userId: number
  groupId: number
}

const useRemoveUserGroup = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, groupId }: Variables) => removeUserGroup(userId, groupId),
    onSuccess: (_data, variables) =>
      queryClient.refetchQueries({ queryKey: ['user', variables.userId, 'groups'] }),
  })
}

export default useRemoveUserGroup
