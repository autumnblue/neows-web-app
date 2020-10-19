import React from 'react'
import { Form, Input, Button, Checkbox, Spin } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const Login = ({ login, isLoading, history }) => {
  const onFinish = values => {
    console.log('Success:', values)
    login(values.username, values.password)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className='login-container'>
      <div className='shadow-wrapper'>
        <Spin spinning={isLoading}>
          <p className='login-title'>LOG IN</p>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout} className='button-group'>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
              <Button type="link" onClick={() => history.push('/sign-up')}>
                Sign up
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  )
}

export default Login