import React,{FC} from 'react'

export interface UserInfoSchema {
    username: string
    email: string
    age: number 
}

const Userinfo : FC<UserInfoSchema> = ({username, email, age}) => {

  return (
    <div>
      <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>{age}</li>
      </ul>
    </div>
  )
}

export default Userinfo
