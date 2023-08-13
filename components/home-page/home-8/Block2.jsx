import Image from "next/image";

const Block2 = () => {
  const data = [
    {
      icon: "/images/icon/icon_78.png",
      title: "Global Compliance",
      description: "Industry leading compliance from our experts",
    },
    {
      icon: "/images/icon/icon_79.png",
      title: "Easy to Use & Operate",
      description: "Get up and runnning in record breaking time",
    },
    {
      icon: "/images/icon/icon_81.png",
      title: "Secure storage",
      description: "All our data is encrypted and built with privacy in mind",
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className={`col-lg-4 col-md-6 ${index === 1 ? "active" : ""}`}
        >
          <div
            className="card-style-twelve text-center position-relative mt-40"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              <Image
                width={180}
                height={180}
                layout="intrinsic"
                src={item.icon}
                alt="shape"
                className="lazy-img"
              />
            </div>
            <h4 className="text-white mb-10 mt-25">{item.title}</h4>
            <p className="text-white opacity-75 mb-25">{item.description}</p>
            <a href="#" className="arrow tran3s">
              <img
                src="/images/icon/icon_80.svg"
                alt="shape"
                className="lazy-img"
              />
            </a>
          </div>
          {/* /.card-style-twelve */}
        </div>
      ))}
    </>
  );
};

export default Block2;
