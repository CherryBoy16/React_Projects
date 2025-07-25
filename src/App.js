import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import FirstProp from './PropsDir/FirstProp';
import SecProp from './PropsDir/SecondProp';
import ThirdProp from './PropsDir/ThirdProp';
import NameProp from './StudentProp/NameProp';
import FieldProp from './StudentProp/FieldProp';
import CourseProp from './StudentProp/CourseProp';
import NamePropp from './Carprop/NamePropp';
import Mystate from './Carprop/Mystate';
import Mystate2 from './Carprop/Mystate2';
import Mywsa from './Carprop/Mywsa';
function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
      <h2><u>Prop</u></h2>
      <div className='ii'>
        <FirstProp name={'Charan'}/>
        <SecProp name={'Trishanth'}/>
        <ThirdProp name={'Drake'}/>
      </div>
      <div>
        <h2><u>Student Prop</u></h2>
        <div className='ii'>
        <NameProp name={'Charan'}/>
        <CourseProp name={'CSE'}/>
        <FieldProp name={'Aiml'}/>
        </div>
        <div>
        <h3><u>Const prop</u></h3>
        <NameProp name="Sricharan" course="React JS" fee="₹5000" />
        </div>
        <div>
        <h3><u>Car prop</u></h3>
        <NamePropp name="Sricharan" model="BMW" price="2.1CR" colour="Red"/>
        </div>
      </div>
      <div>
        <h3><u>State</u></h3>
      <Mystate />
      </div>
      <div>
        <h3><u>State useState</u></h3>
      <Mystate2 />
      </div>
      <div>
        <h3><u>Global</u></h3>
      <Mywsa />
      </div>
      <Footer />
    </div>
  );
}

export default App;
