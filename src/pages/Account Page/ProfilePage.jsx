import { useEffect, useRef } from "react";
import { EditableLabelNInput } from "../../components/LabelNInput";
import ProfilePic from "../../components/ProfilePic";
import { ButtonWarning } from "../../components/Button";
import DeleteAccountConfirmationModal from "../../components/DeleteAccountConfirmationModal";
import ChangePasswordModal from "../../components/ChangePasswordModal";
export default function ProfilePage() {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const birthday = useRef();

  const deleteModal = useRef();
  const changePasswordModal = useRef();

  useEffect(() => {
    firstname.current.value = "examplefirstname";
    firstname.current.title = "examplefirstname";

    lastname.current.value = "examplelastname";
    lastname.current.title = "examplelastname";

    email.current.value = "example@gmail.com";
    email.current.title = "example@gmail.com";

    birthday.current.value = "2004-11-23";
    birthday.current.title = "2004-11-23";
  }, []);

  const handleDeleteConfirmation = () => {
    deleteModal.current.showModal();
  };
  const handleChangePassword = () => {
    changePasswordModal.current.showModal();
  };

  return (
    <>
      <ProfilePic />
      <div className="border border-b-0 mx-auto flex flex-col gap-2 pt-3 w-[90%] sm:w-[35rem] md:w-[40rem]">
        <EditableLabelNInput
          disabled={true}
          ref={firstname}
          name={"firstname"}
        />
        <EditableLabelNInput disabled={true} ref={lastname} name={"lastname"} />
        <EditableLabelNInput
          disabled={true}
          ref={email}
          name={"email"}
          type="email"
        />
        <EditableLabelNInput
          disabled={true}
          ref={birthday}
          name={"birthday"}
          type="date"
        />
      </div>
      <div className="flex flex-col mx-auto gap-2 my-5">
        <ButtonWarning
          onClick={handleChangePassword}
          classExtension={"w-60 py-2 inset-ring-0"}
        >
          Change Password
        </ButtonWarning>
        <ButtonWarning
          onClick={handleDeleteConfirmation}
          classExtension={"w-40 mx-auto mt-5"}
        >
          Delete Account
        </ButtonWarning>
      </div>
      <DeleteAccountConfirmationModal ref={deleteModal} />
      <ChangePasswordModal ref={changePasswordModal} />
    </>
  );
}
