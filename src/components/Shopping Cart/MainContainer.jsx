const MainContainer = ({ children }) => {
  return (
    <div className="border border-gray-500 flex gap-2 bg-white">
      <input type="checkbox" className="size-6 my-auto ml-3" />
      {children}
    </div>
  );
};

export default MainContainer;
