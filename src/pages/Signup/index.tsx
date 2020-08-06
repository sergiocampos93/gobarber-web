import React from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';
import InputError from '../../components/InputError';

import { Container, Content, Background } from './styles';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignUp: React.FC = () => {
  const { register, handleSubmit, errors } = useForm<FormData>();

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
            ref={register({
              required: 'Este campo é obrigatório',
              minLength: {
                value: 8,
                message: 'Deve ter no mínimo 8 caracteres.',
              },
            })}
          />
          {errors.name && <InputError>{errors.name.message}</InputError>}

          <Input
            name="email"
            icon={FiMail}
            placeholder="E-mail"
            ref={register({
              required: 'Este campo é obrigatório',
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
              required: 'Este campo é obrigatório',
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
        <a href="criar">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
