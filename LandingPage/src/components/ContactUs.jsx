import arrow from "../assets/Arrow.png";

function ContactUs() {
  return (
    <div className="w-full h-auto flex items-center justify-center bg-custom-blue p-5">
      <div className="w-full max-w-6xl h-auto bg-custom-blue p-10 flex flex-col space-y-10">
        <div className="p-6 rounded-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full h-40 bg-custom-blue text-white shadow-lg rounded-lg  flex items-center justify-start">
              <h1 className="text-2xl sm:text-5xl font-normal mb-2">
                <span className="text-custom-green">Lets Get</span> In <br />
                Touch
              </h1>
            </div>

            <div className="w-full h-40 bg-custom-blue text-white shadow-lg rounded-lg p-4 flex items-center justify-center">
              <img src={arrow} alt="Arrow" className="w-1/2 h-auto" />
            </div>

            <div className="w-full h-40 bg-custom-blue text-white shadow-lg rounded-lg p-4 flex items-center">
              <p className="text-sm">
                This is a paragraph in the third card. You can add more details
                here about how to get in touch. You can add more details here
                about how to get in touch.You can add more details here about
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full justify-between gap-6">
          <div className="w-1/2 h-72 bg-custom-blue text-white shadow-lg rounded-lg p-4 flex items-center">
            <div className="w-full">
              <ul className="text-white font-small">
                <p className="text-gray-400">Phone</p>
                <li className="mb-1">
                  <p>9656300567</p>
                </li>
                <li className="mb-4">
                  <p>9037206760</p>
                </li>
                <p className="text-gray-400">Email</p>
                <li className="mb-6">
                  <p>Admissions@co.in</p>
                </li>
                <p className="text-gray-400">Address</p>
                <li className="mb-1">
                  <p>
                    2nd Floor, Central Arcade. <br />
                    Cherooty Road,
                    <br />
                    Calicut-673032
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-1/2 h-56 bg-custom-blue text-white shadow-lg rounded-lg p-4 mt-10 flex items-center">
            <div className="bg-white text-black p-2 rounded-lg shadow-lg w-full">
              <h2 className="text-xl font-bold mb-6">Contact</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border-b p-2 w-full outline-none"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border-b p-2 w-full outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-b p-2 w-full outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border-b p-2 w-full outline-none"
                />
                <select className="border-b p-2 w-full outline-none">
                  <option className="text-gray-400" value="">
                    Course
                  </option>
                  <option className="text-gray-400" value="course1">
                    Course 1
                  </option>
                  <option className="text-gray-400" value="course2">
                    Course 2
                  </option>
                </select>
                <button
                  type="submit"
                  className="w-full bg-custom-green text-black py-3 rounded-md hover:bg-emerald-500 transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
