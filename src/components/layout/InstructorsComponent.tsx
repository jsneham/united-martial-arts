import { InstructorDetails } from "@/constant";

export const InstructorsComponent = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-16 max-w-7xl mx-auto text-white gap-10">
      {/* LEFT SECTION — Text */}
      <div className="md:w-1/2 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4 text-center md:text-left">
          Meet Our Instructor
        </h2>
        <p className="text-sm text-gray-400 leading-relaxed text-center md:text-left whitespace-pre-line">
          {InstructorDetails}
        </p>
      </div>

      {/* RIGHT SECTION — Instructor Image (slightly smaller) */}
      <div className="md:w-1/2 flex justify-center md:justify-end items-center">
        <div className="w-[80%] max-w-[350px] rounded-lg overflow-hidden border border-neutral-700 shadow-lg">
          <img
            src="/images/instructor.jpg"
            alt="Martial Arts Instructor"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};
