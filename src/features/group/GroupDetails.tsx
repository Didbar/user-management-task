import { Button, CloseButton, HStack, VStack } from '@chakra-ui/react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useDeleteGroup from 'src/hooks/useDeleteGroup'
import useGroup from 'src/hooks/useGroup'

const GroupDetails = () => {
  const params = useParams()
  const { data: group } = useGroup(parseInt(params.id!))
  const navigate = useNavigate()
  const deleteGroup = useDeleteGroup(() => navigate('/groups'))

  if (!group) return null

  const groupContainsMembers = group.members.length > 0

  return (
    <VStack>
      <HStack w="100%">
        <Button
          isDisabled={groupContainsMembers}
          colorScheme="red"
          size="sm"
          onClick={() => deleteGroup.mutate(group.id)}>
          Delete Group
        </Button>
      </HStack>
      <>
        <Link to="/groups">
          <CloseButton />
        </Link>
        Group Card goes here {group.id}
      </>
    </VStack>
  )
}

export default GroupDetails
