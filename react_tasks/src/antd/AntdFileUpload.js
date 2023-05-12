import { Upload, Button } from "antd";

const AntdFileUpload = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80",
      }}
    >
      <Upload.Dragger
        multiple={true}
        listType="picture"
        style={{ width: 250 }}
        action={"http://localhost:3000/"}
        showUploadList={{ showRemoveIcon: "true" }}
        accept=".pdf,.png,.jpeg,.doc"
      >
        Drag files here OR
        <br />
        <Button>Click to Upload</Button>
      </Upload.Dragger>
    </div>
  );
};

export default AntdFileUpload;
