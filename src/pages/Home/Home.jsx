// import { Suspense } from 'react';
// import { Outlet } from 'react-router-dom';
// import Loader from 'components/Loader/Loader';
// import { MainHeader, NavLinkItem, NavLinkButton } from './Header.styled';

import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div>Сторінка Вітання!</div>
      <Outlet />
    </div>

    // <div>
    //   <MainHeader>
    //     <NavLinkButton>
    //       <NavLinkItem to="/">Home</NavLinkItem>
    //     </NavLinkButton>
    //     <NavLinkButton>
    //       <NavLinkItem to="/movies">Movie</NavLinkItem>
    //     </NavLinkButton>
    //   </MainHeader>
    //   <Suspense fallback={<Loader />}>
    //     <Outlet />
    //   </Suspense>
    // </div>
  );
}
