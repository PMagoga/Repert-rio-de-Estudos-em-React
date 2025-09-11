import './App.css'
import Conditional from './components/Conditional';
import ShowUserName from './components/ShowUserName';
import FirstComponent from './components/FirstComponent'
import CarDetails from './components/CarDetails';
import { Container } from './components/Container';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      {/* condicional */}
      <Conditional />

      {/* componente com props */}
      <ShowUserName name="João" />
      <ShowUserName name="Pablo" />

      {/* desestruturação de props */}
      <CarDetails brand="Ford" model="Ka" year={2020} />
      <CarDetails brand="Chevrolet" model="Onix" year={2021} />

      {/* children */}
      <Container>
        <p>Alguma coisa</p>
      </Container>
    </div>
  );
}

export default App
