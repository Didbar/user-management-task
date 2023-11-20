import {
  Badge,
  Card,
  CardBody,
  Link as ChakraLink,
  CloseButton,
  HStack,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Group from 'src/entities/Group'
import useGroupUsers from 'src/hooks/useGroupUsers'

interface Props {
  group: Group
}
const GroupCard = ({ group }: Props) => {
  const { data: users } = useGroupUsers(group.id)
  return (
    <Card borderRadius="0.5rem" variant="outline" py={2} w="full">
      <Link to="/groups">
        <CloseButton />
      </Link>
      <Heading as={'h3'} textAlign="center">
        Group details:
      </Heading>
      <CardBody>
        <VStack align="flex-start" whiteSpace="nowrap">
          <Badge p="0.5rem 1rem" fontSize="md">
            Id: {group.id}
          </Badge>
          <HStack>
            <Text as="span">Name:</Text>
            <Text as="b">{group.name}</Text>
          </HStack>
          <HStack>
            <Text as="span">Slug:</Text>
            <Text as="b">{group.slug}</Text>
          </HStack>
          <HStack wrap="wrap">
            <Text as="span">Users:</Text>
            {users?.map(u => (
              <Badge
                key={u.id}
                p="0.3rem 0.5rem"
                fontSize="0.65rem"
                colorScheme="blue"
                variant="outline">
                <ChakraLink as={Link} to={`/users/${u.id}`}>
                  {u.name}
                </ChakraLink>
              </Badge>
            ))}
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  )
}

export default GroupCard
