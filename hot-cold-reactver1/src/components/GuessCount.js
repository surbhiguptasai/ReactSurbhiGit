import React from 'react';
export default class GuessCount extends React.Component{

 constructor(props) {
    super(props);
    this.state = {count: 0
      };
    }
	incrementCount(){
		
		let newCount=this.state.count+1;
    this.setState({count: newCount});
	}
  render() {
    return (
      <p>
        Guess #<span id="count" >{this.state.count}</span>!
      </p>
      );
  }
};

