import { Button, Table, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { useState } from "react";

const AntdTable = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [addingEmployee, setAddingEmployee] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
    },
    {
      id: 2,
      name: "Michael",
      email: "michael@gmail.com",
    },
    {
      id: 3,
      name: "Jim",
      email: "jim@gmail.com",
    },
    {
      id: 4,
      name: "Pam",
      email: "pam@gmail.com",
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Name",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "email",
    },
    {
      key: "4",
      title: "Action",
      render: (record) => {
        return (
          <div>
            <EditOutlined
              onClick={() => {
                handleEditEmployee(record);
              }}
              className="antdtable-edit"
            />
            <DeleteOutlined
              onClick={() => {
                handleDeleteEmployee(record);
              }}
              className="antdtable-delete"
            />
          </div>
        );
      },
    },
  ];

  const handleAddEmployee = () => {
    setIsAdding(true);
  };

  const resetAdding = () => {
    setIsAdding(false);
    setAddingEmployee(null);
  };

  const handleDeleteEmployee = (record) => {
    Modal.confirm({
      title: "Delete this item?",
      onOk: () => {
        setDataSource((prev) => {
          return prev.filter((emp) => emp.id !== record.id);
        });
      },
    });
  };

  const handleEditEmployee = (record) => {
    setIsEditing(true);
    setEditingEmployee({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingEmployee(null);
  };

  return (
    <div className="antd-table">
      <Button
        onClick={handleAddEmployee}
        type="primary"
        shape="round"
        className="antdtable-button"
      >
        Add new
      </Button>
      <Table
        pagination={{ pageSize: 5 }}
        columns={columns}
        dataSource={dataSource}
      ></Table>
      <Modal
        title="Edit"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((prev) => {
            return prev.map((employee) => {
              if (employee.id === editingEmployee.id) {
                return editingEmployee;
              } else {
                return employee;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingEmployee?.name}
          onChange={(e) => {
            setEditingEmployee((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingEmployee?.email}
          onChange={(e) => {
            setEditingEmployee((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
      </Modal>

      <Modal
        title="Add"
        visible={isAdding}
        okText="Add"
        onCancel={() => {
          resetAdding();
        }}
        onOk={() => {
          setDataSource((prev) => {
            return [...prev, addingEmployee];
          });
          resetAdding();
        }}
      >
        <label>ID:</label>
        <Input
          value={addingEmployee?.id}
          onChange={(e) => {
            setAddingEmployee((prev) => {
              return { ...prev, id: e.target.value };
            });
          }}
        />

        <label>Name:</label>
        <Input
          value={addingEmployee?.name}
          onChange={(e) => {
            setAddingEmployee((prev) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />

        <label>Email:</label>
        <Input
          value={addingEmployee?.email}
          onChange={(e) => {
            setAddingEmployee((prev) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};

export default AntdTable;
