import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CreatePoll = (props) => {
    const history = useHistory();
    const [ques, setques] = useState(props.text);
    const [quesarr, setquesarr] = useState(props.arr);
    const createpoleHandler = async (event) => {
        event.preventDefault();
        if (props.text.trim().length === 0) {
            console.log("require");
            toast.info("Question Field Required", {
            });

            return;
        }
        // const obj={inputquestion, inputfield}
        for (let i = 0; i < props.arr.length; i++) {
            if (props.arr[i].text.trim().length === 0) {
                toast.info("Option Field Required", {
                });
                return;
            }
        }
        const res = await fetch("/api/quesopt/createpoll", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                question: props.text,
                choice: props.arr
            })
        });
        const data = await res.json();
        if (data.status === 400 || !data) {
            window.alert("Error");
        }
        else {
            history.push({
                pathname: '/UserData',
                state: { id: data._id }
            });
        }
    }
    return (
        <>
            <button className="btn btn-success createbtn" onClick={createpoleHandler}>Create Poll</button>
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
        </>
    )
}

export default CreatePoll
