import {
  Badge,
  Button,
  Card,
  CardBody,
  CloseButton,
  HStack,
  Heading,
  Text,
  Tooltip,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import User from 'src/entities/User'
import useRemoveUserGroup from 'src/hooks/useRemoveUserGroup'
import useUserGroups from 'src/hooks/useUserGroups'
import useUserManagementStore from 'src/store'
import UserAssignToGroup from './UserAssignToGroup'

interface Props {
  user: User
}
const UserCard = ({ user }: Props) => {
  const { data: groups } = useUserGroups(user.id)
  const deleteGroup = useRemoveUserGroup()
  const addingGroup = useUserManagementStore(s => s.addingGroup)
  const setAddingGroup = useUserManagementStore(s => s.setAddingGroup)

  return (
    <Card borderRadius="0.5rem" variant="outline" py={2} w="full">
      <Link to="/users">
        <CloseButton />
      </Link>
      <Heading as={'h3'} textAlign="center">
        User details:
      </Heading>
      <CardBody>
        <VStack align="flex-start" whiteSpace="nowrap">
          <Badge p="0.5rem 1rem" fontSize="md">
            Id: {user.id}
          </Badge>
          <HStack>
            <Text as="span">Name:</Text>
            <Text as="b">{user.name}</Text>
          </HStack>
          <HStack>
            <Text as="span">Email:</Text>
            <Text as="b">{user.email}</Text>
          </HStack>
          <HStack wrap="wrap">
            <Text as="span">Groups:</Text>
            {groups?.map(g => (
              <Badge key={g.id} p="0.5rem 1rem" colorScheme="blue">
                <HStack>
                  <Link to={`/groups/${g.id}`}>{g.name}</Link>
                  <Tooltip label="Remove Group">
                    <CloseButton
                      onClick={() =>
                        deleteGroup.mutate({ userId: user.id, groupId: g.id })
                      }
                    />
                  </Tooltip>
                </HStack>
              </Badge>
            ))}
            {groups && addingGroup ? (
              <UserAssignToGroup userId={user.id} />
            ) : (
              <Button
                colorScheme="teal"
                size="sm"
                onClick={() => {
                  setAddingGroup(true)
                }}>
                Add Group
              </Button>
            )}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default UserCard
