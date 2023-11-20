import {
  Heading,
  SimpleGrid,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'
import useGroups from 'src/hooks/useGroups'
import useUsers from 'src/hooks/useUsers'

const HomePage = () => {
  const { data: users } = useUsers()
  const { data: groups } = useGroups()
  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      p="2rem"
      gap="1rem"
      textAlign={{ base: 'center', md: 'initial' }}>
      <Heading>Dashboard</Heading>
      <StatGroup>
        <Stat>
          <StatLabel>Users</StatLabel>
          <StatNumber>{users.length}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Groups</StatLabel>
          <StatNumber>{groups.length}</StatNumber>
        </Stat>
      </StatGroup>
    </SimpleGrid>
  )
}

export default HomePage
