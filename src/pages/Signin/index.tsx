import React from 'react';
import { useForm } from 'react-hook-form';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import InputError from '../../components/InputError';

import { Container, Content, AnimatedContainer, Background } from './styles';

const SignIn: React.FC = () => {
  type FormData = {
    email: string;
    password: string;
  };
  const { register, handleSubmit, errors } = useForm<FormData>();
  const { signIn } = useAuth();
  const { addToast } = useToast();
  return (
    <Container>
      <Content>
        <AnimatedContainer>
          <img src={logoImg} alt="GoBarber" />
          <form
            onSubmit={handleSubmit(async formData => {
              try {
                await signIn({
                  email: formData.email,
                  password: formData.password,
                });
              } catch (err) {
                console.log(err);
                addToast({
                  type: 'info',
                  title: 'Erro na autenticação',
                  description:
                    'Ocorreu um erro ao fazer login. Cheque as credenciais.',
                });
              }
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
          <Link to="/signup">
            <FiLogIn />
            Criar Conta
          </Link>
        </AnimatedContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
