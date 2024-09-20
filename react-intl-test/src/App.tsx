import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { defineMessages, useIntl } from 'react-intl';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const formMessages = defineMessages({
  username: {
    id: 'username',
    defaultMessage: '用户名'
  },
  password: {
    id: 'password',
    defaultMessage: '密码'
  },
  rememberMe: {
    id: 'rememberMe',
    defaultMessage: '记住我'
  },
  submit: {
    id: 'submit',
    defaultMessage: '提交'
  },
  inputYourUsername: {
    id: 'inputYourUsername',
    defaultMessage: '请输入用户名'
  },
  inputYourPassword: {
    id: 'inputYourPassword',
    defaultMessage: '请输入密码'
  },
})

const App: React.FC = () => {

  const intl = useIntl();

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item<FieldType>
        label={intl.formatMessage(formMessages.username)}
        name="username"
        rules={[{ required: true, message: intl.formatMessage(formMessages.inputYourUsername) }]}
      >
        <Input />
      </Form.Item>

      <Form.Item<FieldType>
        label={intl.formatMessage(formMessages.inputYourPassword)}
        name="password"
        rules={[{ required: true, message: intl.formatMessage(formMessages.inputYourPassword) }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType>
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>{intl.formatMessage(formMessages.rememberMe)}</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {intl.formatMessage(formMessages.submit)}
        </Button>
      </Form.Item>
    </Form>
  )
};

export default App;
