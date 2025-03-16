import React, { FC } from 'react'
import { UserInfoSchema } from './Userinfo'

interface AdminInfoSchema extends UserInfoSchema {
    isAdmin: boolean
}

const Admininfo: FC<AdminInfoSchema> = ({username, email, age,isAdmin}) => {
  return (
    <div>
      <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
        <li>{isAdmin && <p>Admin</p>}</li>
      </ul>
    </div>
  )
}

export default Admininfo
