import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  height: 40px;
  background-color: ${props => props.theme.colors.backgroundHeader};
  border-bottom: 1px solid gray;
`;

// export const Title = styled.h1`
//   text-align: center;
//   margin-bottom: ${props => props.theme.space[6]}px;

//   margin-top: 0;
//   color: #f0ffff;
//   font-size: 50px;
//   font-weight: 700;
//   font-family: monospace;
//   text-shadow: #f0ffff;
//   letter-spacing: 4px;

//   color: transparent;
//   background-clip: text;
//   background-image: linear-gradient(
//     90deg,
//     rgba(2, 0, 36, 1) 0%,
//     rgba(9, 9, 121, 1) 8%,
//     rgba(0, 212, 255, 1) 100%
//   );
// `;
