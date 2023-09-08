import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 70px;
    padding: 0px 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 1;

    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    & > img {
        cursor: pointer;
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