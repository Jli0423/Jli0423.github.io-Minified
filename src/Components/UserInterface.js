import React, { Component } from 'react';
import styled from 'styled-components';

import Colors from './Data/Colors';
import CommandPrompt from './Data/CommandPrompt';

class UserInterface extends Component {
  constructor(props) {
    super(props);
    // creating reference to input
    this.autoFocusRef = React.createRef();
  }

  componentDidMount() {
    this.autoFocusRef.focus();
    this.setState({
      lineInputAmounts: 1,
    });
  }

  // override default onSubmit so page does not refresh
  userCommandInput(e) {
    console.log(this.autoFocusRef.value);
    e.preventDefault();
  }

  render() {
    return (
      <UserInputFields>
        <UserInputLabelUser htmlFor="UserInput">
          { CommandPrompt.initializeStatement[0] }
        </UserInputLabelUser>
        <UserInputLabelLocation htmlFor="UserInput">
          { CommandPrompt.initializeStatement[1] }
        </UserInputLabelLocation>
        <UserInput
          innerRef={(focus) => { this.autoFocusRef = focus; }}
          type="text"
          name="userInput"
          id="UserInput"
        />
        <UserSubmit
          onClick={this.userCommandInput.bind(this)}
        />
      </UserInputFields>
    );
  }
}

const UserInputFields = styled.form`
  display: block;
  width: 100%;
  height: auto;
  color: ${Colors.white};
  font-size: 1.2em;
`;

const UserInput = styled.input`
  outline: none;
  background-color: ${Colors.transparent};
  border: none;
  color: ${Colors.white};
  &::-ms-clear {
    display: none;
  }
`;

const UserSubmit = styled.button`
  display: none;
`;

const UserInputLabelLocation = styled.span`
  color: ${Colors.darkBlue};
`;

const UserInputLabelUser = styled.span`
  color: ${Colors.green};
`;


export default UserInterface;
