import renderDOM  from './template/renderDOM';
import registerComponent from './template/registerComponent';

import { ChatPage } from './pages/chat/chat';
import { AuthorizationPage } from './pages/authorization/authorization';

import './styles/style.css';

import { Button } from './components/button/button';
import { Input } from './components/input/input';
import { Header } from './components/headline/headline';

registerComponent(Button);
registerComponent(Input);
registerComponent(Header);

document.addEventListener("DOMContentLoaded", () => {

  let App = new ChatPage();

  switch (window.location.pathname){
    case '/':
        App = new ChatPage()
        break
    case '/authorization':
        App = new AuthorizationPage()
        break
    case '/login':
        App = new ChatPage()
        break
    case '/edit':
        App = new ChatPage()
        break
    case '/profile':
        App = new ChatPage()
        break
    case '/error':
        App = new ChatPage()
        break
    case '/notFound':
        App = new ChatPage()
        break
  }

  renderDOM(App, '#app');
});
