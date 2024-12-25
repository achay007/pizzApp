//eslint-disable-next-line
import React from 'react'
import { useSelector } from 'react-redux'
function Username() {
  const username = useSelector(state => state.user.username)
  console.log(username)
  return (
    <div className='text-sm font-semibold hidden  md:block'>{username}</div>
  )
}

export default Username