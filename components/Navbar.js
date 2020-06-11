function Navbar() {
    return (
        <nav className='uk-navbar-container uk-padding-small' uk-navbar='true'>
            <div className='uk-navbar-left'>
                <a href="localhost:3000/" style={{ textDecoration: 'none' }}><h1 className='uk-margin-remove'>Food Tales</h1></a>
            </div>
            <div className='uk-navbar-right'>
                <ul className='uk-navbar-nav'>
                    <li><a href='localhost:3000/' style={{minHeight:'0'}}>Home</a></li>
                    <li><a href='#' style={{minHeight:'0'}}>Sign In</a></li>
                    <li><a href='#' style={{minHeight:'0'}}>Sign Up</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;