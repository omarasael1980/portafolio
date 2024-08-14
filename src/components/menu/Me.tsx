export default function Me() {
  return (
    <section className="md:flex pt-10 pb-16 mx-auto justify-between items-center gap-8">
      <figure className="mx-auto md:order-1">
        <img
          className="w-[90%] aspect-square object-cover   rounded-full max-w-xs mx-auto "
          src="./assets/Omar.png"
          alt="Mi foto"
        />
      </figure>
      <article className="text-center mt-8 mx-auto md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-blue-100">Omar Hernandez!</span>
        </h1>
        <p className="text-grayColor text-xl mt-3 mb-6">Fullstack Developer</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:grid-cols-2 mx-auto lg:m-0 lg:w-3/5">
          <a
            className="bg-greenColor flex items-center justify-center h-[60px] text-white"
            href=""
          >
            Download CV
          </a>
          <a
            className="border border-white flex items-center justify-center h-[60px]"
            href=""
          >
            Learn More
          </a>
        </div>
      </article>
    </section>
  );
}
