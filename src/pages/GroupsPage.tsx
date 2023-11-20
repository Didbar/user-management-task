import { Grid, VStack } from '@chakra-ui/react'
import { Outlet, useParams } from 'react-router-dom'
import GroupForm from 'src/features/group/GroupForm'
import GroupsTable from 'src/features/group/GroupsTable'

const GroupsPage = () => {
  const params = useParams()

  return (
    <Grid templateColumns={{ base: '1fr', xl: '3fr 3fr' }} gap={1}>
      <VStack spacing="2rem">
        {params.id || <GroupForm />}
        <GroupsTable />
      </VStack>
      <Outlet />
    </Grid>
  )
}

export default GroupsPage
