import axios from 'axios'
import React from 'react'
import { CoursesContext } from '../../App'



function ChildModal({operation, data, closeModal}){
    const[name, setName]=React.useState( data!==undefined ? data.name : '')
    const[desc, setDesc]=React.useState(data!==undefined ? data.desc : '')
    const[id, setId]=React.useState(0)
    const {setLoading, setCourses}=React.useContext(CoursesContext)
    // console.log(setLoading, setCourses)
    console.log(operation)
    function handleSubmit(e){
     e.preventDefault()
     if(name.length===0 && desc.length===0 && (id===0 || id==='')) alert("Please fill out all the fields");
     else{

         switch(operation){
             case "Add":
                 (async ()=>{
                     try {
                         const res=await axios.post('http://localhost:5000/courses',{
                             id,
                             name,
                             desc
                            },{
                                headers:{
                                    'Content-Type':'application/json',
                                    'Access-Control-Allow-Origin':'*'
                                }
                            })
                            console.log(res, 'added')
                            setLoading(true)
                            const resUpdated = await axios.get("http://localhost:5000/courses", {
                                headers: {
                                    "Content-Type": "application/json",
                                    "Access-Control-Allow-Origin": "*",
                                },
                            });
                            const newCourses=resUpdated?.data
                            setCourses(newCourses)
                            setLoading(false)
                            closeModal()
                            console.log(resUpdated)
                        } catch (error) {
                            console.log(error)
                        }
                    })();
                    break;
             case "Edit":
                 (async()=>{
                     try {
                         
                         const res=await axios.put("http://localhost:5000/courses", {
                             id:data.id,
                             name,
                             desc
                            }, {
                                headers:{
                                    'Content-Type':'application/json',
                                    'Access-Control-Allow-Origin':'*'
                                }
                            })
                            console.log(res,'updated doc with'+id)
                            setLoading(true)
                            const updatedCourses=await axios.get("http://localhost:5000/courses")
                            console.log(updatedCourses, 'updated courses')
                            setCourses(updatedCourses?.data)
                            setLoading(false)
                            closeModal()
                        } 
                            catch (error) {
                           console.log(error)  
                        }
                 })()
                   
              break;
                    default: return;  
                }
            }
     console.log('submitted')
    }
    console.log(name, desc)
    return (
        <div className="bg-white p-4 rounded-md">
            <form onSubmit={handleSubmit} className="grid gap-5">
                <input type="number" placeholder='id' className='p-2' onChange={(e)=>setId(e.target.value)} value={id} disabled={operation==="Edit"} />
                <input className='p-2' type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
                <input className='p-2' type="text" placeholder='desc' value={desc} onChange={(e)=>setDesc(e.target.value)} />
                <div className="flex items-center justify-between">
                <button type="button" onClick={()=>closeModal()} className="btn bg-slate-600 hover:bg-slate-400 text-white">Cancel</button>
                <button type="submit" className="btn hover:bg-slate-400 bg-slate-600 text-white">Submit</button>
                </div>
            </form>
        </div>
    )
    
}

function Modal({operation, data, closeModal}) {
  return (
    <div className="absolute w-full overflow-hidden inset-0 h-[100vh] bg-slate-900  ">

        <div className="relative top-10 max-w-md  mx-auto z-50 ">
        <ChildModal  operation={operation} data={data} closeModal={closeModal} />
        </div>
    </div>
  )
}

export default Modal