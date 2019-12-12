var React = require('react');

export default class Login extends React.Component {

  render() {
      return(
        <div className="container-fluid">
          <div className="jumbotron col-sm-4 col-sm-offset-4 jumbotron login-form">
            <div className="col-sm-12">
              <div className="tect-center">
                Weather App
              </div>
              <form>
                <div>
                  <label> Username:</label>
                </div>
                <div>
                  <input/>
                </div>
              </form>
            </div>
          </div>
        </div>
      )
  }
}
