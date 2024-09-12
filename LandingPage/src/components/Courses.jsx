function Courses() {
  return (
    <div className="w-full h-auto flex items-center justify-center bg-custom-blue p-5">
      <div className="w-full  h-auto bg-custom-blue p-10 flex flex-col space-y-10">
        <div className="  flex flex-col items-center text-center">
          <button className="bg-custom-green text-white border border-custom-green rounded-full px-6 py-2 mb-4">
            Courses
          </button>
          <h1 className="md:text-6xl text-xl font- mb-4 text-white">
            <span className="text-emerald-400">Courses </span> Available
          </h1>
          <p className="text-white">
            Each course is designed to give you the best learning experience
            possible. Explore the various courses we offer below. <br />
            Each course is designed learning experience possible.
          </p>
        </div>

        <div className=" bg-custom-gradient1 border-2 border-gray-500 p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full h-64 bg-custom-blue text-white shadow-lg border-gray-500 border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">
                Full Stack Developer and certification courses
              </h3>
              <p className="text-sm mb-4">
                This is a detailed description for card 1. It provides an
                overview of the course content. It provides an overview of the
                course content. It provides an overview of the course content.
                It provides an overview of the course content. It provides an
                overview of the course content It provides an overview of the
                course content It provides{" "}
              </p>
              <div className="flex justify-end">
                <button className="bg-custom-blue text-custom-green border border-gray-500 rounded-full px-4 py-0.8">
                  Read More
                </button>
              </div>
            </div>

            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className=" w-full h-64 bg-custom-blue text-white shadow-lg border-gray-500 border rounded-lg p-4"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    Bachelor of Commerce(Bcom) {index + 2}
                  </h3>
                  <p className="text-sm mb-4">
                    This is a detailed description for card 1. It provides an
                    overview of the course content. It provides an overview of
                    the course content. It provides an overview of the course
                    content. It provides an overview of the course content. It
                    provides an overview of the course content It provides an
                    overview of the course content It provides {index + 2}. It
                    provides an overview of the course content.
                  </p>
                  <div className="flex justify-end">
                    <button className="bg-custom-blue text-custom-green border border-gray-500 rounded-full px-4 py-08">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
