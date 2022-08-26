import React from 'react';
import './App.css';
import Navbar from './ui/components/navbar/navbar';
import Signin from './ui/components/signinForm/signin';
import SigninPage from './ui/pages/signinPage/signinPage';
// import Index from './ui/components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <div>
      {/* <Navbar /> */}
        <SigninPage />
      </div>
     
    </div>
  );
}

export default App;
