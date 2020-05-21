import React from 'react';
import Head from 'next/head';
import Header from '../components/header';

export default function Index() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div>React + NEXT</div>
      <style global jsx>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
    </div>
  );
}
