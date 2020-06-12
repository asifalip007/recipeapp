import Link from 'next/link';

function SignIn() {
    return (
        <div className='uk-padding uk-container uk-margin-top uk-width-2-5 uk-border-rounded' style={{ border: '.5px solid black' }}>
            <h3 className='uk-margin'>Sign In To Add Recipes</h3>
            <p className='uk-margin'>Not A User? <Link href='/create'><a style={{ textDecoration: 'none' }}>Sign Up</a></Link> To Create Account</p>
            <form style={{ fontSize: '10px' }}>
                <div className='uk-margin'>
                    <label htmlFor="username" >Username</label><br />
                    <input id='username' className='uk-width-expand' type='text' style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                </div>
                <div className='uk-margin'>
                    <label htmlFor="password">Password</label><br />
                    <input id='password' className='uk-width-expand' type='password' style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                </div>
                <div className='uk-margin'>
                    <input className='uk-margin-remove' id='keeplogged' type='checkbox' style={{height:'10px'}} /><label htmlFor='keeplogged'>Keep Me Logged In</label>
                </div>
                <button className='uk-button uk-button-default uk-button-small' type="submit" style={{ fontSize: '10px' }}>SIGN IN</button>
            </form>
        </div>
    )
}

export default SignIn;