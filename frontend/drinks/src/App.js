import React from 'react';
import logo from './logo.svg';
import './App.css';
import BaseRouter from './routes';
import {BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import CustomLayout from './containers/Layout';
import ProductList from './containers/ProductoListView';
function App() {
  return (
    <div className="App">
      <Router>
      <CustomLayout>
    <BaseRouter/>
      </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
