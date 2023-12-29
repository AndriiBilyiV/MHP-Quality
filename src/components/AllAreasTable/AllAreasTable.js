import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAreas } from '../../redux/operations';
import { selectAreas } from '../../redux/selectors';

export const AllAreasTable = () => {
  const dispatch = useDispatch();
  const { company } = useAuth();
  useEffect(() => {
    const foo = async () => await dispatch(getAreas(company));
    foo();
  }, [dispatch, company]);
  const areas = useSelector(selectAreas);
  const data = areas;
  const columns = [
    {
      header: 'Дільниці',
      accessorKey: 'areaDisplay',
    },
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <table>
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
      </table>
    </div>
  );
};
