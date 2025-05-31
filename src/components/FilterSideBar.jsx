export default function FilterSideBar({ active }) {
  return (
    <aside
      className={`${
        active ? "w-60" : "w-0"
      } h-full fixed top-0 border-r border-r-gray-500 bg-white transition`}
    >
      {active && <>Hello World</>}
    </aside>
  );
}
