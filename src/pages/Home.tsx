import { BannerImages } from "@/components/layout/BannerImages";
import { ContactForm } from "@/components/layout/ContactFormSection";
import { GalleryComponent } from "@/components/layout/GalleryComponent";
import { InstructorsComponent } from "@/components/layout/InstructorsComponent";
import { PricingSection } from "@/components/layout/PricingSection";
import { TestimonialSection } from "@/components/layout/TestimonialSection";
import { TrainingPrograms } from "@/components/layout/TrainingPrograms";

const Home = () => {
  return (
    <div className="w-full">

      {/* HERO TEXT */}
      <section className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          Martial Arts Academy
        </h2>
        <p className="text-gray-400 mt-2">
          Strength. Discipline. Community.
        </p>
      </section>

      {/* ✅ CAROUSEL aligned with orange logo */}
      <section className="max-w-7xl mx-auto">
        <BannerImages />
      </section>

      <section>
        <TrainingPrograms/>
      </section>

        <InstructorsComponent/>
        <GalleryComponent/>
        <TestimonialSection/>
        <PricingSection/>
        <ContactForm/>

    </div>
  );
};

export default Home;
