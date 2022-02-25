
import React, { useState } from 'react'


// rfc is short form ract import

// const use state is present in func
export default function MerajForm(props) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("UpperCase was click");
        var newTest = text.toUpperCase();
        setText(newTest)
    }



    const handleClicklow = () => {
        // console.log("Lower case was click");
        var newTest = text.toLowerCase();
        setText(newTest)
    }

    const handleClear = () => {
        // console.log("Lower case was click");  
        var newTest = '';
        setText(newTest);
    }

    const handleCopy = () => {
        // console.log('I am copy');
        var text = document.getElementById('myBox')    // this is is present in text area
        text.select();
        navigator.clipboard.writeText(text.value);
    }


    const handleExtraSpaces = () => {
        // console.log("Remove extra spaces");
        var newTest = text.split(/[ ]+/);
        setText(newTest.join(" "));

    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }


    return (

        <div className='container' style={{color:props.mode ==="dark"?'white':'#555c1b'}}>
            <h1 className='merajsk'>{props.heading}</h1>

            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode ==="dark"?'gray':'white', color:props.mode ==="dark"?'white':'#555c1b'}} id="myBox" rows="8"></textarea>
            </div>


            {/* <input type="button" className='btn btn-primary' value="Canvert to uppercase" /> */}

            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>

            <button className="btn btn-primary" id='meraj' onClick={handleClicklow}>Convert to Lowercase</button>

            <button className="btn btn-primary mx-3 " onClick={handleClear}>Clear All</button>

            <button className="btn btn-primary mx-1 " onClick={handleCopy}>CopyText</button>

            <button className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>REMOVE SPACES</button>

            <div className='container my-4' style={{color:props.mode ==="dark"?'white':'#555c1b'}}>
                <h2>Your Text Summery</h2>
                <p>{text.split(" ").length} words and {text.length} charcters</p>
                <p>{0.008 * text.split(" ").length}</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something text above to preview it here ." }</p>
            </div>
        </div>
    )
}


