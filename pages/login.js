import Layout from '../components/Layout';
import SignIn from '../components/SignIn';
import axios from 'axios';

export async function getServerSideProps(context){
    let data;
    await axios.get('http://localhost:5000/users/').then(res => data = res.data);
    return {
        props: {
            userData: data
        }
    }
}

function Login(props) {
    return (
        <Layout>
            <SignIn users = {props.userData} />
        </Layout >
    )
}

export default Login;