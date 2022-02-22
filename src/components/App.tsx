import { h as createVNode } from 'js-component-vdom';
import { connect } from 'js-component-flux';

import { countSelector, decrease, increase } from '../store/counterReducer'

const h = createVNode;

const App = ({ count, increase, decrease }) => {
  return (
    <div {...{ class: 'container', 'data-count': String(count) }}>
      <div>Count: {String(count)}</div>
      <button onclick={decrease}>-1</button>
      <button onclick={increase}>+1</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: countSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease()),
});

export default (store) => connect(
  App,
  store,
  mapStateToProps,
  mapDispatchToProps
);