// import React from 'react';

import { useState,useEffect } from 'react';
import './form.scss';
// class Form extends React.Component {

//   handleSubmit = e => {
//     e.preventDefault();
//     const formData = {
//       method:'GET',
//       url: 'https://pokeapi.co/api/v2/pokemon',
//     };
//     this.props.handleApiCall(formData);
//   }

//   render() {
//     return (
//       <>
//         <form onSubmit={this.handleSubmit}>
//           <label >
//             <span>URL: </span>
//             <input name='url' type='text' />
//             <button type="submit">GO!</button>
//           </label>
//           <label className="methods">
//             <span id="get">GET</span>
//             <span id="post">POST</span>
//             <span id="put">PUT</span>
//             <span id="delete">DELETE</span>
//           </label>
//         </form>
//       </>
//     );
//   }
// }

// export default Form;
import React from 'react'
import { isConstructorDeclaration } from 'typescript';

function Form(props) {
  let [showPostTextArea,setShowPostTextArea] = useState(false);
  let [method, setmethod] = useState('get');
  let [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");
  let [requestBody, setrequestBody] = useState("https://pokeapi.co/api/v2/pokemon");
  useEffect(() => {
    console.log(url);
  }, [url])
  function handleSubmit(e){
    e.preventDefault();
    const formData = {
      method:method,
      url:url
    };
    props.handleApiCall(formData,requestBody);
  }
  function handlePostTextArea(e){
    setShowPostTextArea(true);
    setmethod(e.target.id);  
  }
  function setMethod(e){
    setmethod(e.target.id);
  }
  function handleUrl(e){
    seturl(e.target.value);
  }
  function handleRequestBody(e){
    setrequestBody(e.target.value)
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <label >
        <span>URL: </span>
        <input name='url' type='text' onChange={handleUrl} />
        <button type="submit" data-testid="submitButton">GO!</button>
      </label>
      <label className="methods">
        <span id="get" onClick={setMethod}>GET</span>
        <span id="post" onClick={handlePostTextArea}>POST</span>
        <span id="put" onClick={handlePostTextArea}>PUT</span>
        <span id="delete" onClick={setMethod}>DELETE</span>
      </label>
      {showPostTextArea && <textarea rows="10" cols="35" onChange={handleRequestBody}/>}
    </form>
  </>
  )
}

export default Form
