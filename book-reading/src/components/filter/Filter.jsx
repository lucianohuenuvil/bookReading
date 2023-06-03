import React from 'react'

export const Filter = ({filter, setFilter}) => {
  return (
    <div>
        Búsqueda: {''}
        <input
            type="text"
            value={filter || ''}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search..."
        />

    </div>
  )
}
