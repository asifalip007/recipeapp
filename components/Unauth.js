import Router from 'next/router';

function Unauth (){
    const Redirect = () => {
        sessionStorage.setItem('userLogged',false);
        sessionStorage.setItem('username','');
        Router.push('/')
    }
    return(
        <div className='uk-text-center' style={{marginTop: '100px'}}>
            <p style={{fontSize:'20px', color: 'red'}}>Unauthorized Access!!!</p>
            <p>Get back to the <a style={{textDecoration:'none'}} onClick={Redirect}>Home Page</a></p>
            <p>If you are logged in you will be logged out automatically</p>
        </div>
    )
}

export default Unauth