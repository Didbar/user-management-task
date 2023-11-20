import { useQuery } from '@tanstack/react-query'
import { getUser } from 'src/api/users'

const useUser = (userId: number) =>
  useQuery({
    queryKey: ['user', userId],
    queryFn: () => getUser(userId),
  })

export default useUser
