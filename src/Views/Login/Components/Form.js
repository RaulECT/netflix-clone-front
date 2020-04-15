import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
} from 'antd';

const FormItem = Form.Item;

function LoginForm() {

  return (
    <div className='content__form'>
      <h1>¡Bienvenido de nuevo a NetPrime!</h1>

      <Form
        name='login-form'
      >
        <FormItem
          name='email'
          label='E-mail:'
        >
          <Input type='email' />
        </FormItem>

        <FormItem
          name='password'
          label='Contraseña:'
        >
          <Input type='password' />
        </FormItem>

        <FormItem>
          <Link to='/catalogue'>
            <Button
              size='large'
              className='submit-button'
            >
              Entrar
            </Button>
          </Link>
        </FormItem>
      </Form>
    </div>
  );
};

export default LoginForm;