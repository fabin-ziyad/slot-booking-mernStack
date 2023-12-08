import React from 'react'
import Doctor from '../Doctor/Doctor'

const ConfirmAppointment = ({props}) => {
  return (
      <div className='w-full lg:w-[80%]'>
          <div className=''>
              <Doctor doctor={props} />
          </div>
          <div className='border-b border-slate'>
              
          </div>
    </div>
  )
}

export default ConfirmAppointment