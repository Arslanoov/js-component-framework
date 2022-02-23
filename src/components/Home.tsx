import { h as createVNode } from 'js-component-vdom';

import { router } from '../index';

const h = createVNode;

const Home = () => {
  const toCounterPage = () => router.navigate('counter');

  return (
    <div>
      <div class='home'>
        Home page!
      </div>
      <div class='link' onclick={toCounterPage}>To Counter page</div>
    </div>
  );
};

export default Home;