import { useEffect, useState } from "react";

let App = ()=>{
  const [todo,settodo] = useState({text:"",id:""});
  const [list,setlist] = useState([]);
  const [editing,setediting] = useState({id:"",isedit:false});
  const [para,setpara] = useState("");
  const [para1,setpara1] = useState("");
  const inputValue = (e)=>{
    settodo({...todo,text:e.target.value});
  }


  useEffect(()=>{
    let newTodo = localStorage.getItem("todoEl");
    setlist(JSON.parse(newTodo));
    console.log(JSON.parse(newTodo));
  },[])



  const addingtodos = (e) =>{
    e.preventDefault();
    if(todo.text === ""){
      setpara("Please Enter Todo Name.");
      setpara1("");
    }else{
      const newTodo = {
        text:todo.text,
        id:new Date().getTime().toString()
      }
      setlist([...list,newTodo])
      settodo({text:"",id:""})
      setpara("");
      setpara1("");
    }
  }



  const deletingTodo = (id)=>{
    let filtering = list.filter((e)=>{
      return e.id !== id;
    })
    setlist(filtering)
    setpara1("");
  }



  const editTodo = (id) =>{
    let gettingObj = list.find((itms)=>{
      return itms.id === id;
    });
    settodo({...todo,text:gettingObj.text,id:gettingObj.id});
    setediting({...editing,id:id,isedit:true})
    setpara1("");
  }



  const updating = (e) =>{
    e.preventDefault();

    if(todo.text === ""){
      setpara("Please Enter Todo Name.");
      setpara1("");
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
    let timing = setInterval(()=>{
        setpara("Updated Successfully..") 
    },10)
    setTimeout(()=>{
      clearInterval(timing);
      setpara("");
    },1000)
    // setpara("");
    setpara1("");
  }
  }


  function paraOne(){
    localStorage.setItem("todoEl",JSON.stringify(list));
    let timing = setInterval(()=>{
      setpara1("Saved Successfully...."); 
  },10)
  setTimeout(()=>{
    clearInterval(timing);
    setpara1("");
  },1000)
    
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
      list.length>0 || list.length === null ?
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
      <button onClick={paraOne} className="btn btn-primary">Save</button>
      <p className="text-success mt-3">{para1}</p>
      </ul>
      :<div className="d-flex flex-column justify-content-center">
      <h3 className="text-center">No Data Found</h3>
      <button onClick={paraOne} className="btn btn-primary align-self-center">Save</button>
      <p className="text-success mt-3 text-center">{para1}</p>
      </div>
      
  }
  </div>);
}

export default App;
