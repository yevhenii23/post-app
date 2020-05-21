import React, { useEffect } from 'react';
import Header from '../components/header';
import { fetchPosts, currentPost, deletePost } from '../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';

const Heading = styled.h1`
  text-align: center;
`;
const Paragraph = styled.p`
  color: #738a94;
`;

const PostsWrapper = styled.div``;
const Card = styled.div`
  padding: 1rem;
`;
const Button = styled.button`
  float: right;
  background-color: red;
  color: white;
  height: 2.3rem;
  width: 4rem;
  border-radius: 10px;
  border-color: red;
`;

const Posts: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const result: any = useSelector((state) => state.list);
  const loading: boolean = useSelector((state) => state.loading);
  console.log(result, loading);

  function handlePost(post: React.MouseEventHandler<HTMLButtonElement>) {
    console.log(post);
    dispatch(currentPost(post));
  }

  function handleDelete(id) {
    console.log(id);
    dispatch(deletePost(id));
  }

  return (
    <div>
      <Head>
        <title>MyPosts</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <Heading>PostsList</Heading>
      <PostsWrapper>
        {result.map((post) => (
          <Card key={post.id}>
            <Heading>{post.title}</Heading>
            <Paragraph>{post.body}</Paragraph>
            <Link href="postPage" as={`/posts/:${post.id}`}>
              <button onClick={() => handlePost(post)}>Post page</button>
            </Link>
            <Button onClick={() => handleDelete(post.id)}>delete</Button>
          </Card>
        ))}
      </PostsWrapper>
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

export default Posts;
