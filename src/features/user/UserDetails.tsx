import { Button, HStack, VStack } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useUser from 'src/hooks/useUser'
import UserCard from './UserCard'

const UserDetails = () => {
  const params = useParams()
  const { data: user } = useUser(parseInt(params.id!))

  if (!user) return null

  return (
    <VStack>
      <HStack w="100%">
        <Button colorScheme="red" size="sm" onClick={() => {}}>
          Delete User
        </Button>
      </HStack>
      <UserCard user={user} />
    </VStack>
  )
}

export default UserDetails
