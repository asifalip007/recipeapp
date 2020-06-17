import Layout from '../components/Layout';
import SignIn from '../components/SignIn';
import axios from 'axios';

export async function getServerSideProps(context) {
    let data;
    // process.env.PORT is the available port.
    // This value can be hard coded as 3000 (usual value) when building next js app.
    await axios.get(`http://localhost:${process.env.PORT}/api/users`).then(res => data = res.data);
    return {
        props: {
            userData: data.data
        }
    }
}

function Login(props) {
    return (
        <Layout>
            <SignIn users={props.userData} />
        </Layout >
    )
}

export default Login;