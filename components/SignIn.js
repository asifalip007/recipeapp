import Link from 'next/link';
import Router from 'next/router';
import { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange = (e) => {
        const value = e.target.value
        this.setState({
            [e.target.id]: value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let loginFlag = false;
        console.log(this.state.username, this.state.password)
        const credentials = this.props.users.map((user) => { return { username: user.username, password: user.password } });
        console.log(credentials)
        credentials.forEach(credential => {
            if (credential.username === this.state.username && credential.password === this.state.password) {
                loginFlag = true
            }
        })
        if (loginFlag) {
            Router.push(`/profile/${this.state.username}`)
            this.setState({
                username: '',
                password: ''
            })
            document.getElementById("loginAlert").style.display = 'none'
        } else {
            document.getElementById("loginAlert").style.display = 'block'
        }
    }
    render() {
        return (
            <div className='uk-padding uk-container uk-margin-top uk-width-2-5 uk-border-rounded' style={{ border: '.5px solid black' }}>
                <h3 className='uk-margin'>Sign In To Add Recipes</h3>
                <p className='uk-margin-remove' style={{ marginTop: '20px' }}>Not A User? <Link href='/create'><a style={{ textDecoration: 'none' }}>Sign Up</a></Link> To Create Account</p>
                <span id='loginAlert' style={{ display: 'none', color: 'red' }}>Invalid Username or Password</span>
                <form onSubmit={this.onSubmit} style={{ fontSize: '10px', marginTop: '10px' }}>
                    <div className='uk-margin' >
                        <label htmlFor="username" >Username</label><br />
                        <input id='username' className='uk-width-expand' defaultValue={this.state.username} type='text' onChange={this.onChange} style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                    </div>
                    <div className='uk-margin'>
                        <label htmlFor="password">Password</label><br />
                        <input id='password' className='uk-width-expand' defaultValue={this.state.password} type='password' onChange={this.onChange} style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                    </div>
                    <div className='uk-margin'>
                        <input className='uk-margin-remove' id='keeplogged' type='checkbox' style={{ height: '10px' }} /><label htmlFor='keeplogged'>Keep Me Logged In</label>
                    </div>
                    <button className='uk-button uk-button-default uk-button-small' type="submit" style={{ fontSize: '10px' }}>SIGN IN</button>
                </form>
            </div>
        )
    }
}

export default SignIn;