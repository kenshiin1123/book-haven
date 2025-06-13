import { useEffect, useRef } from "react";
import PasswordInput from "./PasswordInput";
import Button, { ButtonOutlined } from "./Button";
const ChangePasswordModal = ({ ref, onDelete = () => {} }) => {
  const handleClose = () => {
    ref.current.close();
  };

  const oldPassword = useRef();
  const newPassword = useRef();
  const confirmNewPassword = useRef();

  const clearInputs = () => {
    oldPassword.current.value = "";
    newPassword.current.value = "";
    confirmNewPassword.current.value = "";
  };

  const handleChangePass = () => {
    console.log("Old Password: " + oldPassword.current.value);
    console.log("New Password: " + newPassword.current.value);
    console.log("Confirmed New Password: " + confirmNewPassword.current.value);
    onDelete();

    if (
      oldPassword.current.value &&
      newPassword.current.value &&
      confirmNewPassword.current.value
    ) {
      alert("Successfully changed the password!");
      clearInputs();
      handleClose();
    } else {
      alert("Please fill all fields!");
    }
  };

  useEffect(() => {
    oldPassword.current.focus();
  });

  return (
    <dialog
      ref={ref}
      className="min-h-70 sm:w-90 mx-auto my-auto p-5 space-y-5 bg-white"
    >
      <h1 className="text-sm mx-auto text-center mb-7 sm:w-60 text-red-600">
        Change Password.
      </h1>
      <section>
        <label htmlFor="old-Password">Old Password</label>
        <PasswordInput ref={oldPassword} name={"old-Password"} />
      </section>
      <section>
        <label htmlFor="new-password">New Password</label>
        <PasswordInput ref={newPassword} name={"new-password"} />
      </section>
      <section>
        <label htmlFor="confirm-new-password">Confirm New Password</label>
        <PasswordInput ref={confirmNewPassword} name={"confirm-new-password"} />
      </section>
      <section className="flex justify-between mt-10">
        <Button onClick={handleChangePass}>Confirm</Button>
        <ButtonOutlined onClick={handleClose}>Cancel</ButtonOutlined>
      </section>
    </dialog>
  );
};

export default ChangePasswordModal;
