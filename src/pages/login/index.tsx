// import { Component } from 'react'
import './login.less'
// import { useNavigate } from 'react-router-dom'
import { Button, Checkbox, Form, Input, message } from 'antd';

const Login: React.FC = () => {
    // const history = useNavigate()
    // const [messageApi, contextHolder] = message.useMessage();
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

            <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}



const onFinish = (values: any) => {
    console.log('Success:', values);
    if (values.username === 'admin' && values.password === '123456') {
        message.success('登录成功')
        setTimeout(() => {
            window.location.href = '/home'
        },500)
    }
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export default Login