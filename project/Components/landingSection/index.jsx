import Image from "next/image";
import KeyboardImg from "../../assets/keyboard.png";
import Link from "next/link";
const LandingSection = () => {
  return (
    <section className="flex flex-row justify-center items-center py-16 px-6">
      <div className="flex flex-col justify-center items-center mr-6">
        <h1 className="text-4xl font-bold text-gray-900">
        <span className="text-cyan-500">H</span>appyMall
        </h1>
        <h2 className="text-lg text-gray-700 mb-8">
        Happy mall, gives your joy way more.
        </h2>
        <div className="flex flex-col gap-4">
          <Link href ="/">
          <button className="px-4 py-2 bg-cyan-500 text-white rounded-md">
            Keyboards
          </button>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={KeyboardImg}
          alt="Keyboard illustration"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default LandingSection;
