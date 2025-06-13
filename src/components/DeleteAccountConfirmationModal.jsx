import { useEffect, useRef } from "react";
import PasswordInput from "./PasswordInput";
import Button, { ButtonOutlined } from "./Button";
const DeleteAccountConfirmationModal = ({ ref, onDelete = () => {} }) => {
  const handleClose = () => {
    ref.current.close();
  };

  const password = useRef();
  const confirmPassword = useRef();

  const handleDelete = () => {
    console.log("Password: " + password.current.value);
    console.log("Confirmed Password: " + confirmPassword.current.value);
    onDelete();
  };

  useEffect(() => {
    password.current.focus();
  });

  return (
    <dialog
      ref={ref}
      className="min-h-70 sm:w-90 mx-auto my-auto p-5 space-y-5 bg-white"
    >
      <h1 className="text-sm mx-auto text-center mb-7 sm:w-60 text-red-600">
        Please confirm your password to permanently delete your account.
      </h1>
      <section>
        <label htmlFor="password">Password</label>
        <PasswordInput ref={password} name={"password"} />
      </section>
      <section>
        <label htmlFor="confirm-password">Confirm Password</label>
        <PasswordInput ref={confirmPassword} name={"confirm-password"} />
      </section>
      <section className="flex justify-between mt-10">
        <Button onClick={handleDelete}>Delete</Button>
        <ButtonOutlined onClick={handleClose}>Cancel</ButtonOutlined>
      </section>
    </dialog>
  );
};

export default DeleteAccountConfirmationModal;
