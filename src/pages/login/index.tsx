// 登录页面
// import { useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import { Button, Form, Input, message } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { login } from '../../api/login';
// import './index.less';
// const Login = () => {
//     // const history = useHistory();
//     const [loading, setLoading] = useState(false);
//     const onFinish = async (values: any) => {
//         setLoading(true);
//         const res = await login(values);
//         setLoading(false);
//         if (res) {
//             message.success('登录成功');
//             // history.push('/home');
//         }
//     };
//     return (
//         <div className="login">
//             <div className="login-form">
//                 <div className="login-logo">
//                     <span>React Admin</span>
//                 </div>
//                 <Form onFinish={onFinish}>
//                     <Form.Item
//                         name="username"
//                         rules={[{ required: true, message: '请输入用户名!' }]}
//                     >
//                         <Input
//                             prefix={<UserOutlined className="site-form-item-icon" />}
//                             placeholder="用户名"
//                             autoComplete="off"
//                         />
//                     </Form.Item>
//                     <Form.Item
//                         name="password"
//                         rules={[{ required: true, message: '请输入密码!' }]}
//                     >
//                         <Input.Password
//                             prefix={<LockOutlined className="site-form-item-icon" />}
//                             placeholder="密码"
//                             autoComplete="off"
//                         />
//                     </Form.Item>
//                     <Form.Item>
//                         <Button
//                             type="primary"
//                             htmlType="submit"
//                             className="login-form-button"
//                             loading={loading}
//                         >
//                             登录
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </div>
//         </div>
//     );
// }
// export default Login;
