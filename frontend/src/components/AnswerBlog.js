import React from "react";
import { Card, Button } from "antd";
import screenimg from "../assets/images/default-answer.jpg";

const AnswerBlog = () => (
  <div>
    <Card style={{ height: "300px", padding: "5px" }}>
      <div
        style={{
          padding: "5px",
          paddingTop: "0px",
          fontFamily: "'Heebo', sans-serif",
          marginBottom: "15px",
        }}
      >
        <div style={{ marginBottom: "15px", marginTop: "-10px" }}>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              borderTop: "0.2px solid rgba(0,0,0,0.2)",
              borderBottom: "0.2px solid rgba(0,0,0,0.2)",
              marginTop: "0.2px",
              marginBottom: "0px",
              paddingTop: "3px",
              height: "35px",
            }}
          >
            <li
              style={{
                marginRight: "10px",
                borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                paddingRight: "5px",
                margin: "5px",
              }}
            >
              <span>
                <strong>University:</strong>
              </span>
              <span>
                <a href="/" target="_blank">
                  Wilmington University /
                </a>
                <a href="/" target="_blank">
                  PSY 101
                </a>
              </span>
            </li>
            <li
              style={{
                borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                paddingRight: "5px",
                margin: "5px",
              }}
            >
              <span>
                <strong>Category:</strong>
              </span>
              <span>
                <a href="/" target="_blank">
                  Humanities Assignment Help{" "}
                </a>
              </span>
            </li>

            <li
              style={{
                paddingRight: "5px",
                margin: "5px",
              }}
            >
              <span>
                <strong>Date:</strong>
              </span>
              <span>03 May 2023</span>
            </li>
          </ul>
          <ul
            style={{
              listStyleType: "none",
              display: "flex",
              borderBottom: "0.2px solid rgba(0,0,0,0.2)",
              marginTop: "0.2px",
              paddingTop: "3px",
              height: "35px",
            }}
          >
            <li
              style={{
                marginRight: "10px",
                borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                paddingRight: "5px",
                margin: "5px",
              }}
            >
              <span>
                <strong>Course code:</strong>
              </span>
              <span>
                <a href="/" target="_blank">
                  4345345252352523 /
                </a>
                <a href="/" target="_blank">
                  PSY 101
                </a>
              </span>
            </li>
            <li
              style={{
                borderRight: "1px solid rgba(0, 0, 0, 0.2)",
                paddingRight: "5px",
                margin: "5px",
              }}
            >
              <span>
                <strong>Course name:</strong>
              </span>
              <span>
                <a href="/" target="_blank">
                  mathematics{" "}
                </a>
              </span>
            </li>
            <li
              style={{
                paddingRight: "5px",
                margin: "5px",
              }}
            >
              <span>
                <strong>Price:</strong>
              </span>
              <span>$8</span>
            </li>
          </ul>
          <h2
            style={{
              marginTop: "-15px",
              fontFamily: "awesome",
              fontSize: "26px",
              // textAlign: "center",
            }}
          >
            <a href="/answer">ACCN 2010 Quiz 1 | Tulane University</a>
          </h2>
        </div>
        <div style={{ marginTop: "-15px" }}>
          <div>
            <p>
              PSY 101 Week 7 Assignment 2 |Wilmington UniversityWeek 7 Career
              Project: Final PaperCollege level grammar is required. Basic APA
              format should be followed. This includes a cover sheet, page
              numbers, page headers, a paper title, page margins, indentation,
              font, and font size. No abstract or references section is
              necessary. Please see the attached rubric for more grading
              details.This assignment is due Sundayby 11:59pm EST.Thefollowing
              content...
            </p>
          </div>
          {/* <div style={{ marginTop: "-15px", paddingLeft: "680px" }}>
            <button
              type="submit"
              style={{
                width: "100%",
                height: "30px",
                fontSize: "20px",
                fontFamily: "awesome",
              }}
            >
              Answer
            </button>
          </div> */}
        </div>
      </div>
    </Card>
    <Card style={{ height: "300px", padding: "5px", marginTop: 16 }}>
      <div
        style={{
          padding: "5px",
          paddingTop: "10px",
          fontFamily: "'Heebo', sans-serif",
          marginBottom: "15px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <h2
            style={{
              marginTop: "-20px",
              fontFamily: "awesome",
              fontSize: "26px",
              textAlign: "center",
            }}
          >
            Answer Details
          </h2>
        </div>
        <div style={{ marginTop: "-20px" }}>
          <div style={{ borderTop: "1px solid #dedede" }}>
            <img
              src={screenimg}
              alt="screenimage"
              width="100%"
              height="160px"
            />
          </div>
          <div>
            {/* <a href="/homework-solution-details/632507/accn-2010-quiz-1-tulane-university">
              Read more <i></i>
            </a> */}
            <div>
              <Button block style={{ fontWeight: "bold" }}>
                Download this answer instantly at $$$
              </Button>
            </div>
            <div style={{ marginTop: "5px" }}>
              <Button block style={{ fontWeight: "bold" }}>
                Get a quote of a new original/Human generated paper
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default AnswerBlog;
