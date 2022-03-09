import { patch } from 'js-component-vdom';
import { Router, RouterMode } from 'js-component-router';

import { store } from './store';

import Home from './components/Home';
import Counter from './components/Counter';

export const router = new Router({
  mode: RouterMode.history,
  root: '/',
});

router
  .add(/counter/, () => {
    render(Counter(store));
    store.subscribe(() => render(Counter(store)));
  })
  .add('', () => render(Home()));

const render = (component) => patch(
  component,
  document.getElementById('app')
);
