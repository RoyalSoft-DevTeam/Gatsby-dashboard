import React from "react";
import MainLayout from "../components/MainLayout";
import { Breadcrumb, Layout } from "antd";
import { Card, Col, Row } from "antd";

const { Content } = Layout;
const TermsPage = () => {
  return (
    <MainLayout pageTitle="Home">
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
              <p style={{ fontFamily: "awesome", marginTop: "0px" }}>Terms</p>
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
                      <h3 style={{ fontFamily: "awesome" }}>
                        Terms and Conditions of Use
                      </h3>
                      <h4 style={{ fontFamily: "awesome" }}>
                        Usage Terms and Conditions
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        Hello and thank you for visiting ChamplainSolutions.com.
                        Please carefully read and understand the following terms
                        and conditions ("Terms") that govern your use of our
                        platform before utilizing our website and services. You
                        agree to these Terms by visiting or using
                        ChamplainSolutions.com. If you disagree with these
                        Terms, please do not use our website or services.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        1. Services Provided
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        ChamplainSolutions.com offers academic support services
                        like as assignment writing, essay writing, quiz prep,
                        lab reports, coursework assistance, dissertation
                        assistance, editing, proofreading, and research
                        assistance. These services are intended to assist
                        students in their academic endeavors.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        2. Eligibility of Users
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        To use our services, you must be at least 18 years old.
                        By using our website, you affirm that you are of legal
                        drinking age.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        3. Responsibilities of the User
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        a. Correct Information:You commit to submit accurate and
                        complete information when using our services. Your
                        account may be terminated if you provide fraudulent or
                        misleading information.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        b. Academic Honesty: Our services are designed to help
                        you learn and improve your academic experience. You
                        promise to use ChamplainSolutions.com's resources and
                        support in an ethical and responsible manner. You must
                        not submit any of our work as your own.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        c. Compliance with Copyright: You accept that any work
                        provided by ChamplainSolutions.com is solely for
                        personal reference and research. You are not permitted
                        to resell, distribute, or otherwise exploit the work in
                        violation of copyright laws.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        4. Pricing and Payment
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        a. Deposit: Before we begin working on your job, we must
                        receive payment for our services. We a ccept a variety
                        of payment methods, and all transactions are secure.
                      </p>
                      <p style={{ fontFamily: "awesome" }}>
                        b. Price: Our pricing is straightforward and
                        competitive. The cost of a service may vary depending on
                        its complexity, urgency, and nature. We retain the right
                        to change our rates at any time.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        5. Policy on Refunds
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        Please see our "Refund Policy" for more details on
                        refunds, cancellations, and dispute resolution.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        6. Privacy Statement
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        We value your confidentiality. Please read our "Privacy
                        Policy" to learn more about how we collect, handle, and
                        safeguard your personal information.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        7. Legal Disclaimer
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        ChamplainSolutions.com offers academic support and
                        resources to help you succeed in school. We cannot
                        guarantee specific grades or outcomes because your
                        success is ultimately determined by your own efforts and
                        ability.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        8. Service Termination
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        ChamplainSolutions.com retains the right, at its sole
                        discretion and without prior notice, to cancel or
                        suspend your access to our services if you breach these
                        Terms or participate in any improper or harmful
                        behavior.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        9. Terms Modifications
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        We reserve the right to alter or modify these Terms at
                        any time. It is your duty to examine these Terms on a
                        regular basis to stay up to date on any changes.
                      </p>
                      <h4 style={{ fontFamily: "awesome" }}>
                        10 Points of Contact
                      </h4>
                      <p style={{ fontFamily: "awesome" }}>
                        Please contact us at [contact email] if you have any
                        questions or complaints regarding these Terms. You
                        indicate that you have read, understood, and agreed to
                        these Terms and Conditions by using
                        ChamplainSolutions.com. Your continuing use of our
                        website and services implies your agreement of these
                        Terms, as well as any subsequent amendments or updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
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
  );
};

export default TermsPage;

export const Head = () => <title>TermsPage</title>;

// Step 3: Export your component
