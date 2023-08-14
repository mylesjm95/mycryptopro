const BlockFeatureList = () => {
  const featureList = [
    {
      title: "Wordpress & Woocommerce Compatible",
    },
    {
      title: "First class support",
    },
    {
      title: "Industry leading technology",
    },
  ];

  return (
    <div className="block-style-three ps-xxl-5" data-aos="fade-left">
      <div className="title-style-nine">
        <div className="sc-title">How it Works</div>
        <h2 className="main-title text-white">
          Start Selling in <span>Crypto</span> today 
        </h2>
      </div>
      <p className="text-lg text-white opacity-75 pt-20 pb-30 lg-pb-20">
        Give your customers what they want.
      </p>
      <ul className="style-none list-item fs-18 text-white opacity-75">
        {featureList.map((feature, index) => (
          <li key={index}>{feature.title}</li>
        ))}
      </ul>
      <a href="#home-contact-form" className="btn-sixteen fw-500 border7 tran3s mt-45">
        Accept Crypto
      </a>
    </div>
  );
};

export default BlockFeatureList;
