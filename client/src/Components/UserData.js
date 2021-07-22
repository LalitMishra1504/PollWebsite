import React,{useEffect,useState} from 'react'
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import copy from "copy-to-clipboard";
const UserData = (props) => {
    const location = useLocation();
    const [copyText, setcopyText] = useState(`http://localhost:3000/singlepoll/${location.state.id}`);
    const [copyText1, setcopyText1] = useState(`http://localhost:3000/singlepoll/${location.state.id}`);
    useEffect(()=>{
        toast.success("Poll Created Succesfully!!",{
        });
    },[])
    const copyToClipboard = (e) => {
        setcopyText(e.target.value);
        copy(copyText);
        console.log(copyText);
        toast.success("Link Copied",{
        });
        
      }
      const copyToClipboard1 = (e) => {
        setcopyText1(e.target.value);
        copy(copyText1);
        console.log(copyText);
        toast.success("Link Copied",{
        });
        
      }
    return (
        <>
            <div className="mainDiv">
                <div className="childdiv">
                    <div className="LinkUser">
                        <h3 className="h3userLink">The link to your poll is</h3>
                        <div className="setter">
                            <input className="form-control textareaLink" type="text" value={`http://localhost:3000/singlepoll/${location.state.id}`} />
                            <i className="fa fa-clipboard copybutton" onClick={copyToClipboard} aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="LinkadminUser">
                        <h3 className="h3adminLink">The admin link to your poll is</h3>
                        <div className="setter">
                            <input className="form-control textareaLink" type="text" value={`http://localhost:3000/singlepoll/${location.state.id}/admin`} />
                            <i className="fa fa-clipboard copybutton" onClick={copyToClipboard1} aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={2500}
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

export default UserData
