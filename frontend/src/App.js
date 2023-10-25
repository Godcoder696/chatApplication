// import { Button } from '@chakra-ui/react';
import './App.css';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Homepage from './pages/Homepage';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <>
      <Route path="/" component={Homepage} exact></Route>
      <Route path="/chats" component={ChatPage} ></Route>
    </>
  );
}

export default App;
