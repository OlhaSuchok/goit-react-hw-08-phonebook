import { HomeTextWrapper, HomeTextTitle, HomeText } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/Auth-selectors';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <HomeTextWrapper>
      <HomeTextTitle>Вітаю у PHONEBOOCK!</HomeTextTitle>
      {isLoggedIn && (
        <HomeText>
          Тепер Ви можете користуватися <br />
          нашою електронною книгою контактів!
        </HomeText>
      )}
    </HomeTextWrapper>
  );
}
