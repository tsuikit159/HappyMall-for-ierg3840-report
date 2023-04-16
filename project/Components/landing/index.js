import KeyboardImg from "../../assets/keyboard-cover.png";

const LandingSection = () => {
  return (
    <section
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${KeyboardImg.src}')` }}
    >
      <div className="mt-16 h-screen w-full absolute top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          <div className="w-full md:w-1/2 md:mr-8">
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">
              <span className="text-cyan">H</span>appyMall
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              We are a brand that specializes in creating the best product for
              customer. Our product are made with high-quality
              coorperate and design with the most user-oriented product.
            </p>
            <div className="flex flex-col md:flex-row">
            <button className="bg-cyan-500 hover:bg-black-600 text-white py-2 px-3 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out">
                <Link href="/">
                check our page
                </Link>
                </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LandingSection };
