import { useEffect, useRef } from "react";
import { EditableLabelNInput } from "../../components/LabelNInput";
export default function ProfilePage() {
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const birthday = useRef();

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

  return (
    <div className="border border-b-0 mx-auto flex flex-col gap-2 pt-3 mb-10 w-[90%] sm:w-[35rem] md:w-[40rem]">
      <EditableLabelNInput disabled={true} ref={firstname} name={"firstname"} />
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
  );
}
