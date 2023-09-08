import { Button } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 30px 18px;
  margin-bottom: 100px;

  display: flex;
  flex-direction: column;

  background-color: #F2F2F2;
`;

export const RegisterContent = styled.div`
  padding-top: 100px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: 100%;

  margin-bottom: 10px;
`;

export const Days = styled.div`
  margin-top: 8px;
  margin-bottom: 10px;

  display: flex;
  align-items: center;
  gap: 4px;

  font-family: Lexend Deca;
  font-size: 19.976px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  
  pointer-events: ${(props) => props.disabled ? "none" : "all"};
`;

export const Title = styled.p`
  font-size: 22px;
  line-height: 29px;
  font-family: Lexend Deca;
  font-size: 22.976px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  color: #126BA5;
`;


export const StyledButton = styled(Button) `
  background-color: #52B6FF !important;
  color: white !important;
  font-size: 30px !important;
  width: 40px !important;
  height: 35px !important;
`

export const StyledDay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  
  padding-bottom: 2px;
  border: ${(props) => props.isSelected ? "1px solid #CFCFCF" : "1px solid #D5D5D5"};
  border-radius: 5px;
  
  font-size: 20px;
  line-height: 25px;
  
  background: ${(props) => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
  color: ${(props) => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
`;

