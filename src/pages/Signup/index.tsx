import React from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form
          onSubmit={handleSubmit(formData => {
            console.log(formData);
          })}
        >
          <h1>Faça seu cadastro</h1>
          <Input
            name="name"
            icon={FiUser}
            placeholder="Nome"
            ref={register()}
          />
          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            ref={register()}
          />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            ref={register()}
          />
          <Button type="submit">Cadastrar</Button>
        </form>
        <a href="criar">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
