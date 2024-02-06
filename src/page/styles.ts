import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
    padding-top: 1.4rem;

    h1 {
        font-size: 88px;
        color: #b83f45;
        font-weight: 200;
        text-rendering: optimizeLegibility;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 65px;
    padding: 16px 16px 16px 60px;
    font-size: 24px;
    margin-top: 1rem;
    background: #ffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;
    border: 2px solid #ffff;
    transition: border-color 0.2s ease-in;
    appearance: none;

  &:focus {
    border: 2px solid #b83f45;
    backdrop-filter: blur(2px);
  }
`;