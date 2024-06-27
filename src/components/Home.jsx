import { Carousel } from "flowbite-react";
import bannerl from "../assets/Illustration.png";

const Home = () => {
  return (
    <main className="bg-neutralSilver">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse gap-12 items-center justify-around">
            <div>
              <img src={bannerl} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  from 8 years{" "}
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business a photographer : site or social
                media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 ">
                {" "}
                Register
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse gap-12 items-center justify-around">
            <div>
              <img src={bannerl} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  in 4 month{" "}
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business a photographer : site or social
                media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 ">
                {" "}
                Register
              </button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse gap-12 items-center justify-around">
            <div>
              <img src={bannerl} alt="" />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Lessons and insights
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  should be taken
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Where to grow your business a photographer : site or social
                media?
              </p>
              <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey transition-all duration-300 hover:-translate-y-4 ">
                {" "}
                Register
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </main>
  );
};

export default Home;
