export default function BurguerMenu() {
  return (
    <nav className="flex h-36 pt-8   items-center justify-between">
      <a className="w-1/2 max-w-[200px] flex items-center" href="">
        <img
          className="block   text-white object-cover  w-28 h-28 rounded-full"
          src="./assets/H6.svg"
          alt="logo"
        />
        <span>Hazael Montiel</span>
      </a>
      <input type="checkbox" id="menu" className="peer/menu hidden" />
      <label
        className="md:hidden w-10 h-10 text-white bg-openMenu bg-cover bg-center bg-greenColor
        peer-checked/menu:bg-closeMenu  rounded-lg cursor-pointer transition-all duration-500 z-10"
        htmlFor="menu"
      >
        {" "}
      </label>
      <ul
        className="fixed inset-0 bg-slate-800/70 px-[5%] grid auto-rows-max justify-end items-start gap-6
       clip-circle-0  peer-checked/menu:clip-circle-full pt-40 transition-[clip-path] duration-500
       md:clip-circle-full md:relative md:grid-flow-col   md:p-0 md:bg-transparent"
      >
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">My portfolio</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
