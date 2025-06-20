import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/userReducer";
const ProfilePic = () => {
  const dispatch = useDispatch();
  const profilePic = useSelector((state) => state.user.profilePic);
  const inputRef = useRef();
  const [file, setFile] = useState(profilePic);

  const handleInputClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setFile(imageUrl);
      dispatch(
        userActions.updateInfo({ type: "profilePic", newInfo: imageUrl })
      );
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-2 items-center">
      <img src={file} className="size-50 border border-gray-400 shadow" />
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        hidden
        onChange={handleFileChange}
      />
      <button
        className="border px-2 py-1 active:scale-95"
        onClick={handleInputClick}
      >
        Upload Picture
      </button>
    </div>
  );
};

export default ProfilePic;
