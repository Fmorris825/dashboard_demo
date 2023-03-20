import { Button, Modal } from "antd";
import DisabledContext from "antd/es/config-provider/DisabledContext";
import { useState } from "react";
import DemoForm from "./DemoForm";

const DemoModal = ({ setUser, setLocation }) => {
  const [tempUser, setTempUser] = useState("");
  const [tempLocation, setTempLocation] = useState("");

  const [open, setOpen] = useState(true);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setModalText("The modal will be closed after two seconds");
    setConfirmLoading(true);
    setTimeout(() => {
      setUser(tempUser);
      setLocation(tempLocation);
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <>
      <Modal
        title="Welcome to Fred's Streamline Demo Application"
        open={open}
        confirmLoading={confirmLoading}
        closable={false}
        cancelButtonProps={{ disabled: true }}
        maskClosable={false}
        footer={null}
      >
        <DemoForm
          //   setTempUser={setTempUser}
          //   setTempLocation={setTempLocation}
          setTempLocation={setTempLocation}
          setTempUser={setTempUser}
          handleOk={handleOk}
        />
      </Modal>
    </>
  );
};

export default DemoModal;
