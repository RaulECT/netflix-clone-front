import React from 'react';
import { withRouter } from 'react-router-dom';
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag'
import useNotification from '../../../hooks/useNotification';
import {
  Form,
  Input,
  Button,
} from 'antd';

const FormItem = Form.Item;
const CREATE_USER = gql`
  mutation createOneUser($data: UserCreateInput!){
    createUser(data: $data){
      _id
      first_name
      last_name
      profile_img
    }
  }
`;

function SignInForm({ history }) {
  const [sendCreateUser] = useMutation(CREATE_USER);

  async function catchData(inputs) {
    const res = await sendCreateUser({ variables: { data: {...inputs, profile_img: 'image'} } } )
      .catch(e => {
        console.dir(e)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useNotification({ 
          title: 'Error al registrarse', 
          type: 'error', 
          message: 'Verifique la información proporcionada.' })
        })

    if (res) {
      console.log(res)
      const { data: { createUser } } = res;
      sessionStorage.setItem( 'user', JSON.stringify( createUser ) );
      history.push('/auth');
    }
  };

  return (
    <div className='content__form'>
      <h1>¡Forma parte de NetPrime!</h1>

      <Form
        name='sign-in'
        onFinish={catchData}
      >
        <FormItem
          name='first_name'
          label='Nombre(s):'
          rules={ [{ required: true, message: 'Por favor, proporcione su nombre!' }] }
        >
          <Input />
        </FormItem>

        <FormItem
          name='last_name'
          label='Apellidos:'
          rules={ [{ required: true, message: 'Por favor, proporcione sus apellidos!' }] }
        >
          <Input />
        </FormItem>

        <FormItem
          name='password'
          label='Contraseña:'
          rules={ [{ required: true, message: 'Por favor, proporcione su contraseña' }] }
        >
          <Input />
        </FormItem>

        <FormItem
          name='email'
          label='E-mail:'
          rules={ [{ required: true, message: 'Por favor, proporcione su e-mail!' }] }
        >
          <Input type='email' />
        </FormItem>

        <FormItem>
          <Button
            size='large'
            className='submit-button'
            htmlType='submit'
          >
            Unirme
  </Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default withRouter(SignInForm);