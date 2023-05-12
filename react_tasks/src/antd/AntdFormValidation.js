import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";

const AntdFormValidation = () => {
  return (
    <div>
      <Form autoComplete="off" labelCol={{ span: 10 }} wrapperCol={{ span: 5 }}>
        <Form.Item
          name="fullName"
          label="Full Name"
          rules={[
            {
              required: true,
              message: "Please enter your name",
            },
            {
              whitespace: true,
              message: "Name cannot be empty",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
              message: "Please enter your email",
            },
            {
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
            },
            { min: 6 },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject("The two passwords do not match");
              },
            }),
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Confirm your password" />
        </Form.Item>

        <Form.Item name="gender" label="Gender" requiredMark="optional">
          <Select placeholder="Select your gender">
            <Select.Option value="male">Male</Select.Option>
            <Select.Option value="female">Female</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          name="dob"
          label="Date of Birth"
          rules={[
            {
              required: true,
              message: "Please provide your date of birth",
            },
          ]}
          hasFeedback
        >
          <DatePicker
            style={{ width: "100%" }}
            picker="date"
            placeholder="Choose your dob"
          />
        </Form.Item>

        <Form.Item
          name="website"
          label="Website"
          rules={[
            {
              type: "url",
              message: "Please enter a valid url",
            },
          ]}
          hasFeedback
        >
          <Input placeholder="Add your website url" />
        </Form.Item>

        <Form.Item
          name="agreement"
          style={{ width: 1500, marginLeft: 460 }}
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(
                      "To proceed, you need to agree with the terms and conditions"
                    ),
            },
          ]}
        >
          <Checkbox>
            {" "}
            Agree to our <a href="#">Terms and Conditions</a>
          </Checkbox>
        </Form.Item>

        <Form.Item>
          <Button
            style={{ marginLeft: 390, width: 390 }}
            block
            type="primary"
            htmlType="submit"
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AntdFormValidation;
