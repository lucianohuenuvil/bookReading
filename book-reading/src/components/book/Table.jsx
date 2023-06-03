import React, { useMemo, useEffect } from 'react';
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
    <div>

      
      <Filter filter={globalFilter} setFilter={setGlobalFilter} />

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>

                    {row.cells.map(cell => (
                      <td {...cell.getCellProps()}> 

                         {

                          // console.log(cell.value.toString().includes("george"))
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
    </div>
  );
};