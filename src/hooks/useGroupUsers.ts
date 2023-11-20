import { useQuery } from '@tanstack/react-query'
import { findUsersByGroupId } from 'src/api/users'

const useGroupUsers = (groupId: number) =>
  useQuery({
    queryKey: ['group', groupId, 'users'],
    queryFn: () => findUsersByGroupId(groupId),
  })

export default useGroupUsers
