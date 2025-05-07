import { Modal } from "antd";
import RegisterForm from "./components/RegisterForm";
import { FaCircleUser } from "react-icons/fa6";
import { useState } from "react";

function App() {
  // return (
  //   <div className="min-h-screen w-screen py-8 flex justify-center items-center text-white bg-[linear-gradient(45deg,_#111111,_#2a003f)]">
  //     <RegisterForm />
  //   </div>
  // );

  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="min-h-screen w-screen py-8 relative text-white bg-[linear-gradient(45deg,_#111111,_#2a003f)]">
     
      <div className="absolute bottom-[20px] right-[40px] cursor-pointer" onClick={() => setOpen(true)}>
        <FaCircleUser 
          className="text-3xl text-purple-900 mb-4"
        />
      </div>

      <Modal
        open={open}
        footer={null}
        centered
        onClose={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        styles={{body: {paddingTop: '30px', }}}
      >
        <RegisterForm />
      </Modal>
    </div>
  );
}

export default App;