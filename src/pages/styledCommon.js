import { TextField, ThemeProvider, createTheme, Button } from "@mui/material";
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

export  function InputForm({formatChars, variant = 'outlined', value='', onChange = () => 0,...props}) {
    return  (
      <StyledTextField {...props} value={value}  onChange={onChange} variant={variant} />
    );
  }
  
  const StyledTextField = styled(TextField)`
    margin-top: 8px !important;
    margin-top: 14px !important;
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: 1px solid #000;
  `;

export function ButtonForm({variant="contained", children, ...props}) {
    const theme = createTheme({
        palette: {
            ochre: {
                main: '#000000',
                light: '#000000',
                dark: '#0254b3',
                contrastText: '#f8f8f6',
            },
        },
    })
    return (
        <ThemeProvider theme={theme}>
            <StyledButton  variant={variant} {...props}> <strong> {children} </strong></StyledButton>
        </ThemeProvider>
    );
}


const StyledButton = styled(Button)`
  margin-top: 14px !important;
  width: 230px;
  margin-bottom: 10px !important;

  strong{
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
  }

`

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    padding-bottom: 120px;

    display: flex;
    justify-content: center;

    background-color: #F2F2F2;
`

export const Header = styled.div`
    background-color: #126BA5;
    width: 100%;
    height: 70px;

    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img{
        width: 100px;
        height: 50px;

        margin-left: 20px;
    }

    p{
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        /* identical to box height */
        color: #FFFFFF;

        margin-left: 10px;
    }
`
export const ImageUser = styled.div`
    width: 50px;
    height: 50px;

    background-color: red;

    margin-right: 20px;

    border-radius: 100px;

    background-image: url(${props => props.imageUser});
    background-size:cover;
   
`

export const Footer = styled.div`
    position: fixed;

    z-index: 1;
    bottom: 0;

    width: 100%;
    height: 70px;

    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

`

export const ContainerRectangle = styled.div`

    width: 70px;
    height: 20px;

    

    margin-left: 40px;
    margin-right: 40px;

    color: #52B6FF;
    

`

export const ContainerCircle = styled.div`

    width: 90px;
    height: 90px;

    background-color: #52B6FF;

    border-radius: 100px;

    position: absolute;

    bottom: 1vh;
    left: 40vw;

    color: #FFFFFF;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 5px;

`

