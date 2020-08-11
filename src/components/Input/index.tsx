import React, { InputHTMLAttributes, Ref, useState, useCallback } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: React.ComponentType<IconBaseProps>;
  ref?: Ref<HTMLInputElement>;
}

const Input: React.FC<InputProps> = React.forwardRef(
  ({ icon: Icon, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputBlur = useCallback(() => {
      setIsFocused(false);
    }, []);

    return (
      <Container isFocused={isFocused}>
        {Icon && <Icon size={20} />}
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={handleInputBlur}
          ref={ref}
          {...rest}
        />
      </Container>
    );
  },
);

export default Input;
