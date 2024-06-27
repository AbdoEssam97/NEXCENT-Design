const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Design",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.",
      image: "/src/assets/Icon1.png",
    },
    {
      id: 2,
      title: "Web Development",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.",
      image: "/src/assets/Icon2.png",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, ratione.",
      image: "/src/assets/Icon3.png",
    },
  ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Client
        </h2>
        <p className="text-neutralDGrey">
          we have been working with clients around the world.
        </p>

        <div className="my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/src/assets/Logo.png" alt="" />
          <img src="/src/assets/Logo2.png" alt="" />
          <img src="/src/assets/Logo3.png" alt="" />
          <img src="/src/assets/Logo4.png" alt="" />
          <img src="/src/assets/Logo5.png" alt="" />
          <img src="/src/assets/Logo6.png" alt="" />
          <img src="/src/assets/Logo7.png" alt="" />
        </div>

        <div className="mt-20 md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
            single system
          </h2>
          <p className="text-neutralDGrey">
            we have been working with clients around the world.
          </p>
        </div>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white px-4 py-8 text-center md:w-[300px] mx-auto md:h-80  rounded-lg  shadow-md cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="-ml-3"
                />
              </div>
              <h4 className="text-2xl font-semibold text-neutralDGrey px-2 mb-2">
                {service.title}
              </h4>
              <p className=" text-sm text-neutralDGrey">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
