import React from 'react';
import Header from '../components/header';
import { useSelector, useDispatch } from 'react-redux';
import Head from 'next/head';

const PostPage: React.FC = () => {
  const dispatch = useDispatch();
  const currentPost: any = useSelector((state) => state.currentPost);
  return (
    <div>
      <Head>
        <title>Post</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <h1>{currentPost.title}</h1>
      <p>{currentPost.body}</p>
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

export default PostPage;
