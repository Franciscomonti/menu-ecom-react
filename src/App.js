
import './App.css';
import NavBar from './component/nav-bar/navBar';
import Greeting from './container/greeting';

function App() {
  return (
    <header style={style_header}>
      <NavBar/>,
      <Greeting name="Sergio"/>
    </header>
  );
}

export default App;

const style_header = {
  width: "100vw",
}