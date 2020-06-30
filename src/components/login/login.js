import './login.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { Redirect } from 'react-router-dom';
import Alert from '../Test/layout/Alert';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
                password:"",
                username:""
        };
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler =  this.submitHandler.bind(this);
    }
    changeHandler(e){
        this.setState({   [e.target.name]: e.target.value    });
    }

    async submitHandler(e){
        e.preventDefault();
        const {username,password} = this.state; 
        this.props.login(username,password);
    };
   

    render() {
        const { password, username} = this.state;
        // Redirect if logged in 
        if(this.props.isAuth){
            return <Redirect to="/feed"/>
        }

        return (
            <div className='bg-gradient'>
            <div className="main__logo">
                <img src="/images/logo.png" alt="" />
            </div>
            <div className="login-container">
                <h2>Login</h2>
                <a href="/"><i class="fas fa-chevron-left"></i></a>
                <Alert/>
                <form className="fields"  onSubmit={this.submitHandler}>
                    <input type="text" value={username}   name="username" placeholder=" Username" className="input-fields" onChange={this.changeHandler}/>
                    <input type="password" value={password} name="password" placeholder=" Password" className="input-fields" onChange={this.changeHandler}/>
                    <input type="submit"  class="login-button" />
                </form>
            </div>
            
        </div>
        )
    }
};

Login.propTypes = {
    login : PropTypes.func.isRequired,
    isAuth: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuth : state.auth.isAuth
});

export default connect(mapStateToProps,{ login })(Login);