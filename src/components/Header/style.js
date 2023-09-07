import styled from "styled-components";

export const Container = styled.header`
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