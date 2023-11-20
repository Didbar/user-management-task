import { useQuery } from '@tanstack/react-query'
import { getGroup } from 'src/api/groups'

const useGroup = (groupId: number) =>
  useQuery({
    queryKey: ['group', groupId],
    queryFn: () => getGroup(groupId),
  })

export default useGroup
