import ReactDOM from 'react-dom';
import { Parent } from './props/Parent';
import { ChildAsFC } from './props/Child';
import GuestList from './state/GuestList';
import UserSearch from './state/UserSearch';

const App = () => {
  return (
    <div>
      <GuestList />
      <br />
      <br />
      <UserSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
