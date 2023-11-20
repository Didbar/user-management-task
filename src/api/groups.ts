import Group from 'src/entities/Group'

const GROUPS: Group[] = [
  {
    id: 1,
    name: 'Community Outreach Specialist',
    members: [1, 2],
    slug: 'et',
  },
  {
    id: 2,
    name: 'Social Worker',
    members: [1, 3],
    slug: 'ridiculus',
  },
  {
    id: 3,
    name: 'Staff Accountant IV',
    members: [1, 2, 3],
    slug: 'arcu',
  },
]

export const getGroups = async () => {
  return new Promise<Group[]>(resolve => resolve(GROUPS))
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

export default GROUPS
