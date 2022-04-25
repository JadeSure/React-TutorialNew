import React from "react";
import Footer from './Footer';
import Navbar from './Navbar';
import Head from 'next/head'

interface ILayoutProps {
    children: React.ReactNode;
}

export default function Layout({children}: ILayoutProps) {
  return (
    <>
        <Head>
            <title>Ninjia | Sure</title>
            <meta name="keywords" content="ninjas"/>
        </Head>
        <div className="content">
            <Navbar />
            {children} 
            <Footer />
        </div>
    </>
  )
}
