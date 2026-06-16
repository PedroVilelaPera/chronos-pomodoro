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
        <form className='form' action=''>
          <div className='formRow'>
            <DefaultInput
              id='taskInput'
              type='text'
              labelText='task:'
              placeholder='Digite algo...'
            />
          </div>
          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className='formRow'>
            <Cycles></Cycles>
          </div>
          <div className='formRow'>
          </div>
        </form>
      </Container>
      </Container>
    </>
  );
}
