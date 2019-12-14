import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    email: "",
    password: "",
    isLoading: false
  };
}

  onSubmit() {
    //----- call db
    // let user = {
    //   email: "petros@gmail.com",
    //   password: "1234"
    // }
    console.log(this.state);
    // if (this.state.email === this.user.email || this.state.password === this.user.password) {
    //   console.log("correct user");
    // }else {
    //   console.log("wrong");
    // }
  }
  onTypeEmail(e){
    this.setState({email: e.target.value});
  }

  onTypePassword(e){
    this.setState({password: e.target.value});
  };
  onClick(){
    console.log("click");
  }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address: </label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={this.onTypeEmail.bind(this)}/>
                </div>

                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={this.onTypePassword.bind(this)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={this.onClick.bind()}>Submit</button>
            </form>
        );
    }
}
