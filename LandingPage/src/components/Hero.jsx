import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import jj from "../assets/jj.png";
import books from "../assets/books.png";
import plant from "../assets/plant.png";
import table from "../assets/table.png";
import greenbackground from "../assets/greenbackground.png";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${greenbackground})` }}
    >
      <Navbar />

      <section className="flex w-full h-full">
        <div className="flex-3/4 flex flex-col px-6 lg:px-10 space-y-20">
          <div className="space-y-4 mt-20 w-full">
            <p className="text-lg font-medium text-white text-left">
              Professional Certification & Degree Programs
            </p>
            <h1 className="text-5xl lg:text-5xl font-normal mb-6 lg:pl-0">
              <span className="text-white">Accelerate your</span>{" "}
              <span className="text-custom-green">
                Career <br /> Growth
              </span>
              <span className="text-white"> & Upskill Yourself</span>
            </h1>
            <div className="flex items-center bg-custom-gray rounded-full px-2 py-1 w-2/3 max-w-sm text-gray-100 border border-gray-500 sm:mx-0 mx-auto lg:ml-0">
              <input
                type="email"
                placeholder="Enter your Email"
                className="bg-transparent text-white outline-none w-full placeholder-gray-200"
              />
              <button className="bg-custom-green text-black font-semibold px-8 py-2 rounded-full hover:bg-custom-green transition duration-300">
                Send
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-10 ">
            <svg
              width="150"
              height="150"
              viewBox="0 0 211 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 196.5V16C0 7.71573 6.71572 1 15 1H136.5C144.784 1 151.5 7.71573 151.5 16V37C151.5 45.2843 158.216 52 166.5 52H195.5C203.784 52 210.5 58.7157 210.5 67V196.5C210.5 204.784 203.784 211.5 195.5 211.5H15C6.71573 211.5 0 204.784 0 196.5Z"
                fill="#01F19B"
                fillOpacity="0.14"
                stroke="url(#paint0_linear_630_198)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_630_198"
                  x1="105"
                  y1="-37"
                  x2="89.5"
                  y2="252.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#01F19B" />
                  <stop offset="0.491688" stopColor="white" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <image href={image3} x="20" y="20" width="180" height="120" />
              <text
                x="50%"
                y="100"
                fontSize="25"
                fontFamily="PP Telegraf"
                fontWeight="400"
                textAnchor="middle"
                fill="white"
              >
                <tspan x="50%" dy="1.8em">
                  4.8/5
                </tspan>
                <tspan x="50%" dy="1.2em">
                  rating
                </tspan>
              </text>
            </svg>

            <svg
              width="150"
              height="150"
              viewBox="0 0 211 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 196.5V16C0 7.71573 6.71572 1 15 1H136.5C144.784 1 151.5 7.71573 151.5 16V37C151.5 45.2843 158.216 52 166.5 52H195.5C203.784 52 210.5 58.7157 210.5 67V196.5C210.5 204.784 203.784 211.5 195.5 211.5H15C6.71573 211.5 0 204.784 0 196.5Z"
                fill="#01F19B"
                fillOpacity="0.14"
                stroke="url(#paint0_linear_630_198)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_630_198"
                  x1="105"
                  y1="-37"
                  x2="89.5"
                  y2="252.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#01F19B" />
                  <stop offset="0.491688" stopColor="white" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <image href={image1} x="45" y="25" width="60" height="60" />
              <text
                x="50%"
                y="100"
                fontSize="25"
                fontFamily="PP Telegraf"
                fontWeight="400"
                textAnchor="middle"
                fill="white"
              >
                <tspan x="50%" dy="1.2em">
                  1000
                </tspan>
                <tspan x="50%" dy="1.2em">
                  career
                </tspan>
                <tspan x="50%" dy="1.2em">
                  transaction
                </tspan>
              </text>
            </svg>
            <svg
              width="150"
              height="150"
              viewBox="0 0 211 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 196.5V16C0 7.71573 6.71572 1 15 1H136.5C144.784 1 151.5 7.71573 151.5 16V37C151.5 45.2843 158.216 52 166.5 52H195.5C203.784 52 210.5 58.7157 210.5 67V196.5C210.5 204.784 203.784 211.5 195.5 211.5H15C6.71573 211.5 0 204.784 0 196.5Z"
                fill="#01F19B"
                fillOpacity="0.14"
                stroke="url(#paint0_linear_630_198)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_630_198"
                  x1="105"
                  y1="-37"
                  x2="89.5"
                  y2="252.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#01F19B" />
                  <stop offset="0.491688" stopColor="white" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <image href={image2} x="45" y="25" width="60" height="60" />
              <text
                x="50%"
                y="100"
                fontSize="25"
                fontFamily="PP Telegraf"
                fontWeight="400"
                textAnchor="middle"
                fill="white"
              >
                <tspan x="50%" dy="1.2em">
                  Gamified
                </tspan>
                <tspan x="50%" dy="1.2em">
                  Learning
                </tspan>
                <tspan x="50%" dy="1.2em">
                  Support
                </tspan>
              </text>
            </svg>
            <svg
              width="150"
              height="150"
              viewBox="0 0 211 212"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 196.5V16C0 7.71573 6.71572 1 15 1H136.5C144.784 1 151.5 7.71573 151.5 16V37C151.5 45.2843 158.216 52 166.5 52H195.5C203.784 52 210.5 58.7157 210.5 67V196.5C210.5 204.784 203.784 211.5 195.5 211.5H15C6.71573 211.5 0 204.784 0 196.5Z"
                fill="#01F19B"
                fillOpacity="0.14"
                stroke="url(#paint0_linear_630_198)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_630_198"
                  x1="105"
                  y1="-37"
                  x2="89.5"
                  y2="252.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#01F19B" />
                  <stop offset="0.491688" stopColor="white" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <image href={image4} x="45" y="25" width="60" height="60" />
              <text
                x="50%"
                y="100"
                fontSize="25"
                fontFamily="PP Telegraf"
                fontWeight="400"
                textAnchor="middle"
                fill="white"
              >
                <tspan x="50%" dy="1.2em">
                  1000
                </tspan>
                <tspan x="50%" dy="1.2em">
                  career
                </tspan>
                <tspan x="50%" dy="1.2em">
                  transaction
                </tspan>
              </text>
            </svg>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center relative px-6 lg:px-10 ">
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <img
              src={jj}
              width="320"
              height="360"
              alt="lady"
              className="absolute top-[12%] right-[10%] w-auto h-auto"
            />
            <img
              src={table}
              alt="table"
              className="absolute top-[50%] right-[36%] w-auto h-auto"
            />
            <img
              src={books}
              alt="books"
              className="absolute top-[40%] right-[32%] w-auto h-auto"
            />
            <img
              src={plant}
              alt="plant"
              className="absolute top-[30%] right-[85%] w-auto h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
