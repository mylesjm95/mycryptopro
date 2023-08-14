import Link from "next/link";
import Seo from "../../components/common/Seo";
import Header from "../../components/home-page/home-8/Header";
import Hero from "../../components/home-page/home-8/Hero";
import ShapeGroup from "../../components/home-page/home-8/ShapeGroup";
import Block1 from "../../components/home-page/home-8/Block1";
import Block2 from "../../components/home-page/home-8/Block2";
import BlockFeatureList from "../../components/home-page/home-8/BlockFeatureList";
import Block3 from "../../components/home-page/home-8/Block3";
import WhyChooseList from "../../components/home-page/home-8/WhyChooseList";
import Coutner from "../../components/home-page/home-8/Coutner";
import Testimonial from "../../components/home-page/home-8/Testimonial";
import Faq from "../../components/home-page/home-8/Faq";
import Blog from "../../components/home-page/home-8/Blog";
import CallToAction from "../../components/home-page/home-8/CallToAction";
import CopyrightFooter2 from "../../components/footer/CopyrightFooter2";
import Footer from "../../components/home-page/home-8/Footer";
import Image from "next/image";
import ContactForm from "../../components/contact/ContactForm";

const crypto = () => {
  return (
    <div className="dark-bg-one">
      <ShapeGroup />

      <Seo pageTitle="Crypto" />

      {/* <!-- 
        =============================================
        Theme Default Menu
        ============================================== 	
        --> */}
      <Header />

      {/* 
        =============================================
        Theme Hero Banner
        ============================================== 
        */}
      <div
        className="hero-banner-eight position-relative pt-225 md-pt-150"
        data-aos="fade-right"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <Hero />
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="illustration-holder" data-aos="fade-right">
          <Image
            width={697}
            height={664}
            layout="intrinsic"
            src="/images/assets/ils_08.png"
            alt="illustration"
            className="main-illustration lazy-img"
          />
          <div className="shapes shape-one rounded-circle" />
        </div>
        {/* /.illustration-holder */}
        <img
          src="/images/shape/shape_100.svg"
          alt="shape"
          className="lazy-img shapes line-shape"
        />
      </div>

      {/* 
        =============================================
        Feature Section Twenty Six
        ============================================== 
        */}
      <div className="fancy-feature-twentySix position-relative zn2 pt-150 lg-pt-80">

        <div className="container">
          {/* /.title-style-nine */}

          <div className="row gx-xxl-5">
            <Block2 />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>

      {/* 
        =============================================
        Feature Section Twenty Seven
        ============================================== 
        */}
      <div className="fancy-feature-twentySeven position-relative zn2 mt-250 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 ms-auto order-lg-last">
              <BlockFeatureList />
              {/* /.block-style-three */}
            </div>
            <div
              className="col-lg-6 col-md-8 m-auto order-lg-first"
              data-aos="fade-right"
            >
              <div className="illustration-holder md-mt-50 pe-xxl-1 pe-xl-5 pe-lg-4">
                <Image
                  width={569}
                  height={559}
                  layout="intrinsic"
                  src="/images/assets/ils_09.png"
                  alt="illustration"
                  className="lazy-img main-img m-auto"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
        {/* /.container */}

        <div className="container">
          <div className="wrapper mt-130 lg-mt-100" data-aos="fade-up">
            <div className="row">
              <Block3 />
            </div>
          </div>
          {/* /.wrapper */}
        </div>
        <div className="r-shape-one shapes" />
      </div>

      {/* 
        =============================================
        Feature Section Twenty Eight
        ============================================== 
        */}
      <div className="fancy-feature-twentyEight position-relative zn2 mt-225 lg-mt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <WhyChooseList />
              {/* /.block-style-five */}
            </div>
            <div className="col-lg-6 col-md-8 m-auto" data-aos="fade-left">
              <div className="illustration-holder md-mt-50 position-relative">
                <img
                  src="/images/shape/shape_106.svg"
                  alt="shape"
                  className="lazy-img main-img"
                />
                <Image
                  width={766}
                  height={766}
                  layout="intrinsic"
                  src="/images/assets/ils_10.png"
                  alt="shape"
                  className="lazy-img illustration-img"
                />
              </div>
              {/* /.illustration-holder */}
            </div>
          </div>
        </div>
        {/* /.container */}
        {/* /.wrapper */}
      </div>

      {/*
        =====================================================
        Feedback Section Seven
        =====================================================
        */}

      {/*
			=====================================================
				Fancy Short Banner Eleven
			=====================================================
			*/}
      <div className="fancy-short-banner-eleven position-relative zn2 pt-130 pb-170 lg-pb-130">
        <div className="container">
          <div className="row">
            <CallToAction />
          </div>
        </div>
        <div className="container" id="home-contact-form">
          <ContactForm />
          {/* /.form-style-one */}
        </div>
        <div className="shapes shape-one rounded-circle" />
        <div className="shapes shape-two rounded-circle" />
      </div>

      {/*
			=====================================================
				Footer
			=====================================================
			*/}
      <div className="footer-style-eight theme-basic-footer">
        {/* /.top-footer */}
        <CopyrightFooter2 />
        {/* /.bottom-footer */}
      </div>
    </div>
    // main-page-wrapper
  );
};

export default crypto;
