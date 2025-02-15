import UserCard from '@/components/UserCard'
import React from 'react'

const AdminPage = () => {
  return (
    <div className='p-4 flex gap-4 flex-col md:flex-row '>
        {/* LEFT */}
        <div className='w-full lg:w-2/3'>L
        {/* USER CARDS */}
        <div className='flex gap-4 justify-between'>
          <UserCard type='student' />
          <UserCard type='parent' />
          <UserCard type='teacher' />
          <UserCard type='staff' />
        </div>
        </div>
        {/* RIGHT */}
        <div className='w-full lg:w-1/3'>R</div>
    </div>
  )
}

export default AdminPage
