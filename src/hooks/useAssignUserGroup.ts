import { useMutation, useQueryClient } from '@tanstack/react-query'
import { assignUserToGroup } from '../api/users'

interface Variables {
  userId: number
  groupId: number
}

const useAssignUserToGroup = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: ({ userId, groupId }: Variables) => assignUserToGroup(userId, groupId),
    onSuccess: (_data, variables) =>
      queryClient.refetchQueries({ queryKey: ['user', variables.userId, 'groups'] }),
  })
}

export default useAssignUserToGroup
