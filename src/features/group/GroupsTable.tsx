import { Box, Link as ChakraLink } from '@chakra-ui/react'
import { createColumnHelper } from '@tanstack/react-table'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { DataTable } from 'src/components/DataTable'
import Group from 'src/entities/Group'
import useGroups from 'src/hooks/useGroups'

const GroupsTable = () => {
  const { data: groups } = useGroups()
  const columns = useMemo(() => getUserColumns(), [])

  return (
    <Box
      overflowY="auto"
      maxHeight={{ base: '40vh', lg: '85vh' }}
      boxShadow="lg"
      borderRadius="4px">
      <DataTable data={groups} columns={columns} />
    </Box>
  )
}

export default GroupsTable

const getUserColumns = () => {
  const columnHelper = createColumnHelper<Group>()
  const columns = [
    columnHelper.accessor('name', {
      cell: info => (
        <ChakraLink as={Link} to={`/groups/${info.row.original.id}`}>
          {info.getValue()}
        </ChakraLink>
      ),
      header: 'Name',
    }),
    columnHelper.accessor('slug', {
      cell: info => info.getValue(),
      header: 'Slug',
    }),
    columnHelper.accessor('id', {
      cell: info => info.getValue(),
      header: 'Id',
    }),
  ]
  return columns
}
