import { Box, Link as ChakraLink } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import USERS from 'src/api/users'
import { DataTable } from 'src/components/DataTable'
import User from 'src/entities/User'

const UsersTable = () => {
  const USER_COLUMNS = getUserColumns()
  const columns = useMemo(() => USER_COLUMNS, [])
  //TODO: Create useUSersHook

  return (
    <Box overflowY="auto" boxShadow="lg" borderRadius="4px" p="10px">
      <DataTable data={USERS} columns={columns} />
    </Box>
  )
}

export default UsersTable

const getUserColumns = () => {
  const columnHelper = createColumnHelper<User>()
  const USER_COLUMNS = [
    columnHelper.accessor('name', {
      cell: info => (
        <ChakraLink as={Link} to={`/users/${info.row.original.id}`}>
          {info.getValue()}
        </ChakraLink>
      ),
      header: 'Name',
    }),
    columnHelper.accessor('email', {
      cell: info => info.getValue(),
      header: 'Email',
    }),
  ]
  return USER_COLUMNS
}
