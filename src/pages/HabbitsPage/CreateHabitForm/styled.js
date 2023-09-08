import { Button, TextField } from "@mui/material";
import styled from "styled-components";

export const Form = styled.form`
    display: ${(props) => props.isOpen ? "initial" : "none"};

    width: 100%;
    height: 200px;

    margin-top: 20px;
    padding: 18px;

    background: #FFFFFF;
    border-radius: 5px; 
`;

export const Container = styled.div`
  margin-bottom: 30px;
`;

export  function InputForm({formatChars, variant = 'outlined', value='', onChange = () => 0,...props}) {
  return  (
    <StyledTextField {...props} value={value}  onChange={onChange} variant={variant} />
  );
}

const StyledTextField = styled(TextField)`
  width: 100% !important ;
  margin-top: 8px !important;
  margin-top: 14px !important;
  border-radius: 5px;
  border: 1px solid #D5D5D5;

  background-color: ${(props) => props.disabled ? "#F2F2F2" : "#FFFFFF"} !important;
  color: ${(props) => props.disabled ? "#AFAFAF" : "#666666"} !important;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;

  gap: 15px;
`;

export const StyledButtonCancelar = styled(Button) `
  width: 85px !important;
  height: 35px !important;
  background-color: transparent !important;
  border-radius: 4.63636px;

  font-family: Lexend Deca !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  line-height: 20px;

  color: #52B6FF !important;

  border: none;
`

export const StyledButtonSalvar = styled(Button) `
 
  width: 85px !important;
  height: 35px !important;
 
  background-color: #52B6FF !important;
  color: white !important;
  

  font-family: Lexend Deca !important;
  font-size: 15px !important;
  font-weight: 400 !important;
  line-height: 20px;

  opacity: ${(props) => props.disabled ? 0.7 : 1} !important;
`