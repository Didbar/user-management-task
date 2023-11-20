import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addUser } from 'src/api/users'
import User from 'src/entities/User'

const useAddUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addUser,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries()
      queryClient.setQueriesData<User[]>({ queryKey: ['users'] }, (users = []) => [
        variables,
        ...users,
      ])
    },
  })
}

export default useAddUser
