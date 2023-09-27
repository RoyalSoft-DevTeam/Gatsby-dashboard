// Step 1: Import React
import * as React from "react";
import MainLayout from "../components/MainLayout";
import { Breadcrumb, Layout } from "antd";
import AnswerBlog from "../components/AnswerBlog";
import { Col, Row } from "antd";
import QueInput from "../components/QueInput";

// Step 2: Define your component
const { Content } = Layout;
const AnswerPage = () => {
  return (
    <MainLayout pageTitle="Answer">
      <Content
        style={{
          padding: "120px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <div
          style={{
            height: "40px",
            // background: "rgb(52,120,255)",
            width: "100%",
            // borderBottom: "0.2px solid rgba(255,255,255,.8)",
            //   borderBottom: "0.2px solid rgba(52,120,255,.8)",
            borderBottom: "0.2px solid rgba(111,111,110,.8)",
          }}
        >
          <Breadcrumb
            style={{
              //   margin: "16px 0",
              paddingLeft: "200px",
              paddingTop: "10px",
            }}
          >
            <Breadcrumb.Item>
              <p style={{ fontFamily: "awesome", marginTop: "0px" }}>Home</p>
            </Breadcrumb.Item>
            {/* <Breadcrumb.Item>list</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item> */}

            <Breadcrumb.Item>
              <p style={{ fontFamily: "awesome", marginTop: "0px" }}>answer</p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row style={{ marginTop: "10px" }}>
          <Col span={4}></Col>
          <Col span={11}>
            <AnswerBlog></AnswerBlog>
          </Col>
          <Col span={5} style={{ paddingLeft: "30px" }}>
            <QueInput></QueInput>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </MainLayout>
  );
};

export const Head = () => (
  <>
    <title>Answer</title>
    <meta name="description" content="Your description" />
  </>
);
export default AnswerPage;
