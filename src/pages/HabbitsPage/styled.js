import styled from "styled-components";

export const Content = styled.div`

    width: 100vw;
    height: 83vh;

    

    position: relative;

    top:100px;
    display: flex;
    flex-direction: column;
    
`

export const ContentFixed = styled.div`

    width: 90vw;
    height: 35px;

    position: absolute;

    
    left: 20px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    
    color: #126BA5;

    display: flex;
    justify-content: space-between;

`

export const ContainerIonIcon = styled.div`

    width: 40px;
    height: 35px;

    background-color: #52B6FF;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 5px;

    ion-icon {
        color: #FFFFFF;
        font-style: normal;
        font-weight: bolder;
        font-size: 30px;    
    }
`
export const Text = styled.div`
    width: 90vw;
    height: 70px;

    margin: 7vh auto;
    
    

    position: absolute;
    left: 0;
   
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 22px;
    
    color:#666666;

    display: flex;
    flex-wrap: wrap;

    
`

export const NewHabit = styled.div`

    width: 90vw;
    height: 180px;  

    background-color: #FFFFFF;

    margin-top: 100px;
    margin: 7vh auto;

    border-radius: 5px;

    display: ${props => props.ativeAdd};
    flex-direction: column;
    justify-content: center;

    padding: 2vh;

    position: relative;
    
`

export const Week = styled.div`
    display: flex;

    margin-bottom: 30px;
    
`

export const Days = styled.button`

    width: 30px;
    height: 30px;

    background-color: ${props => props.color ? "#CFCFCF" : "#FFFFFF"};

    border: none;

    margin-right: 5px;

    border: 1px solid #D5D5D5;
    border-radius: 5px;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;

    color: #DBDBDB;
`
export const ButtonSave = styled.button`
    width: 90px;
    height: 35px;
    background-color: #52B6FF;
    border-radius: 5px;
    border:none;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    color: #FFFFFF;

    position: absolute;

    bottom: 15px;
    right: 15px;
    
`

export const ButtonCancel = styled.button`
    width: 90px;
    height: 35px;
    background-color: #FFFFFF;
    border-radius: 5px;
    border:none;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    color: #52B6FF;

    position: absolute;

    bottom: 15px;
    right: 120px;
    
`