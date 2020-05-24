import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { createPost } from '../redux/actions/actions';

type Inputs = {
  title: string;
  body: string;
};

const Wrapper = styled.div`
  width: 50vw;
  margin: auto;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #1d2123;
  border: #1d2123;
  color: white;
  border-radius: 5px;
  font-size: 16px;
`;

const Heading = styled.h1`
  text-align: center;
`;
const Error = styled.span`
  color: red;
`;

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(createPost(data));
  };

  return (
    <Wrapper>
      <Heading>CreatePost</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input name="title" ref={register({ required: true })} type="text" placeholder="Title to post" />
        {errors.title && <Error>This field is required</Error>}
        <TextArea name="body" ref={register({ required: true })}></TextArea>
        {errors.body && <Error>This field is required</Error>}
        <Button type="submit">Add new post</Button>
      </form>
    </Wrapper>
  );
};

export default Form;
