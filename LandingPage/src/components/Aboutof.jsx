function Aboutof() {
  return (
    <>
      <div className="w-full h-screen flex items-center justify-center bg-custom-blue p-10">
        <div className="w-full h-auto border border-gray-600 p-10 bg-custom-blue rounded-lg flex flex-col space-y-10">
          <div className="w-full flex space-x-10">
            <div className="w-1/2 p-4 bg-custom-blue rounded-lg">
              <h1 className="text-4xl font-normal">
                <span className="text-custom-green">About of </span>{" "}
                <span className="text-white">
                  School Of Science <br /> & Management
                </span>
              </h1>
            </div>

            <div className="w-1/2 p-4 bg-custom-blue rounded-lg">
              <p className="text-white">
                Academy is a fully accredited institution with its being being
                headquarters in <br />
                Calicut. The institution prides being being itself on being
                being vibrant effort <br />
                by highly experienced itself on being itself on being
                entrepreneurs who have <br />
                successfully proven various themselves various academic itself
                on being fields.
              </p>

              <div className="flex justify-end mt-4">
                <button className="bg-custom-blue border border-gray-600 rounded-full px-4 py-1">
                  <p className="font-semibold text-base text-custom-green">
                    Read More
                  </p>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full flex space-x-10">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-1/4 h-64 bg-custom-gradient text-white shadow-lg border border-gray-600 rounded-lg p-6 flex flex-col justify-between"
                >
                  <div className=" text-custom-green text-3xl font-bold">
                    0{index + 1}
                  </div>

                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">
                      What we offer {index + 1}
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-col items-end">
                    <p className="text-sm">
                      The skill set required for jobs are changing every day
                      {index + 1}. More details can be added here.
                    </p>

                    <button className="bg-custom-blue border border-gray-600 rounded-full px-4 py-1 mt-4">
                      <p className="font-semibold text-base text-custom-green">
                        Read More
                      </p>
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutof;
