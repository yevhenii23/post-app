import React, { useEffect } from 'react';
import Header from '../components/Header';
import { fetchPosts, currentPost, deletePost } from '../redux/actions/actions';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Link from 'next/link';
import Head from 'next/head';
import { Post, State } from '../redux/reducers/reducers';

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
const RedButton = styled.button`
  float: right;
  background-color: red;
  color: white;
  height: 2.3rem;
  width: 4rem;
  border-radius: 10px;
  border-color: red;
`;

const GreenButton = styled.button`
  background-color: greenyellow;
  color: white;
  height: 2.3rem;
  width: 4rem;
  border-color: greenyellow;
  border-radius: 10px;
`;

const Index: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  const result = useSelector((state: State) => state.list);
  const loading = useSelector((state: State) => state.loading);
  console.log(result, loading);

  function handlePost(post: Post): void {
    dispatch(currentPost(post));
  }

  function handleDelete(id: number): void {
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
            <Link href="postPage" as={`/posts/${post.id}`}>
              <GreenButton onClick={() => handlePost(post)}>Post page</GreenButton>
            </Link>
            <RedButton onClick={() => handleDelete(post.id)}>delete</RedButton>
          </Card>
        ))}
      </PostsWrapper>
    </div>
  );
};

export default Index;
