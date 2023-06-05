import React, { useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { Filter } from '../filter/Filter';
import { Link } from 'react-router-dom';

export const Table = ({props}) => {

  const data = useMemo( () => props.books.map( book => {return book}),[])

  const columns = useMemo(() => props.columns.map( col => {return col}),[]);


  const {
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
    
  } = useTable({ columns, data }, useGlobalFilter);


  const { globalFilter } = state;


  return (
    
    <>
      <Filter filter={globalFilter} setFilter={setGlobalFilter} />

      <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 p-4">

        <div className="w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">LIBROS:</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">

                    {headerGroups.map(headerGroup => (
                      <tr className='' {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                          <th className='p-2 whitespace-nowrap' {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                      </tr>
                    ))}

                  </thead>

                  <tbody className='text-sm divide-y divide-gray-100' {...getTableBodyProps()}>
                    {rows.map(row => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => (
                            <td className='p-2 whitespace-nowrap text-center' {...cell.getCellProps()}> 

                                {
                                  cell.value.toString().includes("/api")
                                  ?
                                  <Link className='link link-nav' to={`detail${cell.value}`}>
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Ver detalles
                                    </button>
                                  </Link>
                                  :
                                  cell.render('Cell')
                                }
                            </td>
                          ))}
                        </tr>
                      );

                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

</section>

    </>

  );
};