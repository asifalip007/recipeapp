import Link from 'next/link';
import Router from 'next/router';
import { Component } from 'react';
import axios from 'axios';
import passwordHash from 'password-hash';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
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
        if (this.state.password.length < 8) {
            document.getElementById('passwordAlert').style.display = 'block'
        } else {
            document.getElementById('passwordAlert').style.display = 'none'
            const hashedPassword = passwordHash.generate(this.state.password)
            const formData = {
                name: this.state.name,
                username: this.state.username,
                password: hashedPassword
            }
            // http://localhost:${port}/api/users/add should be used when locally run
            // (port = 3000 or any other env variable)
            // Current Url was used strictly for deploying the app on heroku
            axios.post(`http://foodtales.herokuapp.com/api/users/add`, formData)
                .then(res => {
                    console.log(res.data)
                    this.setState({
                        name: '',
                        username: '',
                        password: ''
                    })
                })
                .catch(err => console.log(`Error: ${err}`))
            Router.push('/login')
        }
    }
    render() {
        return (
            <div className='uk-padding uk-container uk-margin-top uk-width-4-5@m uk-width-2-3 uk-border-rounded' style={{ border: '.5px solid black' }}>
                <h3 className='uk-margin'>Create Your Account</h3>
                <p className='uk-margin'>Already Have An Account? <Link href='/login'><a style={{ textDecoration: 'none' }}>Sign In</a></Link> To Add Recipes</p>
                <form id='signupForm' onSubmit={this.onSubmit} style={{ fontSize: '10px' }}>
                    <div className='uk-margin'>
                        <label htmlFor="username" >Name</label><br />
                        <input id='name' className='uk-width-expand' type='text' defaultValue={this.state.name} onChange={this.onChange} style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                    </div>
                    <div className='uk-margin'>
                        <label htmlFor="username" >Username</label><br />
                        <input id='username' className='uk-width-expand' type='text' defaultValue={this.state.username} onChange={this.onChange} style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                    </div>
                    <div className='uk-margin'>
                        <label htmlFor="password">Password</label><br />
                        <input id='password' className='uk-width-expand' type='password' defaultValue={this.state.password} onChange={this.onChange} style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required /><br />
                        <span id='passwordAlert' style={{ color: "red", display: 'none' }}>Password must have 8 characters!</span>
                    </div>
                    {/* <div className='uk-margin'>
                        <label htmlFor="profilepic">Upload Your Image</label><br />
                        <input id='profilepic' type='file' style={{ fontSize: '10px', outline: 'none' }} />
                        <button className='uk-button uk-button-default uk-button-small'>Upload</button>
                    </div> */}
                    <button className='uk-button uk-button-default uk-button-small' type="submit" style={{ fontSize: '10px' }}>SIGN UP</button>
                </form>
            </div>
        )
    }
}

export default SignUp;