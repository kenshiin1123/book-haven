const MainContainer = ({ children, handleItemCheck, isChecked }) => {
  return (
    <div className="border color-3 flex gap-2" onClick={handleItemCheck}>
      <input
        checked={isChecked}
        type="checkbox"
        className="size-6 my-auto ml-3"
        onChange={handleItemCheck}
      />
      {children}
    </div>
  );
};

export default MainContainer;
