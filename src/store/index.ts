import { createWrapper, Context } from 'next-redux-wrapper';
import { createStore } from 'redux';
import reducer from '../reducers/index';

export interface State {
  tick: string;
}
const devMode = process.env.NODE_ENV === 'development';

const configureStore = (context: Context) => createStore(reducer);

const wrapper = createWrapper(configureStore, { debug: true });

export default wrapper;
