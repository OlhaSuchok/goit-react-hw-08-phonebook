import styled from '@emotion/styled';

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
