import { toast } from "sonner";
import { useEffect, useRef } from "react";
import { EditableLabelNInput } from "../../components/ui/LabelNInput";
import ProfilePic from "../../components/ui/ProfilePic";
import { ButtonWarning } from "../../components/ui/Button";
import DeleteAccountConfirmationModal from "../../components/account/DeleteAccountConfirmationModal";
import ChangePasswordModal from "../../components/account/ChangePasswordModal";
import { modifyProfile } from "../../store/userReducer";

import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "react-router";
import {
  Firstname,
  Lastname,
  Email,
  Birthday,
  Phone,
  Address,
  Password,
  PicPath,
} from "../../schema/user.schema";
export default function ProfilePage() {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const birthday = useRef();
  const phone = useRef();
  const address = useRef();

  const deleteModal = useRef();
  const changePasswordModal = useRef();

  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  useEffect(() => {
    let birthdayVal = user.birthday;

    if (user.birthday.indexOf("T")) {
      birthdayVal = user.birthday.slice(0, user.birthday.indexOf("T"));
    }

    const fields = [
      { ref: firstname, value: user.firstname },
      { ref: lastname, value: user.lastname },
      { ref: email, value: user.email },
      { ref: phone, value: user.phone },
      { ref: birthday, value: birthdayVal },
      { ref: address, value: user.address },
    ];

    fields.forEach(({ ref, value }) => {
      if (ref.current) {
        ref.current.value = value;
        ref.current.title = value;
      }
    });

    document.title = "Profile - Book Haven";
  }, [user]);

  const handleDeleteConfirmation = () => {
    deleteModal.current.showModal();
  };
  const handleChangePassword = () => {
    changePasswordModal.current.showModal();
  };

  const toastError = (result) => {
    toast.error(result.error.errors.map((err) => err.message));
    return false;
  };

  const handleEditProfile = (type, newInfo) => {
    // validate
    switch (type) {
      case "firstname": {
        const result = Firstname.safeParse(newInfo);
        if (!result.success) return toastError(result);
        break;
      }
      case "lastname": {
        const result = Lastname.safeParse(newInfo);
        if (!result.success) return toastError(result);
        break;
      }
      case "email": {
        const result = Email.safeParse(newInfo);
        if (!result.success) return toastError(result);
        break;
      }
      case "birthday": {
        const result = Birthday.safeParse(newInfo);
        if (!result.success) return toastError(result);
        const now = new Date().getFullYear();
        if (result.data.slice(0, result.data.indexOf("-")) > now) {
          toast.error("Invalid year: It can't be set beyond the current year.");
          return false;
        }
        break;
      }
      case "phone": {
        const result = Phone.safeParse(newInfo);
        if (!result.success) return toastError(result);
        break;
      }
      case "address": {
        const result = Address.safeParse(newInfo);
        if (!result.success) return toastError(result);
        break;
      }
      case "password": {
        const result = Password.safeParse(newInfo);
        if (!result.success) return toastError(result);
        break;
      }
      case "profile-pic": {
        const result = PicPath.safeParse(newInfo);
        if (!result.success) return toastError(result);
        break;
      }
    }

    // This runs if every validation goes well
    dispatch(modifyProfile({ type, newInfo }));
    return true;
  };

  const editableLabelNInputs = [
    {
      ref: firstname,
      name: "firstname",
      disabled: true,
    },
    {
      ref: lastname,
      name: "lastname",
      disabled: true,
    },
    {
      ref: email,
      name: "email",
      type: "email",
      disabled: true,
    },
    {
      ref: phone,
      name: "phone",
      type: "text",
      disabled: true,
    },
    {
      ref: birthday,
      name: "birthday",
      type: "date",
      disabled: true,
    },
    {
      ref: address,
      name: "address",
      type: "text",
      disabled: true,
    },
  ];

  const warningButtons = [
    {
      onClick: handleChangePassword,
      classExtension: "w-60 py-2 inset-ring-0",
      label: "Change Password",
    },
    // {
    //   onClick: handleDeleteConfirmation,
    //   classExtension: "w-40 mx-auto mt-5",
    //   label: "Delete Account",
    // },
  ];

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <>
      <ProfilePic />
      <div className="border border-b-0 mx-auto flex flex-col gap-2 pt-3 w-[90%] sm:w-[35rem] md:w-[40rem] color-3">
        {editableLabelNInputs.map((item, i) => (
          <EditableLabelNInput
            {...item}
            updateFunc={handleEditProfile}
            key={i}
          />
        ))}
      </div>
      <div className="flex flex-col mx-auto gap-2 my-5">
        {warningButtons.map((button, i) => (
          <ButtonWarning
            key={i}
            classExtension={button.classExtension}
            onClick={button.onClick}
          >
            {button.label}
          </ButtonWarning>
        ))}
      </div>
      {/* <DeleteAccountConfirmationModal ref={deleteModal} /> */}
      <ChangePasswordModal ref={changePasswordModal} />
    </>
  );
}
