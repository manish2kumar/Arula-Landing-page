import React from "react";
import founderImg from "../assets/founder.png";

export default function About() {
  return (
    <section id="about">
      {/* The ARULA Approach Section */}
      <div className="bg-[#EAF3FB] py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2F84] mb-4">
            The ARULA Approach
          </h2>
          <p className="text-lg md:text-xl font-semibold text-gray-700 mb-10">
            Empowering Mothers to Be Their Child’s Best Therapist
          </p>

          <div className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto space-y-5">
            <p>
              ARULA for Autism is revolutionizing autism therapy with a compassionate,
              personalized, and fully online approach. Founded by{" "}
              <span className="font-semibold">Mrs. Mayuri Ramdasi</span>, a globally
              renowned speech and language therapist with over 23 years of experience,
              ARULA transforms homes into therapy centers and mothers into expert
              therapists.
            </p>
            <p>
              At ARULA, we believe that mothers can be their child’s best therapist.
              Our programs blend scientific expertise, emotional understanding, and
              spiritual insight to create an empowering and holistic therapy experience.
              Through tailored guidance, we help families achieve meaningful milestones
              and build lifelong skills for children with autism.
            </p>
          </div>
        </div>
      </div>

      {/* Founder Section */}
      <div className="bg-[#FFFBEA] py-20 px-6 md:px-12 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="flex-1 flex justify-center md:justify-end md:-ml-10">
            <img
              src={founderImg}
              alt="Founder Mayuri Ramdasi"
              className="rounded-2xl shadow-lg w-[90%] md:w-[115%] max-w-xl object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="flex-1 text-left md:pl-6">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-1">
              Founder & Lead Therapist
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3E2F84] mb-6">
              Mayuri Ramdasi
            </h2>

            <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
              <p>
                Mayuri Ramdasi, a speech and language therapist with 23 years of
                professional experience, founded ARULA based on her expertise and
                personal journey as a mother to a daughter with autism. Her approach
                integrates science, emotional intelligence, and spirituality — helping
                countless families across the globe find hope and progress.
              </p>
              <p>
                A trusted global expert, Mayuri has dedicated her life to transforming
                autism therapy by empowering parents and bringing compassion and
                understanding into every home.
              </p>
            </div>

            <a
              href="#"
              className="inline-block mt-6 text-[#3E2F84] font-semibold hover:text-pink-500 transition-colors"
            >
              Know More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
