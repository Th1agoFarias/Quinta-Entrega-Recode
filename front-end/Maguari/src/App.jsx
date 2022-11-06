import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom'
import Home from "./Pages/Home/Home";
import Clientes from "./Pages/Clientes";
import ClientesCreate from "./Pages/Clientes/Create";




function App() {
	return (
		<div ClassName="App">
		<Router>
			<Header />
			<Footer />    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Clientes" element={<Clientes />} />
        <Route path="/Clientes-Create" element={<ClientesCreate />} />
        <Route path="/Clientes-Update/:id" element={<ClientesCreate />} />
    
      </Routes>
    </Router>
			
				
		
		
		</div>
	)
}

export default App
