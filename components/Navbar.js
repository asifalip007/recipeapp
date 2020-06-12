import Link from 'next/link';

function Navbar() {
    return (
        <nav className='uk-navbar-container uk-padding-small' uk-navbar='true'>
            <div className='uk-navbar-left'>
                <a href="localhost:3000/" style={{ textDecoration: 'none' }}><h1 className='uk-margin-remove'>Food Tales</h1></a>
            </div>
            <div className='uk-navbar-right'>
                <ul className='uk-navbar-nav'>
                    <li><Link href="/"><a style={{minHeight:'0'}}>Home</a></Link></li>
                    <li><Link href="/login"><a style={{minHeight:'0'}}>Sign In</a></Link></li>
                    <li><Link href="/create"><a style={{minHeight:'0'}}>Sign Up</a></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;