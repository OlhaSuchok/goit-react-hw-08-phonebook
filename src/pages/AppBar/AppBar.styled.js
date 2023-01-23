// import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  height: 40px;
  background-color: ${props => props.theme.colors.backgroundHeader};
  border-radius: 3px;
  box-shadow: rgb(0 0 0 / 20%) 0px 2px 4px -4px,
    rgb(0 0 0 / 14%) 0px 4px 5px 0px;
`;

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

export const AuthList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style: none;
`;

export const AuthListItem = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

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

// export const NavLinkButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #ffdab9;
//   padding: 8px 14px;
//   text-decoration: none;
//   border: 1px solid #bdb76b;
//   border-radius: 4px;
//   cursor: pointer;
//   &:not(:last-child) {
//     margin-right: 12px;
//   }
//   &:hover {
//     background-color: #ffffe0;
//     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
//       -23px 0 20px -23px rgba(0, 0, 0, 0.6),
//       23px 0 20px -23px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(0, 0, 0, 0.1);
//     border-color: transparent;
//     transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
//   &:focus {
//     background-color: #ffffe0;
//     box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
//       -23px 0 20px -23px rgba(0, 0, 0, 0.6),
//       23px 0 20px -23px rgba(0, 0, 0, 0.6), inset 0 0 40px rgba(0, 0, 0, 0.1);
//     border-color: transparent;
//     transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
//   }
// `;

// export const NavLinkItem = styled(NavLink)`
//   color: #8b4513;
//   text-decoration: none;
//   font-size: large;
//   font-family: fantasy;
//   letter-spacing: 1.8;
// `;
