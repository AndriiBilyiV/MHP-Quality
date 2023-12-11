import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Table } from './AllUsersTable.styled';

export const AllUsersTable = () => {
  const { usersArray } = useAuth();
  const data = React.useMemo(() => usersArray, []);
  const columns = [
    {
      header: "Ім'я",
      accessorKey: 'userName',
    },
    {
      header: 'Посада',
      accessorKey: 'positionDisplay',
    },
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
        <thead></thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
