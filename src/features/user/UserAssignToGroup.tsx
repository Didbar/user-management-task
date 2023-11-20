import { Button, FormControl, HStack, Select } from '@chakra-ui/react'
import { useRef } from 'react'
import useAssignUserToGroup from 'src/hooks/useAssignUserGroup'
import useGroups from 'src/hooks/useGroups'
import useUserManagementStore from 'src/store'

interface Props {
  userId: number
}
const UserAssignToGroup = ({ userId }: Props) => {
  const { data: groups } = useGroups()
  const filteredGroups = groups.filter(g => !g.members.includes(userId))
  const options = filteredGroups.map(g => ({ value: g.id, label: g.name }))
  const ref = useRef<HTMLSelectElement>(null)
  const assignGroup = useAssignUserToGroup()
  const setAddingGroup = useUserManagementStore(s => s.setAddingGroup)

  const handleAssign = () => {
    if (ref.current)
      assignGroup.mutate({ userId: userId, groupId: Number(ref.current.value) })
    setAddingGroup(false)
  }

  return (
    <HStack w="100%">
      <FormControl>
        <Select placeholder="Select Group" ref={ref}>
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <Button colorScheme="teal" size="sm" onClick={handleAssign}>
          Assign
        </Button>
      </FormControl>
    </HStack>
  )
}

export default UserAssignToGroup
