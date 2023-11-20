import { Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import UsersTable from 'src/features/user/UsersTable'

const UsersPage = () => {
  return (
    <Grid templateColumns={{ base: '1fr', lg: '4fr 2fr' }} gap={1}>
      <UsersTable />
      <Outlet />
    </Grid>
  )
}

export default UsersPage
