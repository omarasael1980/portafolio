import BurguerMenu from "./components/menu/BurguerMenu";
import Me from "./components/menu/Me";
function App() {
  return (
    <div className="w-[90%] mx-auto overflow-hidden max-w-screen-xl">
      <header>
        <BurguerMenu />
        <Me />
      </header>
      <main>
        <section className="py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
            dignissimos nobis autem quidem atque, rerum fuga itaque non quos eos
            enim temporibus ab nisi animi quis reiciendis, architecto eligendi
            voluptate!
          </p>
          <div>
            <article>
              <div className="p-4 w-max aspect-square bg-cardColor rounded-full  ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="fill-greenColor w-10"
                >
                  <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 2v.511l-8 6.223-8-6.222V6h16zM4 18V9.044l7.386 5.745a.994.994 0 0 0 1.228 0L20 9.044 20.002 18H4z"></path>
                </svg>
              </div>

              <h2 className="text-2xl font-bold">My Skills</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
              </ul>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
