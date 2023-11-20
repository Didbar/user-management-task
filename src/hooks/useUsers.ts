import { useQuery } from '@tanstack/react-query'
import ms from 'ms'
import USERS, { getUsers } from 'src/api/users'
import User from 'src/entities/User'

const useUsers = () =>
  useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: getUsers,
    staleTime: ms('1d'), // 24h
    initialData: USERS,
  })

export default useUsers
