import React from 'react';
import Header from '../components/header';
import Form from '../components/form';
import Head from 'next/head';

const CreatePost: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Post Create</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Form />
      <style global jsx>
        {`
          body {
            margin: 0px;
          }
        `}
      </style>
    </div>
  );
};

export default CreatePost;
