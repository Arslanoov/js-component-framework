import { h as createVNode } from 'js-component-vdom';
import { connect } from 'js-component-flux';

import { countSelector, decrease, increase } from '../store/counterReducer'

const h = createVNode;

const Counter = ({ count, increase, decrease }) => {
  return (
    <div>
      <div class='container'>
        <div>Count: {String(count)}</div>
        <button class='increase' onclick={decrease}>-1</button>
        <button class='decrease' onclick={increase}>+1</button>
      </div>
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
  Counter,
  store,
  mapStateToProps,
  mapDispatchToProps
);