import React from 'react';

import { Message, Container } from './styles';

import errorIcon from '../../assets/error.svg';

const InputError: React.FC = ({ children }) => (
  <Container>
    <img src={errorIcon} alt="Error Icon" />
    <Message>{children}</Message>
  </Container>
);

export default InputError;
