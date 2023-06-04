import React, { useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';
import { Filter } from '../filter/Filter';
import { Link } from 'react-router-dom';

export const Table = ({props}) => {

  const data = useMemo( () => props.books.map( book => {return book}),[])

  const columns = useMemo(() => props.columns.map( col => {return col}),[]);


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
    
  } = useTable({ columns, data }, useGlobalFilter);


  const { globalFilter } = state;


  return (
    
    <>
      <Filter filter={globalFilter} setFilter={setGlobalFilter} />

      <table className= 'w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200'{...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr className='bg-gray-200' {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className='border border-gray-400 px-4 py-2' {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>

          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className='bg-gray-200' {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td className='border border-gray-400 px-4 py-2' {...cell.getCellProps()}> 

                      {
                        cell.value.toString().includes("/api")
                        ?
                        <Link className='link link-nav' to={`detail${cell.value}`}>Ver Información</Link>
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

    </>

  );
};