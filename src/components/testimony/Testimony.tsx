import Image from "next/image";
import TestimonialCard from "./TestimonialCard";
import { UserIcon } from "../Icons";

export default function Testimony() {
  return (
    <section className="mt-16 p-6">
      <h2 className="text-3xl font-bold text-center mb-12">What they said</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:basis-1/3">
          <Image
            src="/social-proof.jpg"
            width={200}
            height={240}
            alt="Social proof image"
            className="rounded-lg hover:shadow-2xl w-full max-h-100 lg:max-h-132 object-cover lg:object-fill"
            priority={true}
          />
        </div>
        <div className="lg:basis-2/3">
          <div className="grid grid-rows-1 gap-8 max-w-4xl mx-auto">
            <TestimonialCard
              image={<UserIcon className="size-20 text-sky-900" />}
              name="Sarah L."
              role="Fitness Enthusiast"
              quote="this watch changed the way I work out. the data is incredibly accurate and helps me push my limits safely. Plus, it looks stylish"
              color="bg-lime-100"
            />

            <TestimonialCard
              image={<UserIcon className="size-20 text-sky-900" />}
              name="Mike R."
              role="Tech Blogger"
              quote="I've reviewed dozens of smartwatches, and this one stands out. The build quality is premium, the software is snappy, and the battery is a beast."
              color="bg-red-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
