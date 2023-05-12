import {
  CheckCircleOutlined,
  LoginOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Steps, Form, Input, Button } from "antd";
import { useState } from "react";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [loginDetails, setLoginDetails] = useState(null);
  const [profileDetails, setProfileDetails] = useState(null);

  const onFinishLoginForm = (values) => {
    setProfileDetails(values);
    setCurrentStep(1);
  };

  const onFinishProfileForm = (values) => {
    setLoginDetails(values);
    setCurrentStep(2);
  };

  const forms = [
    <LoginForm onFinish={onFinishLoginForm} initialValues={loginDetails} />,
    <ProfileForm
      onFinish={onFinishProfileForm}
      initialValues={profileDetails}
    />,
    <Finish />,
  ];

  const isStepDisabled = (stepNumber) => {
    if (stepNumber === 0) {
      return false;
    } else if (stepNumber === 1) {
      return loginDetails === null;
    } else {
      return loginDetails === null || profileDetails === null;
    }
  };

  return (
    <div>
      <Steps
        style={{ padding: "100px 50px" }}
        onChange={setCurrentStep}
        current={currentStep}
      >
        <Steps.Step
          disabled={isStepDisabled(0)}
          title="Login"
          icon={<LoginOutlined />}
        ></Steps.Step>
        <Steps.Step
          disabled={isStepDisabled(1)}
          title="Profile"
          icon={<ProfileOutlined />}
        ></Steps.Step>
        <Steps.Step
          disabled={isStepDisabled(2)}
          title="Finish"
          icon={<CheckCircleOutlined />}
        ></Steps.Step>
      </Steps>
      {forms[currentStep]}
    </div>
  );
};

function LoginForm({ onFinish, initialValues }) {
  return (
    <div>
      <Form
        autoComplete="off"
        onFinish={onFinish}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 5 }}
        initialValues={initialValues}
      >
        <Form.Item
          label="Email"
          name={"emailAddress"}
          rules={[
            {
              required: "true",
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={"password"}
          rules={[
            {
              required: "true",
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            marginLeft: 600,
          }}
        >
          Continue
        </Button>
      </Form>
    </div>
  );
}

function ProfileForm({ onFinish, initialValues }) {
  return (
    <div>
      <Form
        autoComplete="off"
        onFinish={onFinish}
        labelCol={{ span: 10 }}
        wrapperCol={{ span: 5 }}
        initialValues={initialValues}
      >
        <Form.Item
          label="First Name"
          name={"firstName"}
          rules={[
            {
              required: "true",
              message: "Please enter your first name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name={"lastName"}
          rules={[
            {
              required: "true",
              message: "Please enter your last name",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            marginLeft: 600,
          }}
        >
          Continue
        </Button>
      </Form>
    </div>
  );
}

function Finish() {
  return (
    <div>
      <h1 style={{ marginLeft: 540 }}>You are all set!</h1>
      <Button
        type="primary"
        style={{
          marginLeft: 600,
        }}
      >
        Finish
      </Button>
    </div>
  );
}

export default MultiStepForm;
