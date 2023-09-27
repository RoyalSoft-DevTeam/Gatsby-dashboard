import React from "react";
import { Layout, Menu } from "antd";
import { Col, Row, Input } from "antd";
// import image1 from "../assets/images/truste.png"
// import image2 from "../assets/images/mastercard.png"
// import image3 from "../assets/images/paypal.png"
// import logocom from "../assets/images/logocom.png"
import logocom from "../assets/images/logocom.png";
import { Link } from "gatsby";
import backimg from "../assets/images/action.png";

const { Search } = Input;
const { Header, Footer } = Layout;
const MainLayout = ({ pageTitle, children }) => {
  //   const {
  //     token: { colorBgContainer },
  //   } = theme.useToken()
  const onSearch = (value) => console.log(value);

  // const navbarArray = ["Home", "AboutUs", "How To Work"]
  const array = [
    { name: "Solutions", url: "/" },
    { name: "Post Questions", url: "/post" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
    { name: "Login", url: "/auth/login" },
  ];

  return (
    <Layout className="layout" style={{ margin: "-8px" }}>
      <Header
        style={{
          padding: "0",
          height: "96px",
          background: "#272930",
        }}
      >
        <Row>
          <Col
            span={6}
            style={{
              paddingLeft: "300px",
              paddingTop: "15px",
            }}
          >
            <img src={logocom} alt="logo" width="60%" height="65%" />
          </Col>
          <Col
            span={6}
            style={{
              padding: "30px",
              paddingLeft: "20px",
              paddingRight: "60px",
            }}
          >
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </Col>
          <Col span={12} style={{ paddingTop: "16px" }}>
            <Menu
              theme="white"
              mode="horizontal"
              items={array.map((item, index) => {
                const key = index + 1;
                return {
                  key,
                  label: (
                    <Link to={item.url}>
                      <span
                        style={{
                          marginLeft: "5px",
                          fontFamily: "awesome",
                          color: "white",
                          fontSize: "16px",
                        }}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ),
                };
              })}
            />
          </Col>
        </Row>
      </Header>
      <div
        style={{ backgroundImage: `url( ${backimg})`, backgroundSize: "cover" }}
      >
        <Row>
          <Col span={4}></Col>
          <Col span={8} style={{ paddingTop: "40px" }}>
            <div>
              <h4 style={{ fontFamily: "awesome", color: "white" }}>
                Why Champlain Solutions?
              </h4>
              <p
                style={{
                  fontSize: "20px",
                  fontFamily: "awesome",
                  color: "white",
                }}
              >
                We at ChamplainSolutions.com are aware of the difficulties that
                students have when pursuing an education online. Our goal is to
                give students like you thorough support so you can succeed in
                your online courses with assurance.
              </p>
            </div>
          </Col>
          <Col span={8}></Col>
          <Col span={4}></Col>
        </Row>
      </div>
      {children}

      <Footer
        style={{
          // textAlign: "center",
          padding: "0px",
        }}
      >
        <Row
          style={{
            // background: "rgb(66,180,186)",
            background: "rgb(26,28,33)",
            display: "flex",
            justifyContent: "center",
            height: "315px",
            paddingTop: "40px",
          }}
        >
          <Col
            span={5}
            style={{
              paddingLeft: "175px",
              paddingTop: "100px",
            }}
          >
            <img src={logocom} alt="logo" width="45%" height="40%" />
          </Col>
          <Col span={5} style={{ paddingLeft: "0px", paddingTop: "65px" }}>
            <p
              style={{
                fontSize: "15px",
                fontFamily: "awesome",
                color: "#707885",
              }}
            >
              Online education has become an essential component of our academic
              path in the fast-paced world of today. However, it frequently
              presents its own special difficulties. Students frequently have
              overwhelming workloads due to managing many online courses and
              keeping up with assignments, exams, lab reports, and essays. This
              is where ChamplainSolutions.com comes in to help you have a more
              effective and seamless experience when learning online.
            </p>
          </Col>
          <Col span={3} style={{ paddingLeft: "40px" }}>
            <h4
              style={{
                fontFamily: "awesome",
                color: "white",
                fontSize: "18px",
              }}
            >
              About us
            </h4>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a
                  href="/"
                  style={{
                    fontFamily: "awesome",
                    color: "#707885",
                  }}
                >
                  How it works
                </a>
              </li>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Services
                </a>
              </li>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </Col>
          <Col span={3} style={{ paddingLeft: "40px" }}>
            <h4
              style={{
                fontFamily: "awesome",
                color: "white",
                fontSize: "18px",
              }}
            >
              Legal Stuff
            </h4>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Team of Use
                </a>
              </li>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Pricing
                </a>
              </li>
            </ul>
          </Col>
          <Col span={3} style={{ paddingLeft: "40px" }}>
            <h4
              style={{
                fontFamily: "awesome",
                color: "white",
                fontSize: "18px",
              }}
            >
              Help
            </h4>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  knowledge Base
                </a>
              </li>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Support
                </a>
              </li>
              {/* <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Question Answers
                </a>
              </li>
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Blogs
                </a>
              </li> */}
              <li>
                <a href="/" style={{ fontFamily: "awesome", color: "#707885" }}>
                  Advanced Payment
                </a>
              </li>
            </ul>
          </Col>
          <Col span={5} style={{ paddingLeft: "0px" }}></Col>
        </Row>
        <div
          style={{
            // background: "rgb(144,218,222)",
            background: "rgb(26,28,33)",
            display: "flex",
            justifyContent: "center",
            height: "100px",
            borderTop: "1px solid #212328",
            marginTop: "0.2px",
          }}
        >
          {/* <Col span={4} style={{}}></Col> */}
          {/* <Col span={4} style={{ display: "flex", alignItems: "flex-start" }}> */}
          <h2
            style={{
              fontFamily: "awesome",
              color: "#707885",
              fontSize: "18px",
              margin: "30px",
              marginLeft: "0px",
              textAlign: "center",
            }}
          >
            ©2023 Champlain Solutions
          </h2>
          {/* </Col> */}
          {/* <Col span={4}></Col> */}
          {/* <Col span={8} style={{ padding: "12px" }}>
            <ul style={{ listStyleType: "none", display: "flex" }}>
              <li style={{ marginRight: "10px" }}>
             <img src={image1} alt="image 1" width="100" height="39" /> 
                <StaticImage
                  alt="image1"
                  src="../assets/images/truste.png"
                  width="100"
                  height="39"
                />
              </li>
              <li style={{ marginRight: "10px" }}>
                <img src={image2} alt="image 2" width="100" height="39" />
                <StaticImage
                  alt="image2"
                  src="../assets/images/mastercard.png"
                  width="100"
                  height="39"
                />
              </li>
              <li>
                <img src={image3} alt="image 3" width="100" height="39" />
                <StaticImage
                  alt="image3"
                  src="../assets/images/paypal.png"
                  width="100"
                  height="39"
                />
              </li>
            </ul>
          </Col> */}
        </div>
      </Footer>
    </Layout>
  );
};
export default MainLayout;
