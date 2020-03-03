import React from 'react';
import DrinksLogo1 from './DrinksLogo1.PNG'
import { Rate } from 'antd';
class Home extends React.Component {

    render() {
        return (
          <div className="row">
            <div className="logo">
              <img src={DrinksLogo1} width="500" height="300" />
            </div>
            <Rate></Rate>
          </div>
        );
      }
}
export default Home;
