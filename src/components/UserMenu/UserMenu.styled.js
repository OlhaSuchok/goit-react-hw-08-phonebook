import styled from '@emotion/styled';

export const UserMenuErapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserMenuText = styled.p`
  margin-top: 0;
  margin-bottom: 0;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const UserMenuButton = styled.button`
  cursor: pointer;
`;
