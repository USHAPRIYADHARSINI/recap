import React from 'react'
import Users from './Users'

function UsersList({usersList}) {
  return <div>
        <h1>UsersList</h1>
  <div className='user-list-container'>
    {/* console.log({usersList}) */}
  {usersList.map((user, index)=> (
  <Users key = {index} user = {user} id = {index}/>))}
</div>
</div>
}

export default UsersList