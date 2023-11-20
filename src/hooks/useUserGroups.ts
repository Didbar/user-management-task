import { useQuery } from '@tanstack/react-query'
import { findGroupsByUserId } from 'src/api/groups'

const useUserGroups = (userId: number) =>
  useQuery({
    queryKey: ['user', userId, 'groups'],
    queryFn: () => findGroupsByUserId(userId),
  })

export default useUserGroups
