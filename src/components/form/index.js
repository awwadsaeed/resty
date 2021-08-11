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

function Form(props) {
  let [showPostTextArea,setShowPostTextArea] = useState(false);
  let [method, setmethod] = useState('get');
  let [url, seturl] = useState("https://pokeapi.co/api/v2/pokemon");
  let [requestBody, setrequestBody] = useState();
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
        <button id="hide" type="button"></button>
        <button type="button" id="get" onClick={setMethod}>GET</button>
        <button type="button" id="post" onClick={handlePostTextArea}>POST</button>
        <button type="button" id="put" onClick={handlePostTextArea}>PUT</button>
        <button type="button" id="delete" onClick={setMethod}>DELETE</button>
      </label>
      {showPostTextArea && <textarea rows="10" cols="35" onChange={handleRequestBody}/>}
    </form>
  </>
  )
}

export default Form
