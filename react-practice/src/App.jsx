import { useState } from "react";

let App = ()=>{
  const [todo,settodo] = useState({text:"",id:""});
  const [list,setlist] = useState([]);
  const [editing,setediting] = useState({id:"",isedit:false});
  const [para,setpara] = useState("");
  const inputValue = (e)=>{
  
    settodo({...todo,text:e.target.value});
  }



  const addingtodos = (e) =>{
    e.preventDefault();
    if(todo.text === ""){
      setpara("Please Enter Todo Name.");
    }else{
      const newTodo = {
        text:todo.text,
        id:new Date().getTime().toString()
      }
      setlist([...list,newTodo])
      settodo({text:"",id:""})
      setpara("");
    }
  }



  const deletingTodo = (id)=>{
    let filtering = list.filter((e)=>{
      return e.id !== id;
    })
    setlist(filtering)
  }



  const editTodo = (id) =>{
    let gettingObj = list.find((itms)=>{
      return itms.id === id;
    });
    settodo({...todo,text:gettingObj.text,id:gettingObj.id});
    setediting({...editing,id:id,isedit:true})
  }



  const updating = (e) =>{
    e.preventDefault();

    if(todo.text === ""){
      setpara("Please Enter Todo Name.");
    }else{
    let newdo = list.map((eachItem)=>{
        if(eachItem.id === editing.id){
          return {
            text:todo.text,
            id:editing.id
          }
        }
          else
          {
            return eachItem;
          }
    });
    setlist(newdo)
    setediting({...editing,isedit:false});
    settodo({text:"",id:""});
    setpara("");
  }
  }


  return(<div>
    <h1 className="text-primary text-center" >Todos App Using React</h1>
    <form>
      <div>
      <input className="inputEl" type="text" value={todo.text} onChange={inputValue} placeholder="Enter Todo Name"/>
      { editing.isedit ? <button onClick={updating} className="btn btn-primary">Update</button>
      :<button onClick={addingtodos} className="btn btn-primary">Add</button>}
      </div>
      <p className="paraEl text-danger">{para}</p>
    </form>
    <hr />
  {
      list.length>0?
    <ul className="container-one">
    {
      list.map((items)=>{
        return(<div key={items.id} className="list-container">
          <span>{items.text}</span>
          <div className="input-container">
          <button className="btn btn-warning ml-3" onClick={()=> editTodo(items.id)}>Edit</button>
          <button className="btn btn-danger ml-3" onClick={() => deletingTodo(items.id)}>Delete</button>
          </div>
          </div>);
        })
      }
      </ul>:
      <h3 className="text-center">No Data Found</h3>
  }
  </div>);
}

export default App;
