import { FaMoon } from "react-icons/fa6";
import { ButtonToggle } from "../../components/Button";
import { IoIosNotifications } from "react-icons/io";
import { useEffect, useState } from "react";
export default function SettingsPage() {
  const [darkTheme, setDarkTheme] = useState();
  const [notification, setNotification] = useState();

  const handleDarkThemeClick = () => {
    setDarkTheme((prev) => !prev);
  };
  const handleNotificationClick = () => {
    setNotification((prev) => !prev);
  };

  const settings = [
    {
      active: darkTheme,
      handleClick: handleDarkThemeClick,
      title: "Dark Theme",
      icon: <FaMoon />,
      description:
        "Enable dark mode for more comfortable experience in low light.",
    },
    {
      active: notification,
      handleClick: handleNotificationClick,
      title: "Notifications",
      icon: <IoIosNotifications />,
      description: "Receive updates and alerts for important activity.",
    },
  ];

  useEffect(() => {
    document.title = "Settings - Book Haven";
  });

  return (
    <Container>
      {settings.map((s) => {
        return <Setting {...s} key={s.title} />;
      })}
    </Container>
  );
}

const Setting = ({ icon, title, description, active, handleClick }) => {
  return (
    <section className="flex flex-col p-3 border">
      <div className="flex items-center">
        <span className="text-2xl">{icon}</span>
        <label
          className="ml-2 mr-10 text-xl font-bold select-none"
          onClick={handleClick}
        >
          {title}
        </label>
        <ButtonToggle active={active} onClick={handleClick} />
      </div>
      <hr className="my-3 border-gray-500" />
      <p className="text-sm">{description}</p>
    </section>
  );
};

const Container = ({ children }) => {
  return (
    <div className="flex flex-col mx-auto p-3 gap-5 mb-20">{children}</div>
  );
};
