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
