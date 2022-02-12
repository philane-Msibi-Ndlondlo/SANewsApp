import Root from './src/navigation/index';

import { Store } from './src/state';
import { Provider } from 'react-redux';

export default function App() {
  return (
      <Provider store={Store}>
        <Root />
      </Provider>
  );
}


