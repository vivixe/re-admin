import { Component } from 'react'
import './home.less'
import {Button} from 'antd'
import { Link } from 'react-router-dom'
class Home extends Component {
    render() {
        return (
            <div className="P-home">
                <h1>Home page</h1>
                <Button type="primary"><Link to="/login">login</Link></Button>
            </div>
        )
    }
}

export default Home