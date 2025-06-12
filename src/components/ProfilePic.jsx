import { useRef, useState } from "react";
import defaultProfile from "../assets/pictures/default-profile.png";
const ProfilePic = () => {
  const inputRef = useRef();
  const [file, setFile] = useState(defaultProfile);

  const handleInputClick = () => {
    inputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setFile(imageUrl);
    }
  };

  return (
    <div className="mx-auto flex flex-col gap-2 items-center">
      <img src={file} className="size-50 border p-5" />
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
