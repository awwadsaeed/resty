// import React from 'react';

// class Results extends React.Component {
//   render() {
//     return (
//       <section>
//         <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
//       </section>
//     );
//   }
// }

// export default Results;

// import React from 'react';
import Loading from '../Loading/Loading';
// function Results(props) {
//   return (
//     <section>
//       <pre  data-testid="results" >{props.data ? JSON.stringify(props.data, undefined, 2) : <Loading/>}</pre>
//     </section>
//   )
// }

// export default Results
import React from 'react';


import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';
function Results(props) {
  return (
    <section>
     { props.data ?<JSONPretty data-testid="results"data={props.data}></JSONPretty>  :  <Loading/>}
    </section>
  );
}

export default Results
