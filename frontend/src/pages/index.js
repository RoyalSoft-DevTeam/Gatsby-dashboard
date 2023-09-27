// Step 1: Import React
import * as React from 'react'
import MainLayout from '../components/MainLayout'
import BlogContent from '../components/BlogContent'
import QueInput from '../components/QueInput'
import { Layout } from 'antd'
import { Col, Row } from 'antd'
import { Provider } from 'react-redux'
import { persistor, store } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react'

const { Content } = Layout

const IndexPage = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainLayout pageTitle='Home'>
            <Content
              style={{
                padding: '120px',
                paddingTop: '0px',
                paddingBottom: '3px',
                borderBottom: '0.2px solid rgba(111,111,110,.8)'
              }}
            >
              {/* <div
          style={{
            height: "40px",
            // background: "rgb(52,120,255)",
            width: "100%",
            // borderBottom: "0.2px solid rgba(255,255,255,.8)",
            //   borderBottom: "0.2px solid rgba(52,120,255,.8)",
            // borderBottom: "0.2px solid rgba(111,111,110,.8)",
          }}
        >
          <Breadcrumb
            style={{
              //   margin: "16px 0",
              paddingLeft: "200px",
              paddingTop: "10px",
            }}
          >
          </Breadcrumb>
        </div> */}

              <Row
              // style={{ marginTop: "40px" }}
              >
                <Col
                  span={4}
                  // style={{ borderRight: "0.1px solid rgba(111,111,110,.8)" }}
                ></Col>
                <Col span={12}>
                  <BlogContent></BlogContent>
                </Col>
                <Col span={4} style={{ paddingLeft: '10px' }}>
                  <QueInput></QueInput>
                </Col>
                <Col span={4}></Col>
              </Row>

              {/* <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        ></div> */}
            </Content>
          </MainLayout>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home</title>

// Step 3: Export your component
export default IndexPage
