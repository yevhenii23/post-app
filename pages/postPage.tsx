import React from 'react';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { State } from '../redux/reducers/reducers';

const PostPage: React.FC = () => {
  const currentPost = useSelector((state: State) => state.currentPost);
  return (
    <div>
      <Head>
        <title>Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <h1>{currentPost.title}</h1>
      <p>{currentPost.body}</p>
    </div>
  );
};

export default PostPage;
