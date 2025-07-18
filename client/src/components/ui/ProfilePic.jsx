import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyProfile } from "../../store/userReducer";
import { ButtonOutlined } from "../ui/Button";
const ProfilePic = () => {
  const dispatch = useDispatch();
  const picture = useSelector((state) => state.user.picture);
  const inputRef = useRef();
  const [file, setFile] = useState(picture);

  const handleInputClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setFile(imageUrl);
      dispatch(modifyProfile({ type: "picture", newInfo: selectedFile }));
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-2 items-center">
      <img
        src={file || "/pictures/default-profile.png"}
        className="h-50 border border-gray-400 shadow color-3"
      />
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        hidden
        onChange={handleFileChange}
      />
      <ButtonOutlined onClick={handleInputClick}>Upload Picture</ButtonOutlined>
    </div>
  );
};

export default ProfilePic;
