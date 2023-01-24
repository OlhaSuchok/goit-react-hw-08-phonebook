import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavWrapper = styled.div`
  /* align-self: center; */
`;

export const NavList = styled.ul`
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 30px;
  background-color: rgba(247, 242, 242, 0.2);

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    background-color: rgba(247, 242, 242, 0.6);
  }
`;

export const NavigationNavLink = styled(NavLink)`
  font-family: cursive;
  font-size: 18px;
  color: whitesmoke;
  text-decoration: none;
`;
