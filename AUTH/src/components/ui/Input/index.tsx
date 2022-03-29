import * as React from 'react';
import { InputContainer, ValidateComment } from './style';

interface InputPropsTypes {
  label: String;
  placeholder: string;
  type: string;
  visible: boolean;
  validateComment: string;
  changeHandeler: React.ChangeEventHandler<HTMLInputElement>;
}

export default function Input({
  label,
  placeholder,
  type,
  visible,
  validateComment,
  changeHandeler,
}: InputPropsTypes) {
  return (
    <React.Fragment>
      <InputContainer>
        <label>{label}</label>
        <div>
          <input
            type={type}
            placeholder={placeholder}
            onChange={changeHandeler}
          />
          <ValidateComment visible={visible}>{validateComment}</ValidateComment>
        </div>
      </InputContainer>
    </React.Fragment>
  );
}
