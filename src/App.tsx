import { GlobalStyles } from './styles/GlobalStyles.ts';

import Header from './components/Header/index.tsx';
import Orders from './components/Orders/index.tsx';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
    </>
  );
}
