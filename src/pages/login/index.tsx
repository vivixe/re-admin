import { Component } from 'react'
import './login.less'
import { useNavigate } from 'react-router-dom'

interface Props {
  navigate: ReturnType<typeof useNavigate>
}

class Login extends Component<Props> {
    render() {
        return (
            <div className="P-login">
                <h1>Login page</h1>
                <button onClick={() => {this.gotoHome()}}>跳转Home页</button>
            </div>
        )
    }
    gotoHome() {
        this.props.navigate('/home')
    }
}

export default Login