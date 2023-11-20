import USERS from 'src/api/users'
import Group from 'src/entities/Group'

const GROUPS: Group[] = []

export const getGroups = () => {
  return new Promise<Group[]>(resolve => resolve(GROUPS))
}

export const getGroup = (groupId: number) => {
  return new Promise<Group | undefined>(resolve =>
    resolve(GROUPS.find(group => group.id === groupId))
  )
}

export const findGroupsByUserId = (userId: number) => {
  return new Promise<Group[]>(resolve =>
    resolve(GROUPS.filter(group => group.members.includes(userId)))
  )
}

export const addUserToGroups = (userId: number, groupIds: number[]): Promise<Group[]> => {
  return new Promise(resolve => {
    GROUPS.forEach(group => {
      if (groupIds.includes(group.id) && !group.members.includes(userId))
        group.members.push(userId)

      return group
    })
    resolve(GROUPS)
  })
}

export const addGroup = (group: Group) => {
  GROUPS.unshift(group)
  return new Promise<Group>(resolve => resolve(group))
}

export const deleteGroup = (groupId: number) => {
  const groupIndex = GROUPS.findIndex(group => group.id === groupId)

  if (groupIndex === -1)
    return Promise.reject(new Error(`Group with ID ${groupId} not found`))

  if (GROUPS[groupIndex].members.length > 0)
    return Promise.reject(new Error(`Group contains user and can't be deleted`))

  GROUPS.splice(groupIndex, 1)
  USERS.forEach(user => {
    user.groups = user.groups.filter(groupId => groupId !== groupId)
  })

  return Promise.resolve()
}
export default GROUPS
