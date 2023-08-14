import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="Vsq1_kewchQ"
        onClose={() => setOpen(false)}
      />

      <h1 className="hero-heading fw-500 text-white mb-45">
        Trusted &amp; Secure <span>Crypto</span> Checkout Plugin.
      </h1>
      <p className="text-lg text-white opacity-75 mb-65 lg-mb-50 pe-lg-5">
        Already have a website? Try our easy integration with
        industry-leading request times.
      </p>

      <div className="d-sm-flex align-items-center">
        {/* End popup video */}

        <Link
          href="#home-contact-form"
          className="btn-sixteen fw-500 tran3s mb-25 me-4 order-sm-first"
        >
          Get in Touch
        </Link>
      </div>
      <h2 className="fw-500 text-white mt-60 lg-mt-30 mb-5">A+ Rating</h2>
      <p className="fs-20 opacity-50 text-white">
        Avg rating 4.8 makes us world most best apps.
      </p>
    </>
  );
};

export default Hero;
