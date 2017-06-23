import React from 'react';

const Nav = React.createClass({
  render() {
    return (
      <nav>
         
        <ul className="clearfix">
          <li onClick={this.props.handleWhatAction} ><a className="what" href="#">What ?</a></li>
          <li onClick={this.props.handleNewGame}><a className="new" href="#">+ New Game</a></li>
        </ul>
      </nav>
      );
  }
});

export default Nav;