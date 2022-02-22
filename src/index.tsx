import { patch } from 'js-component-vdom';

import { store } from './store';

import App from './components/App';

const render = () => patch(
  App(store),
  document.getElementById('app')
);

render();
store.subscribe(() => render());
