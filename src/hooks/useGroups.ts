import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import GROUPS, { getGroups } from 'src/api/groups'
import Group from 'src/entities/Group'

const useGroups = () =>
  useQuery<Group[], Error>({
    queryKey: ['groups'],
    queryFn: getGroups,
    staleTime: ms('1d'),
    initialData: GROUPS,
  })

export default useGroups
