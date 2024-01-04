import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { getRecords } from 'components/firebase';
import React, { useEffect, useState } from 'react';
import { Table } from './CrashTable.styled';

export const CrashTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const foo = async () => {
      try {
        const result = await getRecords({
          year: 2024,
          month: 1,
        });
        const tableData = Object.entries(result).map(item => item[1]);
        setData(tableData);
      } catch (err) {
        console.log(err);
      }
    };
    foo();
  }, []);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const lastMonthDay = new Date(currentYear, currentMonth, 0).getDate();
  const getMonthHeades = () => {
    let array = [];
    for (let i = 1; i <= lastMonthDay; i += 1) {
      array.push({ header: i.toString(), accessorKey: i.toString() });
    }
    return array;
  };
  const daysArray = getMonthHeades();

  const columns = [
    {
      header: 'Дільниця',
      accessorKey: 'area',
    },
    {
      header: 'Точка',
      accessorKey: 'display',
    },
    ...daysArray,
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table>
        <thead>
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
        </thead>
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
