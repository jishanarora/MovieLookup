import React from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { Row, Col } from "antd";
import "antd/dist/antd.css";

const SignInSignUpPage = () => {
  return (
    <Row justify="space-around">
      <Col
        lg={10}
        md={20}
        sm={20}
        xs={20}
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <SignIn />
      </Col>
      <Col
        lg={10}
        md={20}
        sm={20}
        xs={20}
        style={{ marginTop: "40px", marginBottom: "40px" }}
      >
        <SignUp />
      </Col>
    </Row>
  );
};

export default SignInSignUpPage;
