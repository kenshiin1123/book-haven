import { useEffect, useRef } from "react";
import { EditableLabelNInput } from "../../components/LabelNInput";
import ProfilePic from "../../components/ProfilePic";
import { ButtonWarning } from "../../components/Button";
import DeleteAccountConfirmationModal from "../../components/DeleteAccountConfirmationModal";
import ChangePasswordModal from "../../components/ChangePasswordModal";

import { useSelector } from "react-redux";
export default function ProfilePage() {
  const user = useSelector((state) => state.user);
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const birthday = useRef();
  const phone = useRef();
  const address = useRef();

  const deleteModal = useRef();
  const changePasswordModal = useRef();

  useEffect(() => {
    firstname.current.value = user.firstname;
    firstname.current.title = user.firstname;

    lastname.current.value = user.lastname;
    lastname.current.title = user.lastname;

    email.current.value = user.email;
    email.current.title = user.email;

    phone.current.value = user.phone;
    phone.current.title = user.phone;

    birthday.current.value = user.birthday;
    birthday.current.title = user.birthday;

    address.current.value = user.address;
    address.current.title = user.address;

    document.title = "Profile - Book Haven";
  }, [user]);

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
          ref={phone}
          name={"phone"}
          type="text"
        />
        <EditableLabelNInput
          disabled={true}
          ref={birthday}
          name={"birthday"}
          type="date"
        />
        <EditableLabelNInput
          disabled={true}
          ref={address}
          name={"address"}
          type="text"
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
