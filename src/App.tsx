// Components
import { Heading } from './components/Heading';

// CSS imports
import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      <Heading attr1='String' attr2={123}>
        Hello World! How is it going?
      </Heading>
      <p>
        This is a simple React application that serves as a starting point for
        building a more complex app. You can modify this component to add your
        own functionality and styles.
      </p>
    </>
  );
}
