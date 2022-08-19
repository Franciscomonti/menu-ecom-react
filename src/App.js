
import './App.css';
import NavBar from './component/nav-bar/navBar';
import ItemListContainer from './container/itemListContainer';

function App() {
  return (
    <header style={style_header}>
      <NavBar/>,
      <ItemListContainer name="Sergio"/>
    </header>
  );
}

export default App;

const style_header = {
  width: "100vw",
}