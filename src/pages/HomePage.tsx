import {
  Heading,
  SimpleGrid,
  Stat,
  StatGroup,
  StatLabel,
  StatNumber,
} from '@chakra-ui/react'

const HomePage = () => {
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
          <StatNumber>23</StatNumber>
        </Stat>
        <Stat>
          <StatLabel>Groups</StatLabel>
          <StatNumber>25</StatNumber>
        </Stat>
      </StatGroup>
    </SimpleGrid>
  )
}

export default HomePage
