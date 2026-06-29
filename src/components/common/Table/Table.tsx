import type { TableProps } from "./Table.types";

function Table({ columns, children }: TableProps) {
  return (
    <div className="m-4 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full table-fixed text-left text-sm">
        <thead className="bg-slate-100 text-slate-600">
          <tr>
            {columns.map((column) => (
              <th
                key={column.label}
                className={`${column.width ?? ""} overflow-hidden text-ellipsis whitespace-nowrap px-4 py-3 font-bold`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-slate-700 [&_td]:h-14 [&_td]:max-w-0 [&_td]:overflow-hidden [&_td]:text-ellipsis [&_td]:whitespace-nowrap [&_td]:align-middle">
          {children}
        </tbody>
      </table>
    </div>
  );
}

export default Table;