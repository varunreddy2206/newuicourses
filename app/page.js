import CertificateSection from "./components/CertificateSection";
import ContactSection from "./components/ContactSection";
import ExploreCourses from "./components/ExploreCourses";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Placement from "./components/Placement";
import PopularCourses from "./components/PopularCourses";
import Programs from "./components/Programs";
import Recomemeded from "./components/Recomemded";
import Scholarship from "./components/Scholarship";
import Testimonials from "./components/Testimonials";
import WhyTrustUs from "./components/WhyTrustUs";
import Workshop from "./components/Workshop";

export default function Home() {
  return (
    <div className="space-y-[3px]">
      <HeroSection />
      <Placement />
      <Workshop />
      <ExploreCourses />
      <PopularCourses />
      <WhyTrustUs />
      <Scholarship />
      <CertificateSection />
      <ContactSection />
      <Programs />
      <Recomemeded />
      <Testimonials />
      <Footer />
    </div>
  );
}
