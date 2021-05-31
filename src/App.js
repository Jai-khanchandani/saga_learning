import logo from './logo.svg';
import './App.css';
import SagaButton from './Container/SagaButton'
import Modal from './Components/Modal';
import SagaLoading from './Container/SagaLoading';
import SagaNewsItem from './Container/SagaNewsItem';
import Button from './Container/Button';

function App() {
  return (
    <div className="App">
      {/* <Modal /> */}
      {/* <SagaButton /> */}
      <Button />
      <SagaLoading />
      <SagaNewsItem />
    </div>
  );
}

export default App;
