import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Form,
  Input,
  Button,
} from 'antd';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import useNotification from '../../../hooks/useNotification';

const FormItem = Form.Item;

const LOGIN = gql`
  mutation loginUser($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      message
    }
  }
`;

function LoginForm({ history }) {
  const [ sendLogin ] = useMutation( LOGIN );

  async function catchData( inputs ) {
    const res = await sendLogin({ variables: {...inputs} })
      // eslint-disable-next-line react-hooks/rules-of-hooks
      .catch( e => useNotification({ type: 'error', title: 'Error en el inicio de sesión.', message: 'Verifique su e-mail y/o contraseña.' }) )
    
    if ( res ) {
      const { data: { login } } = res;
      sessionStorage.setItem( 'appToken', login.token )
      console.log(history)
      history.push('./catalogue')
    }
  };

  return (
    <div className='content__form'>
      <h1>¡Bienvenido de nuevo a NetPrime!</h1>

      <Form
        name='login-form'
        onFinish={ catchData }
      >
        <FormItem
          name='email'
          label='E-mail:'
          rules={ [{ required: true, message: 'Por favor, proporcione su e-mail!' }] }
        >
          <Input type='email' />
        </FormItem>

        <FormItem
          name='password'
          label='Contraseña:'
          rules={ [{ required: true, message: 'Por favor, proporcione su contraseña!' }] }
        >
          <Input type='password' />
        </FormItem>

        <FormItem>
          
            <Button
              size='large'
              className='submit-button'
              htmlType='submit'
            >
              Entrar
            </Button>
       
        </FormItem>
      </Form>
    </div>
  );
};

export default withRouter(LoginForm);