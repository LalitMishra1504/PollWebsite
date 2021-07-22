import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

const SinglePoll = () => {
    const history = useHistory();
    const [flag, setflag] = useState("")
    const userSelectPoll = (id) => {
        // console.log(id);
        setflag(id)
    }
    const [datause, reqdata] = useState({})
    const params = useParams();
    const callpollfun = async () => {
        const res = await fetch(`/api/quesopt/poll/${params._id}`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include",
        });
        const data = await res.json();
        reqdata(data);
    }
    const SubmitPoll = async () => {
        const res = await fetch(`/api/quesopt/updatepoll/${params._id}/${flag}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log("yes");
        const data = await res.json();
        window.alert("Vote Added");
        localStorage.setItem(params._id,flag);
        history.push(`/poll/result/${params._id}`);
    }
    useEffect(() => {
        if (localStorage.getItem(params._id) !== null) {
            history.push(`/poll/result/${params._id}`);
        }
        callpollfun();
    }, [])
    return (
        <div className="polldata">
            <div className="container">
                <div className="quesstyle">{datause.question}?</div>
                {datause.choice === undefined ? "" : datause.choice.map((ele) => {
                    return <div className={flag === ele._id ? "polloption polloptiondata polloptiondata2" : "polloption polloptiondata polloptiondata3"} onClick={() => {
                        userSelectPoll(ele._id)
                    }}><h2 className="text">{ele.text}</h2></div>
                })}
            </div>
            <button className="btn btn-success subbutton" onClick={SubmitPoll}>Submit Poll</button>
        </div>
    )
}

export default SinglePoll
