// Step 1: Import React
import * as React from "react";
import MainLayout from "../components/MainLayout";
import { Breadcrumb, Layout } from "antd";
import { Card, Col, Row } from "antd";

// Step 2: Define your component
const { Content } = Layout;
const AboutPage = () => {
  return (
    <MainLayout pageTitle="About us">
      <Content
        style={{
          padding: "120px",
          paddingTop: "10px",
          paddingBottom: "3px",
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
              <p style={{ fontFamily: "awesome", marginTop: "0px" }}>about</p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <Card style={{ padding: "5px" }}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 mx-auto">
                    <div className="content">
                      <h4 style={{ fontFamily: "awesome" }}>
                        ChamplainSolutions.com Overview
                      </h4>

                      <p style={{ fontFamily: "awesome" }}>
                        Welcome to ChamplainSolutions.com, your online education
                        academic partner. We understand how difficult it may be
                        to navigate online courses, assignments, tests, and
                        essays. That is why we have dedicated ourselves to
                        giving the assistance and resources you require to
                        succeed academically.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>About Us</h4>
                      <p style={{ fontFamily: "awesome" }}>
                        We are a dedicated team of professionals with a love for
                        education here at ChamplainSolutions.com. We have
                        extensive experience in a variety of academic subjects
                        and understand the particular requirements of online
                        learning. Our purpose is to help students like you
                        achieve academic success and succeed in online courses.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>Our Promise</h4>
                      <p>
                        Our dedication to you extends beyond the provision of
                        services. We are dedicated to:
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        1. High Quality: We take pride in producing high-quality
                        work that matches your academic requirements. Every
                        assignment, essay, or report is professionally written
                        by our team of specialists to assist you reach your best
                        achievements.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        2. Discretion: Our major concerns are your privacy and
                        confidentiality. You may be confident that your personal
                        information and academic work will always be safe with
                        us.
                      </p>

                      <p style={{ fontFamily: "awesome" }}>
                        3. Timeliness: We recognize the significance of
                        deadlines in the academic environment. Our devoted team
                        works tirelessly to ensure that your tasks are done on
                        schedule.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        4. Personalization:We understand that each student is
                        unique, as are their academic demands. Our solutions are
                        tailored to your individual needs, ensuring that you get
                        the help you seek.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        5. Affordability: We offer low price plans to make our
                        services affordable to students with varied financial
                        situations. Our goal is to deliver value without
                        becoming broke.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        Why Should You Go With Us?
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        When you choose ChamplainSolutions.com, you are
                        selecting a reliable educational partner. Here are some
                        of the reasons why students like you put their trust in
                        us:
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        1. Expert Group: Our staff consists of skilled writers,
                        researchers, and subject matter experts who are
                        committed to your academic achievement.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        2. All-Inclusive Services: We provide a variety of
                        services to support your online courses, ranging from
                        assignment help to essay writing and all in between.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        3. Comfortable Platform:Our website has been created
                        with your comfort in mind. It is simple to submit
                        requests and track their development.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        4. 24/7 Customer Service: We are available to you at all
                        times. Our customer service team is accessible 24 hours
                        a day, 7 days a week to answer your questions and
                        problems.
                      </p>

                      <h4 style={{ fontFamily: "awesome" }}>
                        Come Along with Us on Your Academic Journey
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        ChamplainSolutions.com can assist you if you are
                        struggling to keep up with your online courses or simply
                        want to improve your academic performance. Our goal is
                        to offer you with the resources and assistance you
                        require to succeed in your online courses. Don't allow
                        the difficulties of online education deter you.
                        Thousands of pupils have already profited from our
                        services. ChamplainSolutions.com might be your
                        dependable partner on your academic journey. Thank you
                        for your interest in ChamplainSolutions.com. We look
                        forward to assisting you in achieving your academic
                        objectives and succeeding in your online courses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Content>
    </MainLayout>
  );
};

export const Head = () => (
  <>
    <title>About us</title>
    <meta name="description" content="Your description" />
  </>
);
export default AboutPage;
