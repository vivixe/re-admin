import { Fragment } from 'react'
import { Provider } from 'react-redux'; // redux提供的provider。
import zhCN from 'antd/locale/zh_CN'; // antd的中文包
import store from './store'; // redux的仓库
import  MyRouter  from './router'; // 刚才的router.tsx
import { ConfigProvider, message, notification } from 'antd'
import moment from 'moment'; // momentjs。
import 'moment/locale/zh-cn'; // 中文包moment.js
moment.locale('zh-cn'); // 将moment.js设置为中文

message.config({ // antd的message组件配置，during持续时间单位为秒，maxcount最多显示个数
  duration: 2,
  maxCount: 2
});
notification.config({
  placement: 'topRight', // antd的通知组件配置，placement弹出位置。bottom距离底部的距离，during持续时间单位为秒
  bottom: 50,
  duration: 2,
});
function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <ConfigProvider locale={zhCN}>
          <MyRouter />
        </ConfigProvider>
      </Provider>
    </Fragment>
  )
}

export default App