import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Login.scss'


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: ''
        };
      }
    
      handleInputChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleLogin = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
      };
    
    render() {
        return (
            <div className='loginPage'>
              <div className="loginHeading">
                <i className="fab fa-instagram fa-3x"></i>
                <h1>React Instagram Clone</h1>
              </div>
              <Form inline onSubmit={this.handleLogin} className="loginForm">
                <FormGroup>
                  <Label for="username" hidden>Username</Label>
                  <Input type="text" name="username" id="username" placeholder="Username" value={this.state.username} onChange={this.handleInputChanges} />
                </FormGroup>
                  {' '}
                <FormGroup>
                  <Label for="examplePassword" hidden>Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="Password" value={this.state.password} onChange={this.handleInputChanges} />
                </FormGroup>
                  {' '}
                  <Button>Submit</Button>
              </Form>
          </div>
        );
      }
}

export default Login;