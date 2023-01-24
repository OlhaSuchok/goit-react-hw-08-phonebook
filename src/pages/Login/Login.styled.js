import styled from '@emotion/styled';

export const LoginTitle = styled.h1`
  margin-bottom: 20px;
`;

export const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 20px;
`;

export const LoginLable = styled.label`
  margin-bottom: 10px;
`;

export const LoginInput = styled.input`
  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 4px;
  color: ${props => props.theme.colors.mainText};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.text};

  background-color: ${props => props.theme.colors.input};

  margin-bottom: ${props => props.theme.space[4]}px;
  padding: 6px 10px;
  margin-bottom: 16px;
`;

export const LoginButton = styled.button`
  padding: 6px 8px;
`;
