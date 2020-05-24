import React from 'react';
import Header from '../components/Header';
import Form from '../components/Form';
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
    </div>
  );
};

export default CreatePost;
