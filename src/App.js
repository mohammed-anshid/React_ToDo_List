import React, { useState } from "react";
import './App.css'

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo ,setToDo] = useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} type="text" onChange={(e)=>setToDo(e.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{text:toDo,id:Date.now(),status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value,index)=>{
            
         
              return(
                    <div key={index} className="todo">
                      <div className="left">
                        <input onChange={(e)=>{
                          setToDos(toDos.filter(obj2=>{
                            if(obj2.id===value.id){
                              obj2.status=e.target.checked
                            }
                            return obj2;
                          }))

                        }} value={value.status} type="checkbox" name="" id="" />
                        <p>{value.text}</p>
                      </div>
                      <div className="right">
                        <i onClick={()=>{
                         
                          setToDos(toDos.filter((object,index)=>{
                          
                            if(object.id===value.id){
                             
                              toDos.splice(index,1)
                               console.log(toDos);

                              }  
                        }))

                        setToDos([...toDos])
                        }} className="fas fa-times"></i>
                      </div>
                    </div>
                    )
             }) }

             {
              toDos.map((obj)=>{
                if(obj.status){
                  return(
                  <h3 style={{color:'#fff',marginTop:'10px'} }>{obj.text}</h3>
                 )
                }
                return null;
              })
              
             }
      </div>
    </div>
  )   

}

export default App;
