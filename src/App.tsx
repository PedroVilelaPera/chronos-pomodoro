// Components
import { Heading } from './components/Heading';

// CSS imports
import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Hello World! How is it going?
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        This is a simple React application that serves as a starting point for
        building a more complex app. You can modify this component to add your
        own functionality and styles.
      </p>
    </>
  );
}
