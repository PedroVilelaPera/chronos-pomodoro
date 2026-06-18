// CSS imports
import './styles/theme.css';
import './styles/global.css';

// Components
import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Logo />
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}
