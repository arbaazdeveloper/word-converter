import React, { useState } from 'react'
import FileSaver from 'file-saver'


export default function TestForm(props) {
    

    const [text ,setText]=useState('')
    const [text2 ,setText2]=useState('')

    const onClickHandle=()=>{
       let newtext=text.toUpperCase();
       setText(newtext)
       props.showAlert("converted to uppercase","sucess");
    }

    const onTestSaveFile=() =>{
        
        if(text2==''){
            alert('plaese set file name')
           

        }
        else{
        var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
        FileSaver.saveAs(blob, text2,'.txt');
        props.showAlert("File saved in your dfault downloaded folder","sucess");
    
    }
    }
    const clearText=() =>{
       var clear='';
       setText(clear);
    }
   
    const onChangeHandle=(event)=>{
       setText(event.target.value)
    }
    const onChangeHandle2=(event)=>{
        setText2(event.target.value)
     }
    return (
        <div>


            <div className="container">
                <h1 className="text-center">{props.heading}</h1>
                <div className="mb-3">

                    <textarea className="form-control" value={text} onChange={onChangeHandle} placeholder="enter your text here" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <input type="text" className="form-control my-3 file" value={text2} placeholder="file name" onChange={onChangeHandle2}id="exampleFormControlInput1" placeholder="file name" />
                <button onClick={onClickHandle} className="btn btn-primary">Convert</button>
                <button onClick={onTestSaveFile} className="btn btn-primary mx-3">Save file</button>
                <button onClick={clearText} className="btn btn-primary mx-3">Clear</button>
               

            </div>
            <div className="container light">
                <h2>Lenght</h2>
                <p><b> {text.split(" ").length-1} words {text.length} charecters</b></p>
                <p>You will take {0.08*text.length} M to read this</p>
                <h2>Priview</h2>
                <p>{text}</p>
            </div>
     
          
        </div>
    )
}
