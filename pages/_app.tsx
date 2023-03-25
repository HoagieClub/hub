import Head from 'next/head';
import { UserProvider, useUser } from '@auth0/nextjs-auth0';
import Layout from '../lib/hoagie-ui/Layout';
import Footer from '../lib/hoagie-ui/Footer';
import Theme from '../lib/hoagie-ui/Theme';
import Nav from '../lib/hoagie-ui/Nav';
import '../lib/hoagie-ui/theme.css'
import './hub.css'

function Content({ Component, pageProps }) {
    const tabs = [
        { href: '/directory', title: 'Directory' },
    ];
    const user = useUser();

    return (
        <Theme palette="purple">
            <Layout>
                <Nav name="hub" tabs={tabs} user={user} />
                <Component {...pageProps} />
                <Footer />
            </Layout>
        </Theme>
    );
}

export default function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Head>
                <title>Hub by Hoagie</title>
            </Head>
            <Content Component={Component} pageProps={pageProps} />
        </UserProvider>
    );
}
