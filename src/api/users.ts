import User from 'src/entities/User'

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

export default USERS
