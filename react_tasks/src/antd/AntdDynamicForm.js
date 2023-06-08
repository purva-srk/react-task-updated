import { Button, Form, Input, Space, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const AntdDynamicForm = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  //const [employee, setEmployee] = useState([]);
  const [employeeDetails, setEmployeeDetails] = useState([
    {
      firstName: "",
      lastName: "",
    },
  ]);

  const columns = [
    {
      key: "1",
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      key: "2",
      title: "Last Name",
      dataIndex: "lastName",
    },
  ];

  const handleFinish = () => {
    setIsSubmit(true);
    setDataSource(employeeDetails);
  };

  //   const handleChangeFirstName = (e) => {
  //     setEmployeeDetails((prev) => {
  //       return [...prev, { firstName: e.target.value }];
  //     });
  //   };

  //   const handleChangeLastName = (e) => {
  //     setEmployeeDetails((prev) => {
  //       return [...prev, { lastName: e.target.value }];
  //     });
  //   };

  //   const handleChangeOld = (e) => {
  //     setEmployeeDetails(() => {
  //       //console.log(prev);
  //       return { [e.target.name]: e.target.value };
  //     });
  //     console.log(employeeDetails);
  //     employee.push(employeeDetails);
  //     console.log(employee);
  //   };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    //const list = [...employeeDetails];
    employeeDetails[index][name] = value;
    setEmployeeDetails((prev) => [...prev, employeeDetails]);
  };

  return (
    <div>
      <Form onFinish={handleFinish} style={{ width: 700 }}>
        <Form.List name={"employees"}>
          {(fields, { add }) => (
            <div>
              {fields.map((field, index) => {
                return (
                  <Space key={field.key} direction="horizontal" size={12}>
                    <Form.Item
                      name={[field.name, "firstName"]}
                      label={`Employee-${index + 1}`}
                      rules={[
                        { required: true, message: "First Name required" },
                      ]}
                    >
                      <Input
                        name="firstName"
                        value={employeeDetails.firstName}
                        onBlur={(e) => {
                          handleChange(e, index);
                        }}
                        placeholder="First Name"
                      />
                    </Form.Item>
                    <Form.Item name={[field.name, "lastName"]}>
                      <Input
                        name="lastName"
                        value={employeeDetails.lastName}
                        onBlur={(e) => {
                          handleChange(e, index);
                        }}
                        placeholder="Last Name"
                      />
                    </Form.Item>
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
      {isSubmit && <Table columns={columns} dataSource={dataSource} />}
    </div>
  );
};

export default AntdDynamicForm;

// const AntdDynamicForm = () => {
//   const [employee, setEmployee] = useState([]);
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState();
//   const [employeeDetails, setEmployeeDetails] = useState([]);

//   const columns = [
//     {
//       key: "1",
//       title: "First Name",
//       dataIndex: "firstName",
//     },
//     {
//       key: "2",
//       title: "Last Name",
//       dataIndex: "lastName",
//     },
//   ];

//   const handleFormFinish = () => {
//     setEmployee(employeeDetails);
//   };

//   const handleClick = () => {
//     employeeDetails.push({ firstName, lastName });
//     console.log(employeeDetails);
//   };

//   return (
//     <div>
//       <Form onFinish={handleFormFinish} style={{ width: 700 }}>
//         <Form.List name={"employees"}>
//           {(fields, { add }) => (
//             <div>
//               {fields.map((field, index) => {
//                 return (
//                   <Space key={field.key} direction="horizontal" size={12}>
//                     <Form.Item
//                       name={[field.name, "firstName"]}
//                       label={`Employee-${index + 1}`}
//                       rules={[
//                         { required: true, message: "First Name required" },
//                       ]}
//                     >
//                       <Input
//                         value={firstName}
//                         onChange={(e) => {
//                           setFirstName(e.target.value);
//                         }}
//                         name="firstName"
//                         placeholder="First Name"
//                       />
//                     </Form.Item>
//                     <Form.Item name={[field.name, "lastName"]}>
//                       <Input
//                         value={lastName}
//                         onChange={(e) => {
//                           setLastName(e.target.value);
//                         }}
//                         name="lastName"
//                         placeholder="Last Name"
//                       />
//                     </Form.Item>
//                     <Form.Item>
//                       <Button type="primary" onClick={handleClick}>
//                         Add
//                       </Button>
//                     </Form.Item>
//                   </Space>
//                 );
//               })}
//               <Form.Item>
//                 <Button
//                   icon={<PlusOutlined />}
//                   type="primary"
//                   style={{ width: 150, marginLeft: 150 }}
//                   onClick={() => {
//                     add();
//                   }}
//                 >
//                   Add Employee
//                 </Button>
//               </Form.Item>
//             </div>
//           )}
//         </Form.List>
//         <Button
//           htmlType="submit"
//           type="primary"
//           style={{ width: 100, marginLeft: 150 }}
//         >
//           Submit
//         </Button>
//       </Form>
//       <Table columns={columns} dataSource={employee} />
//     </div>
//   );
// };

// export default AntdDynamicForm;
