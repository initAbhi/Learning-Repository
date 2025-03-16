import React from 'react'

interface UserShape  {
    params: {id: number}
}

const User = ({params: {id}}: UserShape) => {
  return (
    <div>
     {id}
    </div>
  )
}

export default User
