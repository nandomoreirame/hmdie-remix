import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 30px 100px;
`;

export const Title = styled.h1`
  color: #212353;
  font-size: 42px;
  font-weight: 800;
  line-height: 1.1;
  margin: 0 0 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 860px;
    font-size: 64px;
    margin-bottom: 40px;
  }
`;

export const Description = styled.p`
  color: #4b5d68;
  font-size: 18px;
  font-weight: 300;
  margin: 0 0 20px;
  width: 100%;

  @media (min-width: 768px) {
    max-width: 600px;
    font-size: 22px;
    margin-bottom: 40px;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: center;
    flex-direction: row;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 14px;

  @media (min-width: 768px) {
    padding-right: 14px;
    margin: 0%;
  }
`;

export const Label = styled.label`
  color: #4b5d68;
  cursor: pointer;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 160%;
`;

export const Input = styled.input`
  background: #fff;
  border-radius: 8px;
  border: 1px solid #dedede;
  color: #4b5d68;
  display: block;
  font-size: 18px;
  font-weight: 500;
  line-height: 160%;
  padding: 10px 20px;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Button = styled.button`
  background-color: #9c69e2;
  border-radius: 8px;
  border: 1px solid #9c69e2;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.005em;
  line-height: 160%;
  padding: 10px 30px;
  width: 100%;
  transition: background-color 0.12s ease-in-out, border-color 0.12s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    background-color: #7443b8;
    border-color: #7443b8;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

export const Result = styled.div`
  border-radius: 8px;
  background-color: #ededed;
  padding: 20px;
  margin: 15px 0;

  @media (min-width: 768px) {
    margin: 30px 0;
  }
`;

export const ResultTitle = styled.h2`
  margin: 0;
  font-weight: 800;
  font-size: 40px;
  line-height: 130%;
  color: #212353;
`;

export const ResultItem = styled.span`
  margin: 0;
  display: block;
  font-weight: 300;
  font-size: 26px;
  line-height: 160%;
  color: #4b5d68;

  strong {
    font-weight: 800;
  }
`;

export const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #ededed;
  padding: 15px 30px;
  display: flex;
  justify-content: center;
  z-index: 1;

  p,
  a {
    color: #4b5d68;
    font-size: 14px;
  }

  address {
    display: inline-block;
  }
`;
