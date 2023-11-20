import User from 'src/entities/User'
import { addUserToGroups } from './groups'

const USERS: User[] = [
  {
    id: 1,
    name: 'Daisey Mennell',
    email: 'dmennell0@hexun.com',
    groups: [1, 2, 3],
  },
  {
    id: 2,
    name: 'Sherlock Shaughnessy',
    email: 'sshaughnessy1@wordpress.com',
    groups: [1, 3],
  },
  {
    id: 3,
    name: 'Timmie Formby',
    email: 'tformby2@cbslocal.com',
    groups: [2, 3],
  },
]

export const getUsers = async () => {
  return new Promise<User[]>(resolve => resolve(USERS))
}

export const getUser = (userId: number) => {
  return new Promise<User | undefined>(resolve =>
    resolve(USERS.find(user => user.id === userId))
  )
}

export const addUser = (user: User) => {
  USERS.unshift(user)
  addUserToGroups(user.id, user.groups)
  return new Promise<User>(resolve => resolve(user))
}

export default USERS
