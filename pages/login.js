import Layout from '../components/Layout';
import SignIn from '../components/SignIn';
import axios from 'axios';

export async function getServerSideProps(context){
    let data;
    await axios.get('http://localhost:3000/api/users').then(res => data = res.data);
    return {
        props: {
            userData: data.data
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