import {
  Badge,
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
import useUserGroups from 'src/hooks/useUserGroups'

interface Props {
  user: User
}
const UserCard = ({ user }: Props) => {
  const { data: groups } = useUserGroups(user.id)

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
                    <CloseButton onClick={() => {}} />
                  </Tooltip>
                </HStack>
              </Badge>
            ))}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default UserCard
