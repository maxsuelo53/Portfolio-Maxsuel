import styled from "styled-components";

export const ContainerPrincipal = styled.div`
    width: 100vw;
    max-width: 1280px;
    min-height: 100vh;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        max-width:none;
    }
`

export const ContentContainer = styled.div`
    padding: 0 1rem;
    min-height: 500px;
    background-color: green;
`

export const MenuNav = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    max-width: 1280px;
    height: 80px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    font-size: 0.8rem;

    ul{
        display: flex;
        gap: 2rem;
    }

`