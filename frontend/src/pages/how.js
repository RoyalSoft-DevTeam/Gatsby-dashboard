// Step 1: Import React
import * as React from "react";
import MainLayout from "../components/MainLayout";
import { Breadcrumb, Layout } from "antd";
import { Card, Col, Row } from "antd";

// Step 2: Define your component
const { Content } = Layout;
const HowPage = () => {
  return (
    <MainLayout pageTitle="About us">
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
              <p style={{ fontFamily: "awesome", marginTop: "0px" }}>
                How it works
              </p>
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
                        How It Works - Your Guide to ChamplainSolutions.com
                        Success
                      </h4>

                      <p style={{ fontFamily: "awesome" }}>
                        We've made it exceedingly simple for you to acquire the
                        academic assistance you require at
                        ChamplainSolutions.com. Here's a walkthrough of how our
                        platform works:
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        First Step: Submit Your Request
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        To begin, go to our simple website and click on the "Get
                        Started" or "Order Now" option. You will be asked to
                        give important information regarding your assignment or
                        activity. Please provide as much detail as possible,
                        such as the type of assignment, subject, topic, word
                        count, formatting requirements, and deadline. If you
                        have any pertinent materials, please upload those as
                        well.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        Step 2: Request a Price
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        Our system will provide a price for the service you
                        require when you submit your request. Based on your
                        exact requirements, you will be provided with a fair and
                        competitive pricing quote. Our pricing is intended to be
                        affordable and accessible to students of all financial
                        backgrounds.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        Step 3: Make a Convenient Payment
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        If you're happy with the quote and want to move further,
                        you may make a safe payment using our platform. We
                        accept a variety of payment ways for your convenience.
                        You may be confident that your financial information is
                        secure and confidential.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        Step 4: Active Assignment
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        Our team of professionals will begin working on your
                        task as soon as your payment is validated. We'll assign
                        your project to a certified writer or specialist with
                        knowledge in your field. Our team works hard to ensure
                        that our work is of the greatest quality.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        Step 5: Evaluate and Download
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        You can communicate with our team and check the status
                        of your work through your account dashboard as your
                        assignment proceeds. When your work is finished, it will
                        go through a rigorous quality assurance procedure to
                        verify it fulfills all of your specifications. When it
                        is ready for download, you will be notified.
                      </p>

                      <h4 style={{ fontFamily: "awesome" }}>
                        Step 6: Evaluation and Feedback
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        We advise you to thoroughly review the final work. If
                        you have any feedback or require adjustments, you can
                        contact your writer directly through our messaging
                        system. Your pleasure is our priority, and we will make
                        any necessary changes to fulfill your expectations.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        Step 7: Submit Assignment
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        You are now ready to submit your completed project to
                        your school institution. Our goal is to present you with
                        a well-crafted, well-researched piece of work that may
                        be used as a reference and guide for your studies.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        Step 8: Academic Achievement
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        ChamplainSolutions.com will help you excel in your
                        online courses, improve your comprehension of the
                        subject matter, and manage your time more effectively.
                        Our services are intended to improve your academic
                        experience and assist you in reaching your objectives.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        24/7 Customer Service
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        Our professional customer support team is accessible
                        24/7 to answer any questions or concerns you may have
                        throughout the process. We are here to help you have a
                        pleasant and successful experience with
                        ChamplainSolutions.com.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        Take the first step toward academic achievement today by
                        joining the countless students who have benefited from
                        our services. It's never been easier to achieve your
                        educational goals with ChamplainSolutions.com.
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
    <title>How it works</title>
    <meta name="description" content="Your description" />
  </>
);
export default HowPage;
