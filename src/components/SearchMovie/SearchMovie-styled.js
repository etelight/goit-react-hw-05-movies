import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 40px;
  margin-top: 25px;
`;

export const SubmitBtn = styled.button`
  height: 100%;
  width: 50px;
  background-color: #009e60;
  border-radius: 20px;
`;

export const Form = styled.form`
  display: flex;
  height: 40px;
  position: relative;
  z-index: 0;
  &:before {
    content: '';
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  &:hover:before {
    opacity: 1;
  }
`;
export const Label = styled.label``;
export const Input = styled.input`
  display: inline-block;
  margin-right: 10px;
  height: 100%;
  padding: 10px 0 10px 15px;
  border-radius: 5px;
  border: 0;
  outline: 0;

  &:focus-visible {
    border: none;
  }
`;
