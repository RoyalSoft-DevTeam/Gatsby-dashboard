import React from "react";
import { Layout } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "gatsby";
import { Menu } from "antd";
import { Col, Row } from "antd";
import logocom from "../assets/images/logocom.png";

const { Header } = Layout;

const AdminPage = () => {
  const [cruds, setCruds] = useState([]);

  useEffect(function () {
    async function getCruds() {
      try {
        const response = await axios.get("/api/cruds");
        setCruds(response.data);
      } catch (error) {
        console.log("error", error);
      }
    }
    getCruds();
  }, []);
  const array = [
    { name: "Solutions", url: "/" },
    { name: "Post Questions", url: "/post" },
    { name: "About Us", url: "/about" },
    { name: "How it works", url: "/how" },
    { name: "Services", url: "/service" },
    { name: "Pricing", url: "/pricing" },
    { name: "Terms and Conditions", url: "/terms" },
  ];
  return (
    <>
      <Header
        style={{
          padding: "0",
          height: "96px",
          background: "#272930",
          margin: "-8px",
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
          ></Col>
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
      <div className="container">
        <div>
          <h2>
            CRUD - Table View
            <p>
              <Link to="/cruds/new" className="btn btn-primary float-right">
                Create CRUD
              </Link>
            </p>
          </h2>
          <hr />
        </div>

        <div className="table-responsive">
          <table className="table riped  table-hover table-bordered container">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
                <th>View</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cruds &&
                cruds.map((crud) => {
                  return (
                    <tr key={crud._id}>
                      <td>
                        <Link to={`/cruds/${crud._id}`} className="link-line">
                          {crud.companyName}
                        </Link>
                      </td>
                      <td>{crud.phone}</td>
                      <td>{crud.email}</td>
                      <td>{crud.location}</td>
                      <td>
                        <Link
                          to={`/cruds/${crud._id}`}
                          className="btn btn-warning"
                        >
                          View
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/cruds/${crud._id}/edit`}
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/cruds/${crud._id}/delete`}
                          className="btn btn-danger"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>admin</title>;

// Step 3: Export your component
export default AdminPage;
