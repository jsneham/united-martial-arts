import { BannerImages } from "@/components/layout/BannerImages";

const Home = () => {
  return (
    <div className="w-full">

      {/* HERO TEXT */}
      <section className="text-center mb-10">
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

    </div>
  );
};

export default Home;
