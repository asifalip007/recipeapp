import Link from 'next/link';

function SignUp() {
    return (
        <div className='uk-padding uk-container uk-margin-top uk-width-2-5 uk-border-rounded' style={{ border: '.5px solid black' }}>
            <h3 className='uk-margin'>Create Your Account</h3>
            <p className='uk-margin'>Already Have An Account? <Link href='/login'><a style={{ textDecoration: 'none' }}>Sign In</a></Link> To Add Recipes</p>
            <form style={{ fontSize: '10px' }}>
                <div className='uk-margin'>
                    <label htmlFor="username" >Name</label><br />
                    <input id='name' className='uk-width-expand' type='text' style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                </div>
                <div className='uk-margin'>
                    <label htmlFor="username" >Username</label><br />
                    <input id='username' className='uk-width-expand' type='text' style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                </div>
                <div className='uk-margin'>
                    <label htmlFor="password">Password</label><br />
                    <input id='password' className='uk-width-expand' type='password' style={{ fontSize: '10px', padding: '5px', outline: 'none' }} required />
                </div>
                <div className='uk-margin'>
                    <label htmlFor="profilepic">Upload Your Image</label><br />
                    <input id='profilepic' type='file' style={{ fontSize: '10px', outline: 'none' }} />
                    <button className='uk-button uk-button-default uk-button-small'>Upload</button>
                </div>
                <button className='uk-button uk-button-default uk-button-small' type="submit" style={{ fontSize: '10px' }}>SIGN UP</button>
            </form>
        </div>
    )
}

export default SignUp;