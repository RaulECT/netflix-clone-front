import React from 'react';
import { Link } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
} from 'antd';

const FormItem = Form.Item;

function SignInForm() {

  return (
    <div className='content__form'>
      <h1>¡Forma parte de NetPrime!</h1>

      <Form
        name='sign-in'
      >
        <FormItem
          name='first_name'
          label='Nombre(s):'
        >
          <Input />
        </FormItem>

        <FormItem
          name='last_name'
          label='Apellidos:'
        >
          <Input />
        </FormItem>

        <FormItem
          name='password'
          label='Contraseña:'
        >
          <Input />
        </FormItem>

        <FormItem
          name='email'
          label='E-mail:'
        >
          <Input type='email' />
        </FormItem>

        <FormItem>
          <Link to='/catalogue'>
            <Button
              size='large'
              className='submit-button'
            >
              Unirme
            </Button>
          </Link>
        </FormItem>
      </Form>
    </div>
  );
};

export default SignInForm;