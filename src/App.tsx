import { GlobalStyles } from './styles/GlobalStyles.ts';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './components/Header/index.tsx';
import Orders from './components/Orders/index.tsx';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position="bottom-center" />
    </>
  );
}
