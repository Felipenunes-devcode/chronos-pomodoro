import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  console.log('Hellow');

  return (
    <>
      <Heading attr={134} attr2='String'>
        Olá Mundo 1
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error
        deleniti quis facere fuga sapiente ipsum, repellendus libero similique
        distinctio nesciuntg veritatis magni recusandae dolores laboriosam
        tenetur placeat suscipit quo.
      </p>
    </>
  );
}
