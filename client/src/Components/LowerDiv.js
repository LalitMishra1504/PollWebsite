import React,{useState}from 'react'
import CreatePoll from './CreatePoll';
const LowerDiv = () => {
        const [quesinput, setquesinput] = useState('');
        const [options, setoptions] = useState([{text:"",vote:0},{text:"",vote:0}]);
        const userinputHandler=(text,ind)=>{
            const ele=[...options];
            options[ind]["text"]=text;
            setoptions(ele);
        }
        const AddOption = () => {
          setoptions((prev) => {
            return [...prev,{text:"",vote:0}];
          })
        }
        // console.log(options);
        const Delete=(id,t)=>{
          setoptions((oldoption)=>{
            return oldoption.filter((arrele,index)=>{
              return id!==index
            })
          })
        }
        const setquesHandler=(e)=>{
          setquesinput(e.target.value);
        }
    return (
        <>
           <div className="container lowerdiv bg-primary-light">
        <h3 style={{
          marginTop: "27px"
        }}>CreatePoll</h3>
        <p style={{
          marginLeft: "13px",
          color: "#a0aec0",
          fontSize: "medium",
          fontWeight: "bold",
          marginTop: "20px"
        }}>Complete below fields to create a poll</p>
        <h5>Poll Question</h5>
        <input type="text" className="form-control questionbox" onChange={setquesHandler} value={quesinput} placeholder="Enter Your Question?" autoComplete="off"></input>
        {options.map((ele, ind) => {
          return (
            <>
              <p className="option">Option{ind + 1}</p>
              <div class="optionstyle">
              <input type="text" onChange={(e)=>{
                  userinputHandler(e.target.value,ind)
              }} key={ind} id={ind} value={ele.text} className="form-control optionbox" placeholder="Enter Option" autoComplete="off"></input>
              <div onClick={()=>{
                // console.log(ind);
                Delete(ind);
              }} className="deleteicon">{options.length>2?<i class="fas fa-trash-alt del"></i>:""}</div>
              </div>
            </>
          );
        })}
        <div>
          <button className="btn btn-primary Addbutton" onClick={AddOption}>Add Anoter Option +</button>
          <CreatePoll text={quesinput} arr={options}/>
        </div>
      </div>  
        </>
    )
}

export default LowerDiv
