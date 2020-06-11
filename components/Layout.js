import Head from 'next/head';
import Navbar from './Navbar';

function Layout(props) {
    return (
        <div>
            <Head>
                <title>Recipe Book</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/css/uikit.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/js/uikit.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/js/uikit-icons.min.js"></script>
            </Head>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Layout;