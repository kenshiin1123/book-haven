import { useEffect, useRef } from "react";
import PasswordInput from "../ui/PasswordInput";
import Button, { ButtonOutlined } from "../ui/Button";
import Dialog from "../ui/Dialog";
import { useDispatch } from "react-redux";
import { modifyProfile } from "../../store/userReducer";
import { toast } from "sonner";

const ChangePasswordModal = ({ ref, onDelete = () => {} }) => {
  const dispatch = useDispatch();
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
    // console.log("Old Password: " + oldPassword.current.value);
    // console.log("New Password: " + newPassword.current.value);
    // console.log("Confirmed New Password: " + confirmNewPassword.current.value);
    onDelete();

    if (
      oldPassword.current.value &&
      newPassword.current.value &&
      confirmNewPassword.current.value
    ) {
      const payload = {
        type: "password",
        newInfo: {
          oldPassword: oldPassword.current.value,
          newPassword: newPassword.current.value,
        },
      };

      // Toast an error if the confirm password and new password is not correct
      if (newPassword.current.value !== confirmNewPassword.current.value) {
        console.log(newPassword.current.value);
        console.log(confirmNewPassword.current.value);
        return toast.error("New password and confirmation do not match.");
      } else {
        dispatch(modifyProfile(payload));
      }

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
    <Dialog ref={ref}>
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
    </Dialog>
  );
};

export default ChangePasswordModal;
