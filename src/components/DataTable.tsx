import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import {
  Button,
  ButtonGroup,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  chakra,
} from '@chakra-ui/react'
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useState } from 'react'

export type DataTableProps<Data extends object> = {
  data: Data[]
  columns: ColumnDef<Data, any>[]
}

export function DataTable<Data extends object>({ data, columns }: DataTableProps<Data>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    state: {
      sorting,
      globalFilter,
    },
  })

  return (
    <TableContainer>
      <Input
        boxShadow="lg"
        maxW={{ base: '100%', md: '40%' }}
        my={4}
        placeholder="Search..."
        onChange={e => setGlobalFilter(e.target.value)}
      />
      <Table layout="fixed" w="100%" size="sm">
        <Thead>
          {table.getHeaderGroups().map(headerGroup => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map(header => {
                const meta: any = header.column.columnDef.meta
                return (
                  <Th
                    cursor="pointer"
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    isNumeric={meta?.isNumeric}>
                    {flexRender(header.column.columnDef.header, header.getContext())}

                    <chakra.span pl="4">
                      {header.column.getIsSorted() ? (
                        header.column.getIsSorted() === 'desc' ? (
                          <TriangleDownIcon aria-label="sorted descending" />
                        ) : (
                          <TriangleUpIcon aria-label="sorted ascending" />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                )
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.length === 0 && (
            <Tr>
            <Td colSpan={table.getAllColumns().length} textAlign="center" p="1rem">
              <Text as="b">No data found.</Text>
            </Td>
            </Tr>
          )}
          {table.getRowModel().rows.map(row => (
            <Tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                const meta: any = cell.column.columnDef.meta
                return (
                  <Td
                    key={cell.id}
                    isNumeric={meta?.isNumeric}
                    whiteSpace="normal"
                    fontSize={{ base: '0.68rem', md: '0.9rem', lg: '1rem' }}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                )
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
      {table.getPageCount() > 1 && (
        <ButtonGroup gap={4} mt={4}>
          <Button
            onClick={() => table.previousPage()}
            isDisabled={!table.getCanPreviousPage()}>
            Prev
          </Button>
          <Button onClick={() => table.nextPage()} isDisabled={!table.getCanNextPage()}>
            Next
          </Button>
        </ButtonGroup>
      )}
    </TableContainer>
  )
}
