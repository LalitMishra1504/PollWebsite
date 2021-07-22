import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ResultOption from './ResultOption'; 
import QRCode from "react-qr-code";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Result = () => {
    const params = useParams();
    const [quesid, setuserid] = useState({});
    // const [option,setoption]=useState('');
    let totals=parseInt(0);
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
        // console.log(data);
        setuserid(data);
    }
    const mytext = localStorage.getItem(params._id);
    let option="";
    console.log(mytext);
    if(quesid.choice!==undefined)
    {
        for(let i=0; i<quesid.choice.length; i++)
        {
            console.log(quesid.choice[i].text);
            totals+=parseInt(quesid.choice[i].vote);
            console.log(quesid.choice[i].text,mytext);
            if(quesid.choice[i]._id===mytext)
            {
                console.log("hiiiiii");
                option=quesid.choice[i].text;
            }
            console.log(option);
        }
    }
    console.log("hi");
    useEffect(() => {
        callpollfun();
        toast.success("Thanks For Your Vote", {
        });
    }, [])
    return (
            <div className="databox">
                <div className="polldata1">
                    <h3 className="pollquestion1">{quesid.question}</h3>

                    {
                       quesid.choice===undefined?"":quesid.choice.map((value) => {
                            return (<ResultOption key={value._id} total={totals} value={value} />);
                        })
                    }
                </div>
                <div className="VoteText">
                    <h1 className="VoteTextHeading">{`You Voted:${option}`}</h1>
                    <QRCode id="abc" value="123" className="QrCode"></QRCode>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                </div>
    )
}

export default Result
