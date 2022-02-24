import React,{useState} from 'react'

export default function Converter(props) {
    const [text ,setText]=useState('')
   
    const onClickHandle=()=>{
        
      
       let newtext=parseInt(text);
       
       let F=newtext*9/5+32;
       
       setText(F+ " °F ")
       props.showAlert("converted to Fehreinite","sucess");
    }
    const onChangeHandle=(event)=>{
       setText(event.target.value)
    }
    return (
        <div>

            <div className="container ">
                
                <div className="mb-3">
                  <h1>Degree To Fahrenheit coverter app</h1>
                
                <input type="text" className="form-control"value={text} onChange={onChangeHandle} id="exampleFormControlInput1" placeholder="Enter degree" />
                </div>
               
                <button onClick={onClickHandle} className="btn btn-primary">Convert</button>
               

            </div>
        </div>
        )
    }