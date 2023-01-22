import React, { Component } from 'react';

//login with normal html, created initial flexbox and then card with header, boxy, and nested footer flexbox 
export default class Login extends Component {
    render() {
        return (
            <div className="flexbox login">
                <div className="card">
                    <div className="card-header">
                        <h3> Sign into the Patient Portal</h3>
                    </div>

                    <div className="card-body">
                        <form>
                            <label>
                                Username:
                            </label>
                            <input type="text" className="login-form" id="username" />
                        </form>

                        <form>
                            <label>
                                Password:
                            </label>
                            <input type="text" className="login-form" id="password" />
                        </form>

                        <button className="login-btn" type="submit">
                            Sign in
                        </button>
                    </div>
                    <hr></hr>

                    <div className="flexbox login-footer">
                        <a href="" className="account">Don't have an account?</a>
                        <br></br>
                        <a href="" className="account">Forgot username or password</a>
                    </div>
                </div>
            </div>
        );
    }
}
