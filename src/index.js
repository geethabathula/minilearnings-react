import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Modal, { Success, Error, Warning } from './ComponentComposition/Modal';
import Reactbts from './ReactBTS/Reactbts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Modal children={<Success />} />
    <Modal children={<Warning />} />
    <Modal children={<Error />} /> */}
    <Reactbts />
  </React.StrictMode>
);


