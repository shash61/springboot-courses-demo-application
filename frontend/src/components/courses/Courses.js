import axios from 'axios'
import React from 'react'
import Course from './course/Course'




const Courses = ({courses}) => {
   
    // if(loading) return <div>Loading....</div>
  return (
    <div className="grid grid-cols-3 p-4 gap-4">
        {
            courses?.map(({id, name, desc})=>(
                <Course key={id} id={id} name={name} desc={desc} />
            ))
        }
    </div>
  )
}

export default Courses