import React, { useState } from 'react';
import { Form, Input, Button, message, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '~/store';
import { loginUser } from '~/api';
import { StyledUserPage, StyledUserCard, StyledUserContainer, StyledUserCardHeader, StyledUserForm, StyledUserFormBtn } from '~/styles/style';
import { Credentials } from '~/types';
import type { FormProps } from 'antd';

const { Title } = Typography;


export const LoginPage: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState(false);

  const handleLogin : FormProps<Credentials>['onFinish'] = async (values) => {
    setLoading(true);
    try {
      const credentials = {
        name: values.name,
        pwd: values.pwd
      };
      await dispatch(loginUser(credentials));
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledUserPage>
        <StyledUserContainer key="a">
          <StyledUserCard>
            <StyledUserCardHeader>
              <Title level={2}> Login
              </Title>
            </StyledUserCardHeader>

            <StyledUserForm
              name="basic"
              onFinish={handleLogin}
              form={form}
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              style={{ maxWidth: 500 }}
            >
              <Form.Item<Credentials>
                name="name"
                label="Name"
                rules={[
                  { required: true, message: "Please input your name!" },
                ]}>
                <Input />
              </Form.Item>
              <Form.Item<Credentials>
                name="pwd"
                label="Password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}>
                <Input type='password' />
              </Form.Item>
              <StyledUserFormBtn loading={loading} disabled={loading} type="primary" htmlType="submit">
                Login
              </StyledUserFormBtn>
            </StyledUserForm>
          </StyledUserCard>
        </StyledUserContainer>
    </StyledUserPage>
  );
};
