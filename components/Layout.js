import Head from 'next/head';
import Navbar from './Navbar';

function Layout(props) {
    return (
        <div>
            <Head>
                <title>Food Tales - A story of taste!</title>
                <link rel='icon' href='/chefs-hat.svg' />
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/css/uikit.min.css" />
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/js/uikit.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/uikit@3.5.3/dist/js/uikit-icons.min.js"></script>
            </Head>
            <Navbar />
            {props.children}
            <style jsx global>{`
                :root{
                    font-size: 12px;
                }
            `}</style>
        </div>
    )
}

export default Layout;