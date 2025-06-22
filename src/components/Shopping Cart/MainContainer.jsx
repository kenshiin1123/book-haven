const MainContainer = ({ children }) => {
  return (
    <div className="border color-3 flex gap-2">
      <input type="checkbox" className="size-6 my-auto ml-3" />
      {children}
    </div>
  );
};

export default MainContainer;
