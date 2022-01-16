import ReactDOM from 'react-dom';
import Parent from './props/Parent';
import Child from './props/Child';

const App = () => {
  return (
    <div>
      <Parent />
      <Child color="red" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
