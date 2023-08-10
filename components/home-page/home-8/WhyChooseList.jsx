const reasons = [
  {
    title: "Industry leading technology trusted by thousands of users.",
  },
  {
    title: "We provide some the best pricing models globally",
  },
  {
    title: "We have expert support staff working around the clock.",
  },
];

const WhyChooseList = () => {
  return (
    <div className="block-style-five pe-xl-5 me-xxl-5" data-aos="fade-right">
      <div className="title-style-nine pb-20">
        <div className="sc-title">Why Choose us</div>
        <h2 className="main-title text-white">
          Why <span>Choose</span> us for your business.
        </h2>
      </div>
      {/* /.title-style-nine */}
      <ul className="style-none list-item">
        {reasons.map((reason) => (
          <li key={reason.title}>{reason.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WhyChooseList;
