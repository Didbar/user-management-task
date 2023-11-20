import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addGroup } from 'src/api/groups'
import Group from 'src/entities/Group'

const useAddGroup = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: addGroup,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['groups'] })
      queryClient.setQueriesData<Group[]>({ queryKey: ['groups'] }, (groups = []) => [
        variables,
        ...groups,
      ])
    },
  })
}

export default useAddGroup
