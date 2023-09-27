import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 40px;
  margin-top: 25px;
`;

export const WrapperDetails = styled.div`
  display: flex;
  max-width: 700px;
  gap: 20px;
  padding-bottom: 40px;
`;

export const Img = styled.img`
  border-radius: 5px;
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 1.2;
  margin-bottom: 10px;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export const AddInfoWrapper = styled.div`
  padding-top: 15px;
  padding-bottom: 25px;
  margin-bottom: 20px;
`;

export const AddInfoList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

// export const LinkInfo = styled(Link)`
//   font-size: 15px;
//   letter-spacing: 2px;
//   width: 100px;
//   height: 50px;
//   border: none;
//   outline: none;
//   color: #fff;
//   background: #111;
//   cursor: pointer;
//   position: relative;
//   z-index: 0;
//   border-radius: 10px;
//   &:before {
//     content: '';
//     background: linear-gradient(
//       45deg,
//       #ff0000,
//       #ff7300,
//       #fffb00,
//       #48ff00,
//       #00ffd5,
//       #002bff,
//       #7a00ff,
//       #ff00c8,
//       #ff0000
//     );
//     position: absolute;
//     top: -2px;
//     left: -2px;
//     background-size: 400%;
//     z-index: -1;
//     filter: blur(5px);
//     width: calc(100% + 4px);
//     height: calc(100% + 4px);
//     animation: glowing 20s linear infinite;
//     opacity: 0;
//     transition: opacity 0.3s ease-in-out;
//     border-radius: 10px;
//   }
//   &:active {
//     color: #000;
//   }
//   &:active:after {
//     background: transparent;
//   }
//   &:hover:before {
//     opacity: 1;
//   }
//   &:after {
//     z-index: -1;
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: #111;
//     left: 0;
//     top: 0;
//     border-radius: 10px;
//   }
// `;
