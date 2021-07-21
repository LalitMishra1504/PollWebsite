import React from 'react'

const UserData = () => {
    return (
        <>
            <div className="mainDiv">
                <div className="childdiv">
                    <div className="LinkUser">
                        <h3 className="h3userLink">The link to your poll is</h3>
                        <div className="setter">
                            <input className="form-control textareaLink" type="text" value="" />
                            <i className="fa fa-clipboard copybutton" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="LinkadminUser">
                        <h3 className="h3adminLink">The admin link to your poll is</h3>
                        <div className="setter">
                            <input className="form-control textareaLink" type="text" value="" />
                            <i className="fa fa-clipboard copybutton" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserData
