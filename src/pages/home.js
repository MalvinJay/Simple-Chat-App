import React from 'react'
import Chat from '../components/Chat'

const home = ({ socket }) => {
  return (
    <div className=''> {/* container mx-auto */}
      <Chat socket={socket} />
    </div>
  )
}

export default home