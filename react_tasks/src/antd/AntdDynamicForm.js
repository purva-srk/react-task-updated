import React, { useState } from "react";
import { Table, Button, Input, Modal } from "antd";
import { DeleteOutlined, MinusCircleOutlined } from "@ant-design/icons";

const AntdDynamicForm = () => {
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (index, field, value) => {
    const values = [...inputValues];
    values[index][field] = value;
    setInputValues(values);
  };

  const handleAddField = () => {
    setInputValues([...inputValues, { name: "", age: "", email: "" }]);
  };

  const handleDeleteField = (index) => {
    const values = [...inputValues];
    values.splice(index, 1);
    setInputValues(values);
  };

  const handleDeleteEmployee = (record) => {
    Modal.confirm({
      title: "Delete this item?",
      onOk: () => {
        setData((prev) => {
          return prev.filter((emp) => emp.id !== record.id);
        });
      },
    });
  };

  const handleSubmit = () => {
    const newData = inputValues.map((value, index) => ({
      id: index + 1,
      name: value.name,
      age: value.age,
      email: value.email,
    }));
    setData(newData);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => {
        return (
          <div>
            <DeleteOutlined
              className="dynamic-form-delete"
              onClick={() => {
                handleDeleteEmployee(record);
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div>
      {inputValues.map((value, index) => (
        <div className="dynamic-form">
          <label className="dynamic-form-label">Employee{index + 1}-</label>
          <Input
            placeholder="Enter Name"
            className="dynamic-form-input"
            value={value.name}
            onChange={(event) =>
              handleInputChange(index, "name", event.target.value)
            }
          />
          <Input
            placeholder="Enter Age"
            className="dynamic-form-input"
            value={value.age}
            onChange={(event) =>
              handleInputChange(index, "age", event.target.value)
            }
          />
          <Input
            placeholder="Enter Email"
            className="dynamic-form-input"
            value={value.email}
            onChange={(event) =>
              handleInputChange(index, "email", event.target.value)
            }
          />
          <MinusCircleOutlined
            className="minus-outlined"
            onClick={handleDeleteField}
          />
          <br />
        </div>
      ))}
      <br />
      <div className="form-buttons">
        <Button
          className="dynamic-form-button"
          type="primary"
          onClick={handleAddField}
        >
          Add Fields
        </Button>

        <Button
          className="dynamic-form-button"
          type="primary"
          onClick={handleSubmit}
        >
          Submit Form
        </Button>
      </div>
      <Table
        className="dynamic-form-table"
        pagination={{ pageSize: 5 }}
        dataSource={data}
        columns={columns}
      />
    </div>
  );
};

export default AntdDynamicForm;
