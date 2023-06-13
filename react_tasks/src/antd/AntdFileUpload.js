import { Upload, Button } from "antd";

const AntdFileUpload = () => {
  return (
    <div className="upload-file">
      <Upload.Dragger
        multiple={true}
        listType="picture"
        className="upload-dragger"
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
