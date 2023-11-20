import { Box, Link as ChakraLink } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { DataTable } from 'src/components/DataTable'
import User from 'src/entities/User'
import useUsers from 'src/hooks/useUsers'

const UsersTable = () => {
  const { data: users } = useUsers()
  const columns = useMemo(() => getUserColumns(), [])

  return (
    <Box overflowY="auto" boxShadow="lg" borderRadius="4px" p="10px">
      <DataTable data={users} columns={columns} />
    </Box>
  )
}

export default UsersTable

const getUserColumns = () => {
  const columnHelper = createColumnHelper<User>()
  const columns = [
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
  return columns
}
