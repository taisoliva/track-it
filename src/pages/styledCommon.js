import styled from "styled-components";

export const Input = styled.input`
    width: 300px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    

    padding: 10px;
    margin-bottom:6px ;

    ::placeholder{

        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
       
    }

    :disabled{
        background-color: #F2F2F2;
    }

`

export const Button = styled.button`
    width: 300px;
    height: 45px;
    background-color: #52B6FF;
    border-radius: 5px;
    border:none;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;

    margin-bottom: 25px;
    
    
`