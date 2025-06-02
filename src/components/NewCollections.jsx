
export default function NewCollections() {

  return (
    <section className="bg-freepage bg-cover bg-center bg-no-repeat xl:w-[88%]" >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-ash-200 max_padd_container py-12 xl:py-28">
        <div className="flex flex-col justify-start">
          <span className="inline-flex items-center px-5 py-[6px] font-semibold text-center text-white bg-white-200 rounded-2xl text-[13px] uppercase mb-10 w-fit ">
            Why choose us
          </span>  
          <h1 className="text-4xl font-normal leading-tight text-white max-w-xs">
            Your solar panels in just 4 steps
          </h1>
          <button
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 w-fit text-sm font-normal text-gray-900 hover:shadow-md focus:outline-none"
            type="button"
          >
            Start today
            <i className="bx bx-lg bx-arrow-right text-green-600"></i>
          </button>
        </div>
        <div className="flex flex-col justify-start space-y-8 text-white max-w-xl">
          <div>
            <h2 className="text-xl font-normal text-white mb-1">
              <span className="inline-block w-8 font-mono font-semibold ">01.</span> We visit your place
            </h2>
            <p className="text-sm text-white leading-relaxed">
              Lorem ipsum dolor sit amet consectetur at lacus erat lacus magna ligula porta nulla volutpat posuere in sed ultrices.
            </p>
            <hr className="mt-6 border-gray-300" />
          </div>
          <div>
            <h2 className="text-xl font-normal text-white mb-1">
              <span className="inline-block w-8 font-mono font-semibold">02.</span> We give you a quote
            </h2>
            <p className="text-sm leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur at lacus erat lacus magna ligula porta nulla volutpat posuere in sed ultrices.
            </p>
            <hr className="mt-6 border-gray-300" />
          </div>
          <div>
            <h2 className="text-xl font-normal text-white mb-1">
              <span className="inline-block w-8 font-mono font-semibold">03.</span> Start the installation
            </h2>
            <p className="text-sm leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur at lacus erat lacus magna ligula porta nulla volutpat posuere in sed ultrices.
            </p>
            <hr className="mt-6 border-gray-300" />
          </div>
          <div>
            <h2 className="text-xl font-normal text-white mb-1">
              <span className="inline-block w-8 font-mono font-semibold">04.</span> Start saving in less than 30 days
            </h2>
            <p className="text-sm leading-relaxed text-white">
              Lorem ipsum dolor sit amet consectetur at lacus erat lacus magna ligula porta nulla volutpat posuere in sed ultrices.
            </p>
            <hr className="mt-6 border-gray-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
