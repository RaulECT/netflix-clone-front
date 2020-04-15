import React from 'react';
import { Row, Col } from 'antd';

import Sidebar from './Components/Sidebar';
import Content from './Components/Content';
import './login.css'

function Login() {
  return (
    <main className='login'>
      <Row className='login__row'>
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
}

export default Login;