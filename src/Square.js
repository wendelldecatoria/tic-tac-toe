// class Square extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//         value: null
//     }
//   }
//   render() {
//     return (
//       <button className="square" onClick={() => 
//         this.setState({ value: 'X'})
//       }>
//         { this.state.value }
//       </button>
//     );
//   }
// }

function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        { props.value }
      </button>
    );
  }

  export {Square}