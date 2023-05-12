import { Form, Input, Button, Space, Select, DatePicker } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";

const AntdForm = () => {
  const handleFormSubmit = (values) => {};

  return (
    <div>
      <Form onFinish={handleFormSubmit} style={{ width: 700 }}>
        <Form.Item
          name={"company"}
          label="Company Name"
          rules={[{ required: true, message: "Company required" }]}
        >
          <Input placeholder="Company Name" style={{ width: 300 }} />
        </Form.Item>
        <Form.List name={"employees"}>
          {(fields, { add, remove }) => (
            <div>
              {fields.map((field, index) => {
                return (
                  <Space key={field.key} direction="horizontal" size={12}>
                    <Form.Item
                      name={[field.name, "first"]}
                      label={`Employee-${index + 1}`}
                      rules={[
                        { required: true, message: "First Name required" },
                      ]}
                    >
                      <Input placeholder="First Name" />
                    </Form.Item>
                    <Form.Item name={[field.name, "last"]}>
                      <Input placeholder="Last Name" />
                    </Form.Item>
                    <Form.Item name={[field.name, "gender"]}>
                      <Select placeholder="Gender">
                        {["male", "female", "others"].map((gender) => {
                          return (
                            <Select.Option value={gender} key={gender}>
                              {gender}
                            </Select.Option>
                          );
                        })}
                      </Select>
                    </Form.Item>
                    <DatePicker
                      placeholder="Select DOB"
                      style={{ marginBottom: 25, width: 120 }}
                    />
                    <MinusCircleOutlined
                      style={{ height: 40, color: "red" }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  </Space>
                );
              })}
              <Form.Item>
                <Button
                  icon={<PlusOutlined />}
                  type="primary"
                  style={{ width: 150, marginLeft: 150 }}
                  onClick={() => {
                    add();
                  }}
                >
                  Add Employee
                </Button>
              </Form.Item>
            </div>
          )}
        </Form.List>
        <Button
          htmlType="submit"
          type="primary"
          style={{ width: 100, marginLeft: 150 }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AntdForm;
