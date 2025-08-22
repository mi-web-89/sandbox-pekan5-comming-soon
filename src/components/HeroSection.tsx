import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="pt-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* section left */}
          <div className="flex flex-col text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              The Future on Your Wrist
            </h1>

            <p className="mt-6 max-w-30vh text-lg text-center lg:text-left leading-8 text-gray-400">
              Experience seamless connectivity and track your health like never
              before. Elegance meets technology.
            </p>

            <div className="lg:mt-4 flex justify-center items-center">
              <button className="mt-8 bg-sky-500 text-xl md:text-lg text-white px-8 py-3 rounded-full font-semibold hover:bg-sky-700 transition-colors cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>

          {/* section right */}
          <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
            <Image
              src="/smartwatch.jpg"
              alt="Smartwatch product image"
              width={600}
              height={600}
              className="rounded-lg hover:shadow-2xl w-auto h-auto"
              priority={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
