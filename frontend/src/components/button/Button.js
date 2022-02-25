import React from 'react'

function Button({text, operation}) {
    // console.log(onClick)
  return (
    <button   className='btn' data-operation={operation}>
        {text}
    </button>
  )
}

export default Button