import './bibliotecas/css/bootstrap-4.1.3-dist/css/bootstrap.min.css'

import React from 'react';
import './App.css';
import Nav from './Template/Navbar';
import MenuEsquerdo from './Template/LateralEsquerdo';
import MenuDireito from './Template/LateralDireito';
import Main from './Main/Main'

function App() {
  return (
    <div className="App">
      <div className="bg-black">
        <Nav className=""/>
      </div>
      <div className="row">
        <div className="col-1 bg-black">
          <MenuEsquerdo />
        </div>
        <div className="col-8 bg-black">
          <Main />
        </div>
        <div className="col-3 bg-black">
          <MenuDireito />
        </div>
      </div>
    </div>
  );
}

export default App;
