import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { GlobalStyles } from "./components/styles/Global";
import { ContainerPrincipal } from "./components/styles/Styles"

function App() {
  return (
    <div>
      <GlobalStyles />
      <ContainerPrincipal>
        <Navbar />
        <Header />
      </ContainerPrincipal>
    </div>
  );
}

export default App;
