import Link from 'next/link';
import { Component } from 'react';


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: '',
            username: ''
        }
        this.logout = this.logout.bind(this);
    }
    componentDidMount(){
        if(sessionStorage.getItem('userLogged') === 'true'){
            this.setState({
              isLogged: sessionStorage.getItem('userLogged'),
              username: sessionStorage.getItem('username')
            })
          }else if(localStorage.getItem('userKeepLogged') === 'true'){
            this.setState({
              isLogged: localStorage.getItem('userKeepLogged'),
              username: localStorage.getItem('usernameKeep')
            })
          }
    }
    logout = () => {
        sessionStorage.removeItem('userLogged');
        sessionStorage.removeItem("username")
        localStorage.removeItem('userKeepLogged');
        localStorage.removeItem('usernameKeep')
        this.setState({
            isLogged: 'false',
            username: ''
        })
    }
    render() {
        let Logged,notLogged;
        if(this.state.isLogged === 'true'){
            Logged = '',
            notLogged = 'none'
        }else{
            Logged = 'none',
            notLogged=''
        }
        return (
            <>
                <nav style={{ display: `${notLogged}` }} className='uk-navbar-container uk-padding-small' uk-navbar='true'>
                    <div className='uk-navbar-left'>
                        <a href="localhost:3000/" style={{ textDecoration: 'none' }}><h1 className='uk-margin-remove'>Food Tales</h1></a>
                    </div>
                    <div className='uk-navbar-right'>
                        <ul className='uk-navbar-nav'>
                            <li><Link href="/" as='/'><a style={{ minHeight: '0' }}>Home</a></Link></li>
                            <li><Link href="/login" as='/login'><a style={{ minHeight: '0' }}>Sign In</a></Link></li>
                            <li><Link href="/create" as='/create'><a style={{ minHeight: '0' }}>Sign Up</a></Link></li>
                        </ul>
                    </div>
                </nav>
                <nav style={{ display: `${Logged}` }} className='uk-navbar-container uk-padding-small' uk-navbar='true'>
                    <div className='uk-navbar-left'>
                        <a href="localhost:3000/" style={{ textDecoration: 'none' }}><h1 className='uk-margin-remove'>Food Tales</h1></a>
                    </div>
                    <div className='uk-navbar-right'>
                        <ul className='uk-navbar-nav'>
                            <li><Link as={`/${this.state.username}`} href='/[username]'><a style={{ minHeight: '0' }}>Home</a></Link></li>
                            <li><Link as={`/${this.state.username}/profile`} href="/[username]/profile"><a style={{ minHeight: '0' }}>Profile</a></Link></li>
                            <li><Link href="/"><a style={{ minHeight: '0' }} onClick={this.logout}>Log Out</a></Link></li>
                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;