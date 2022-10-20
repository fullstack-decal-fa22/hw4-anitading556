import React from 'react';

/* TODO: Translate the below class component to a functional component! */
/* class Color extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <button onClick={() => this.props.handleClick(this.props.color)}>Post {this.props.color}</button>
    }
} */
const Color = (props) => {

    return (<button onClick=
    {
        () => props.handleClick(props.color)
    }>
        Post {props.color}

    </button>);

}

export default Color;

/*
class App extends Component {
    alertName = () => {
      alert('John Doe');
    };
  
    render() {
      return (
        <div>
          <h3>This is a Class Component</h3>
          <button onClick={this.alertName}>
            Alert
          </button>
        </div>
      );
    }
  };
  
  export default App;

  function App() {
    const alertName = () => {
      alert('John Doe');
    };
  
    return (
      <div>
        <h3>This is a Functional Component</h3>
        <button onClick={alertName}>
          Alert
        </button>
      </div>
    );
  };
  
  export default App; */