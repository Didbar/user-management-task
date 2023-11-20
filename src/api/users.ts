import User from 'src/entities/User'
import GROUPS, { addUserToGroups } from './groups'

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

export const getUsers = () => {
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

export const removeUserGroup = (userId: number, groupId: number) => {
  const userIndex = USERS.findIndex(user => user.id === userId)

  if (userIndex !== -1) {
    USERS[userIndex].groups = USERS[userIndex].groups.filter(group => group !== groupId)
  }

  const groupIndex = GROUPS.findIndex(group => group.id === groupId)

  if (groupIndex !== -1) {
    GROUPS[groupIndex].members = GROUPS[groupIndex].members.filter(
      member => member !== userId
    )
  }

  return Promise.resolve()
}

export const deleteUser = (userId: number) => {
  const userIndex = USERS.findIndex(user => user.id === userId)

  if (userIndex === -1) {
    return Promise.reject(new Error(`User with ID ${userId} not found`))
  }

  USERS.splice(userIndex, 1)
  GROUPS.forEach(group => {
    group.members = group.members.filter(memberId => memberId !== userId)
  })

  return new Promise(resolve => resolve(userId))
}

export const assignUserToGroup = (userId: number, groupId: number) => {
  const userIndex = USERS.findIndex(user => user.id === userId)

  if (userIndex !== -1) USERS[userIndex].groups.push(groupId)

  const groupIndex = GROUPS.findIndex(group => group.id === groupId)

  if (groupIndex !== -1) GROUPS[groupIndex].members.push(userId)

  return Promise.resolve()
}

export default USERS
