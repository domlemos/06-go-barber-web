import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { IconBaseProps } from "react-icons";
import { FiAlertCircle } from "react-icons/fi";
import { useField } from "@unform/core";

import { Container, Error } from "./styles";
import Tooltip from "../Tooltip";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setisFocused] = useState(false);
  const [isFilled, setisFilled] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleInputBlur = useCallback(() => {
    setisFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => setisFocused(true), []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });

    setisFilled(!!inputRef.current?.value);
  }, [fieldName, registerField, inputRef.current?.value]);

  return (
    <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
      {Icon && <Icon />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
