import React, { InputHTMLAttributes, Ref } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  ref?: Ref<HTMLInputElement>;
}

const Input: React.FC<InputProps> = React.forwardRef(
  ({ icon: Icon, ...rest }, ref) => (
    <Container>
      {Icon && <Icon size={20} />}
      <input ref={ref} {...rest} />
    </Container>
  ),
);

export default Input;
