import React from 'react';
import { Container } from 'semantic-ui-react';
import Head from 'next/head';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

export default (props) => {

    return (
        <Container>

            <Head>
                <title>Kickstartr Smart Contract</title>
                <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css'></link>
                <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'></link>
            </Head>

            <Header />

            <Navbar />

            {props.children}

            <Footer />

        </Container>
    );

}