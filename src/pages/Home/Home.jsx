import { HomeTextWrapper, HomeTextTitle, HomeText } from './Home.styled';

export default function Home() {
  return (
    <HomeTextWrapper>
      <HomeTextTitle>Вітаю у PHONEBOOCK!</HomeTextTitle>
      <HomeText>
        Тепер Ви можете користуватися <br />
        нашою електронною книгою контактів!
      </HomeText>
    </HomeTextWrapper>
  );
}
