import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Wrapper = styled.section`
  padding: 4em;
  background: #1d2123;
`;
const UL = styled.ul`
  width: 30vw;
  list-style: none;
  display: flex;
  justify-content: space-around;
  color: white;
  margin: 0px;
  padding: 0px;
  font-size: 1rem;
`;
const A = styled.a`
  text-decoration: none;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <UL>
        <li>
          <Link href="/">
            <A>Main page</A>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <A>Posts</A>
          </Link>
        </li>
        <li>
          <Link href="/createPost" as="post/new">
            <A>Create post</A>
          </Link>
        </li>
      </UL>
    </Wrapper>
  );
};

export default Header;
