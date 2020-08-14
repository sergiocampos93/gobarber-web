import React from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

import { useToast } from '../../hooks/toast';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import InputError from '../../components/InputError';

import { Container, Content, AnimatedContainer, Background } from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();
  const { addToast } = useToast();
  const history = useHistory();
  return (
    <Container>
      <Background />
      <Content>
        <AnimatedContainer>
          <img src={logoImg} alt="GoBarber" />
          <form
            onSubmit={handleSubmit(async formData => {
              try {
                await api.post('/users', formData);
                history.push('/');
                addToast({
                  type: 'success',
                  title: 'Cadastro realizado!',
                  description: 'Você já pode fazer seu logon no GoBarber',
                });
              } catch (err) {
                addToast({
                  type: 'error',
                  title: 'Erro na cadastro',
                  description:
                    'Ocorreu um erro ao fazer o cadastro. Tente novamente.',
                });
              }
            })}
          >
            <h1>Faça seu cadastro</h1>

            <Input
              name="name"
              icon={FiUser}
              placeholder="Nome"
              ref={register({
                required: 'Campo obrigatório',
                pattern: {
                  value: /\D{4,}\s+\D{4,}/,
                  message: 'Nome inválido.',
                },
              })}
            />
            {errors.name && <InputError>{errors.name.message}</InputError>}

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
                minLength: {
                  value: 6,
                  message: 'Deve ter no mínimo 6 caracteres',
                },
              })}
            />
            {errors.password && (
              <InputError>{errors.password.message}</InputError>
            )}

            <Button type="submit">Cadastrar</Button>
          </form>
          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </AnimatedContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
