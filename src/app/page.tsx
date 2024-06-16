import Navbar from "@/components/Navbar/navbar";
import TopHeader from "@/components/TopHeader/topheader";
import Homeinfo from "@/components/Home/home";
import AboutUs from "@/components/AboutUs/aboutus";
import OurServices from "@/components/OurServices/ourservices";
import OlveraGuides from "@/components/OlveraGuides/olveraguides";
import Careers from "@/components/Careers/careers";
import VideoPlay from "@/components/VideoPlay/videoplay";
import ClientReview from "@/components/ClientReview/clientreview";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <TopHeader />
      <Navbar/>
      <Homeinfo/>
      <AboutUs/>
      <OurServices/>
      <OlveraGuides/>
      <Careers/>
      <VideoPlay/>
      <ClientReview/>
      <Footer/>
    </div>
  );
}
