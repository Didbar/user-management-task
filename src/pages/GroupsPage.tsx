import { Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import GroupsTable from 'src/features/group/GroupsTable'

const GroupsPage = () => {
  return (
    <Grid templateColumns={{ base: '1fr', xl: '3fr 3fr' }} gap={1}>
      <GroupsTable />
      <Outlet />
    </Grid>
  )
}

export default GroupsPage
