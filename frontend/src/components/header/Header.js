import React from 'react'
import Button from '../button/Button'
import Modal from '../modal/Modal'

const Header = () => {
  const [viewModal, setViewModal]=React.useState(false)
  
  function handleClick(e){
    console.log('click')
      setViewModal(true)   
  }
  return (
    <div className="relative bg-gray-300 p-4 h-16 w-full flex items-center justify-between " >
        <p className='text-xl'>Learn and Code</p>
        <div onClick={handleClick}>
        <Button text="Add Course" />
        </div>

        {viewModal ? <Modal operation="Add" closeModal={setViewModal} /> : null}
    </div>
  )
}

export default Header