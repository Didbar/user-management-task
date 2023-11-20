import { Grid, VStack } from '@chakra-ui/react'
import { Outlet, useParams } from 'react-router-dom'
import { UserForm, UsersTable } from 'src/features/user'

const UsersPage = () => {
  const params = useParams()

  return (
    <Grid templateColumns={{ base: '1fr', lg: '4fr 2fr' }} gap={1}>
      <VStack spacing="2rem">
        {params.id || <UserForm />}
        <UsersTable />
      </VStack>
      <Outlet />
    </Grid>
  )
}

export default UsersPage
