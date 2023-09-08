import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 94px;

    padding: 15px;
    margin-bottom: 10px;

    background-color: #FFFFFF;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
   
`
export const DetailsContainer = styled.div`
  width: 75%;
`;

export const Selected = styled.div`

    width: 70px;
    height: 70px;
    background-color: ${(props) => props.done ? "#8FC549" : "#EBEBEB"};

   display: flex;
   justify-content: center;
   align-items: center;

    border: 1px solid #E7E7E7;
    border-radius: 5px;
   
`
export const Text = styled.div`
    width: 100%;
    height: 70px;
   
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;

    h1{
        
        font-size: 19px;
        line-height: 25px;
        color: #666666;
    }

    p{
        &:nth-child(2){
            span{
                color: ${(props) => props.done ? "#8FC549" : "#666666"};
            }
        }

        &:nth-child(3){
            span{
                color: ${props => props.igual ? "#8FC549" : "#666666"}
            }
        }

        font-size: 12px;
        line-height: 16px;

        color: #666666;

    }

    
    span:nth-child(1){
        
    }

    span:nth-child(2){
        color: ${props => props.igual ? "red" : "#666666"}
    }


`