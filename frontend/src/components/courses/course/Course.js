import axios from 'axios'
import React from 'react'
import { CoursesContext } from '../../../App'
import Button from '../../button/Button'
import Modal from '../../modal/Modal'

function Course({id, name, desc}) {
    // console.log(name, desc)
const [viewModal, setViewModal]=React.useState(false)
const {setLoading, setCourses}=React.useContext(CoursesContext)
    function handleClick(e){
        // event delegation
        // console.log(e.target)
        console.log(e.target.dataset.operation)
        if(e.target.dataset.operation==="Edit"){
            setViewModal(true)
        }
        if(e.target.dataset.operation==="Delete") {
            if(window.confirm("Are you sure you want to delete this course with" + id)){
                // api call
                (async()=>{
                 try {
                     const res=await axios.delete(`http://localhost:5000/courses/${id}`,
                     {
                       headers:{
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin':'*'
                       }  
                     })
                     console.log(res,'deleted')
                     setLoading(true)
                     const updatedRes=await axios.get("http://localhost:5000/courses")
                     console.log(updatedRes,'updated data')
                     setCourses(updatedRes?.data)
                     setLoading(false)
                 } catch (error) {
                     console.log(error)
                 }
                })() 
                // get dispatch function which will referesh data
                console.log('deleted')
            }else{
                return;
            }
        }

    }
  return (
    <div className="bg-slate-200 text-center space-y-6 py-4 px-2">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-base text-gray-800">{desc}</p>

        <div onClick={handleClick} className="flex items-center justify-between">
        <Button text="Edit" operation="Edit" />
        <Button text="Delete"  operation="Delete"/>
        </div>
        {viewModal ? <Modal data={{id,name, desc}} operation="Edit" closeModal={setViewModal}/> :null}
    </div>
  )
}

export default Course