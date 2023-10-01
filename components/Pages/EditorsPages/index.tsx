import React from 'react'
import Request from './Request'
import Writer from './Writter'

const EditorsPages = () => {
  return (
    <div className="p-3 flex flex-col gap-4 w-full overflow-y-auto">
        <h1 className="heading">Editörler</h1>

        <div className='flex flex-col gap-3'>

            <div className='grid grid-cols-4 gap-3 mb-4'>
                <Writer/>
                <Writer/>
                <Writer/>
                <Writer/>
                <Writer/>
                <Writer/>
                <Writer/>
            </div>

            <h2 className='heading'>Editör istekleri</h2>

            <div className='grid grid-cols-2 gap-2'>
                <Request/>
                <Request/>
                <Request/>
                <Request/>
            </div>
        </div>
    </div>
  )
}

export default EditorsPages