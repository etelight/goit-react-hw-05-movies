import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 520px;
  text-align: center;
  position: relative;
  z-index: 0;
  border-radius: 10px;
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
export const Poster = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-height: 100%;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
`;

export const MovieLink = styled(Link)`
  padding: 10px;
  color: #000;
  font-size: 18px;
  transition: color 250ms ease-in-out;

  &:hover {
    color: #9400d3;
  }
`;

export const MovieTitle = styled.span`
  font-size: 20px;
`;
