import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

const SinglePoll = () => {
    const [datause,reqdata]=useState({})
    const params=useParams();
    const callpollfun=async()=>{
    const res=await fetch(`/api/quesopt/poll/${params._id}`,{
        method:"GET",
        headers:{
           Accept:"application/json",
           "Content-Type":"application/json" 
        },
        credentials:"include",
    });
    const data=await res.json();
    reqdata(data);
    }
    useEffect(()=>{
      callpollfun();
    },[])
    return (
    <div className="polldata">
     <div className="quesstyle">{datause.question}</div>
     {
         datause.choice.map((ele)=>{
             return(
                 <div className="card"><h3>{ele.text}</h3></div>
             )
         })
     }
    </div>
    )
}

export default SinglePoll
