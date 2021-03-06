import React from 'react';
import { Row, Col } from 'antd';

import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import './signin.css';

function SignIn() {

  return(
    <main className='signin'>
      <Row className='signin__row'>
        <Col 
          span={18}
          push={6}
        >
          <Content />
        </Col>
        
        <Col 
          span={6}
          pull={18}
        >
          <Sidebar />
        </Col>
      </Row>
    </main>
  )
};

export default SignIn;