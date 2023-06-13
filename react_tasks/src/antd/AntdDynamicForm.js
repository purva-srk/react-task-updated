import React, { useState } from "react";
import { Table, Button, Input, Modal, Form } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const AntdDynamicForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [inputVisible, setInputVisible] = useState(true);
  const [data, setData] = useState([]);
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (index, event) => {
    const values = [...inputValues];
    values[index] = event.target.value;
    setInputValues(values);
  };

  const handleAddField = () => {
    setInputValues([...inputValues, ""]);
    setInputVisible(true);
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
      id: index,
      value: value,
    }));
    setData(newData);
    setIsSubmit(true);
    setInputVisible(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
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
      <div>
        {inputVisible &&
          inputValues.map((value, index) => (
            <div className="dynamic-form">
              <Input
                className="dynamic-form-input"
                key={index}
                value={value}
                onChange={(event) => handleInputChange(index, event)}
              />
              <br />
            </div>
          ))}
        <br />
        <Button
          className="dynamic-form-button"
          type="primary"
          onClick={handleAddField}
        >
          Add Field
        </Button>
      </div>
      <br />
      <Button
        className="dynamic-form-button"
        type="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
      {isSubmit && (
        <Table
          className="dynamic-form-table"
          pagination={{ pageSize: 5 }}
          dataSource={data}
          columns={columns}
        />
      )}
    </div>
  );
};

export default AntdDynamicForm;
