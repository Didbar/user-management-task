import { Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const GroupsPage = () => {
  return (
    <Grid templateColumns={{ base: '1fr', xl: '3fr 3fr' }} gap={1}>
      <>Groups Table</>
      <Outlet />
    </Grid>
  )
}

export default GroupsPage
