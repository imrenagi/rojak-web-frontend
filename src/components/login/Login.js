import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import styles from './login.css';

export default class Login extends React.Component {
  constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

  render() {
    return (
      <div className="loginPage">
        <MuiThemeProvider>
          <div>
          <AppBar title="Login" />
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange = {(event,newValue) => this.setState({username:newValue})}
          />
          <br/>
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
          />
          <br/>
            <RaisedButton label="Login" primary={true} style={style}/>
         </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

const style = {
 margin: 15,
};
