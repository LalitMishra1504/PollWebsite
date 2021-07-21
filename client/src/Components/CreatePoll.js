import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
const CreatePoll = (props) => {
    const history=useHistory();
    const [ques,setques]=useState(props.text);
    const [quesarr,setquesarr]=useState(props.arr);
    const createpoleHandler=async()=>{
        const res=await fetch("/api/quesopt/createpoll",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                question:props.text,
                choice:props.arr
            })
        });
        const data=await res.json();
        if(data.status===400||!data){
            window.alert("Error");
        }
        else{
            history.push({
                pathname:'/UserData',
            state:{id:data._id}});
        }
    }
    return (
        <>
          <button className="btn btn-success createbtn" onClick={createpoleHandler}>Create Poll</button>  
        </>
    )
}

export default CreatePoll
