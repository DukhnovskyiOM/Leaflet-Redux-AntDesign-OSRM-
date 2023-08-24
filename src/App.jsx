import "leaflet/dist/leaflet.css"
import "./style.scss"
import { Layout } from 'antd';
import Map from './components/Map';
import List from './components/List';
const { Content, Sider } = Layout;

function App() {

  return (
      <Layout className='wrapper'>
      <Sider className='sider'>
        <List />
      </Sider>
      <Layout>
        <Content className='content'>
          <Map />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App