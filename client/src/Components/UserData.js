import React from 'react'
import {useLocation} from "react-router-dom";
const UserData = (props) => {
    const location=useLocation();
    // useEffect(()=>{

    // },[])
    return (
        <>
            <div className="mainDiv">
                <div className="childdiv">
                    <div className="LinkUser">
                        <h3 className="h3userLink">The link to your poll is</h3>
                        <div className="setter">
                            <input className="form-control textareaLink" type="text" value={`http://localhost:3000/singlepoll/${location.state.id}`} />
                            <i className="fa fa-clipboard copybutton" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="LinkadminUser">
                        <h3 className="h3adminLink">The admin link to your poll is</h3>
                        <div className="setter">
                            <input className="form-control textareaLink" type="text" value={`http://localhost:3000/singlepoll/${location.state.id}/admin`}/>
                            <i className="fa fa-clipboard copybutton" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserData
