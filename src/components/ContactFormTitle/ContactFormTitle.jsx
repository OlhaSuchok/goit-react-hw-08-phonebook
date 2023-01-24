import styled from '@emotion/styled';

export const ContactFormTitle = styled.h1`
  text-align: center;
  margin-bottom: ${props => props.theme.space[6]}px;

  margin-top: 0;
  color: #f0ffff;
  font-size: 50px;
  font-weight: 700;
  font-family: monospace;
  text-shadow: #f0ffff;
  letter-spacing: 4px;

  color: transparent;
  background-clip: text;
  background-image: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 8%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const ContactFormSecondTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.space[5]}px;
  margin-top: 0;
  color: ${props => props.theme.colors.mainText};
  font-size: 24px;
`;
