export default function WhyChooseUs() {
  return (
    <section className="bg-freepage bg-cover bg-center bg-no-repeat xl:w-[88%]">
      <div className="px-4 py-12 bg-ash-200">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side: Heading & Button */}
          <div className="flex flex-col justify-start">
            <span className="inline-flex items-center px-5 py-[6px] font-semibold text-center text-white bg-white-200 rounded-2xl text-[13px] uppercase mb-10 w-fit">
              Why choose us
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white max-w-sm">
              Empowering your energy journey with smart IoT solutions
            </h1>
            <p className="mt-4 text-sm text-white max-w-md">
              At Bee Energy Hive, we harness the power of solar and the latest IoT technologies to deliver reliable, cost-effective, and future-ready energy solutions.
            </p>
            <button
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 w-fit text-sm font-medium text-gray-900 hover:shadow-md focus:outline-none"
              type="button"
            >
              Get Started
              <i className="bx bx-lg bx-arrow-right text-green-600"></i>
            </button>
          </div>

          {/* Right side: Steps */}
          <div className="flex flex-col justify-start space-y-8 text-white max-w-xl">
            {/* Step 1 */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">
                <span className="inline-block w-8 font-mono font-bold">01.</span> Site Assessment & IoT Consultation
              </h2>
              <p className="text-sm leading-relaxed text-white">
                Our team evaluates your energy needs and integrates IoT technology to optimize energy usage and system performance.
              </p>
              <hr className="mt-6 border-gray-300" />
            </div>

            {/* Step 2 */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">
                <span className="inline-block w-8 font-mono font-bold">02.</span> Transparent Quotation
              </h2>
              <p className="text-sm leading-relaxed text-white">
                Receive a detailed, customized quote that aligns with your needs and budget—no hidden fees, just clear insights.
              </p>
              <hr className="mt-6 border-gray-300" />
            </div>

            {/* Step 3 */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">
                <span className="inline-block w-8 font-mono font-bold">03.</span> Fast & Efficient Installation
              </h2>
              <p className="text-sm leading-relaxed text-white">
                Our certified technicians install your solar panels with integrated IoT sensors for real-time energy tracking and performance monitoring.
              </p>
              <hr className="mt-6 border-gray-300" />
            </div>

            {/* Step 4 */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-1">
                <span className="inline-block w-8 font-mono font-bold">04.</span> Start Saving & Stay Connected
              </h2>
              <p className="text-sm leading-relaxed text-white">
                Enjoy reduced energy bills and monitor your system performance 24/7 through our smart IoT dashboard—start saving in less than 30 days!
              </p>
              <hr className="mt-6 border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
