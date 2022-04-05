import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import styledComponents from 'styled-components';

const MainStyles = styledComponents.main`
position: relative;
margin-left: 16rem;
min-height: 100vh;
@media screen and (max-width: 1200px){
    margin-left: 0;
}
.p-particles-js{
    position: absolute;
    top: 0;
    left: 0;
}
`
// How do I get the about section to render again? oof maybe i need to implement usestate now

function App() {
  return (
    <>
    <div>
      <Nav></Nav>
      <>
      </>
      <MainStyles>
        <About></About>
      </MainStyles>
    </div>
    </>
  )
}

export default App;
