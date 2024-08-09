export default function BurguerMenu() {
  return (
    <nav className="flex h-32  bg-red-800 items-center justify-between">
      <a className="w-1/2 max-w-[200px] " href="">
        <img
          className="block w-full text-white"
          src="./assets/logo.svg"
          alt="logo"
        />
      </a>
      <input className="hidden" type="checkbox" name="menu" id="menu" />
      <label
        className="w-10 h-10 text-white bg-openMenu bg-cover bg-center bg-greenColor rounded-lg cursor-pointer"
        htmlFor="menu"
      >
        {" "}
      </label>
      <ul>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">About Me</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}
