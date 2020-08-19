import React from 'react'

export const User = (data) => {
    return (
        <div>
            {
              data.map(inf => (
                  <p>{data.char_id}</p>
                  <p>{data.name}</p>
                  <p>{data.nickname}</p>
                  <p>{data.category}</p>
              ))
            }
        </div>
    )
}
