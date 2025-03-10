import * as React from "react";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Credit, Debt, Payment } from "../types";


const Table = ({
  columns,
  rows,
}: {
  columns: any;
  rows: Omit<Credit, "actions">[] | Omit<Debt, "actions">[] |Omit<Payment,"actions">[];
}) => {
  const [data, _setData] = React.useState([...rows]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="border-Primary-dark border-2 rounded-2xl overflow-x-auto overflow-y-auto max-h-[500px]  ">
      <table className="min-w-[600px] w-full rounded-2xl  ">
        <thead className="bg-Primary-light border-b-2 border-Primary-dark">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="p-4 text-center font-[700] text-[17px] lg:text-[20px] text-veronika whitespace-nowrap"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="text-center">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="odd:bg-Primary-super-light even:bg-Primary-light text-[600]"
              style={{ height: "20px" }} // Set row height
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="p-2 font-[700] text-[15px] lg:text-[18px] text-veronika whitespace-nowrap"
                >
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

export default Table;
