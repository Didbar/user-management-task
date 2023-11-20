import { Button, HStack, VStack } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom'
import useDeleteUser from 'src/hooks/useDeleteUser'
import useUser from 'src/hooks/useUser'
import UserCard from './UserCard'

const UserDetails = () => {
  const params = useParams()
  const { data: user } = useUser(parseInt(params.id!))

  const navigate = useNavigate()
  const deleteUser = useDeleteUser(() => navigate('/users'))

  if (!user) return null

  return (
    <VStack>
      <HStack w="100%">
        <Button colorScheme="red" size="sm" onClick={() => deleteUser.mutate(user.id)}>
          Delete User
        </Button>
      </HStack>
      <UserCard user={user} />
    </VStack>
  )
}

export default UserDetails
