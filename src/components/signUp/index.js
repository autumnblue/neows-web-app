import React from 'react'
import { Form, Input, Button, Spin } from 'antd'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
}

const SignUp = ({ history, signUp, isLoading }) => {
  const onFinish = values => {
    console.log('Success:', values)
    signUp(values.username, values.password)
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div className='sign-up-container'>
      <div className='shadow-wrapper'>
        <Spin spinning={isLoading}>
          <p className='sign-up-title'>SIGN UP</p>
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

            <Form.Item {...tailLayout} className='button-group'>
              <Button type="primary" htmlType="submit">
                Sign up
              </Button>
              <Button type="link" onClick={() => history.push('/login')}>
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </div>
    </div>
  )
}

export default SignUp