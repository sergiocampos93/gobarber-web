import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { AuthContext } from '../../context/AuthContext';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import InputError from '../../components/InputError';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  type FormData = {
    email: string;
    password: string;
  };
  const { register, handleSubmit, errors } = useForm<FormData>();
  const { signIn } = useContext(AuthContext);
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />
        <form
          onSubmit={handleSubmit(formData => {
            signIn({ email: formData.email, password: formData.password });
          })}
        >
          <h1>Faça seu logon</h1>
          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            ref={register({
              required: 'Campo obrigatório',
              pattern: {
                value: /\w+@\w+\.[\w].+/,
                message: 'E-mail inválido',
              },
            })}
          />
          {errors.email && <InputError>{errors.email.message}</InputError>}
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
            ref={register({
              required: 'Campo obrigatório',
            })}
          />
          {errors.password && (
            <InputError>{errors.password.message}</InputError>
          )}
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </form>
        <a href="criar">
          <FiLogIn />
          Criar Conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
