import { Grid } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const UsersPage = () => {
  return (
    <Grid templateColumns={{ base: '1fr', lg: '4fr 2fr' }} gap={1}>
      <>User Table</>
      <Outlet />
    </Grid>
  )
}

export default UsersPage
