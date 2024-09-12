import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="bg-custom-blue dark:bg-black flex flex-col pt-10">
      <div className=" bg-custom-gradient2 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 border p-30 mb-10 border-gray-600 rounded-lg">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-wrap justify-between w-full mb-6 md:mb-0">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 mt-10">
              <ul className="text-white dark:text-gray-600 font-small">
                <li className="mb-1">
                  <p>9656300567</p>
                </li>
                <li className="mb-6">
                  <p>9037206760</p>
                </li>
                <li className="mb-12">
                  <p>Admissions@co.in</p>
                </li>
                <li className="mb-1">
                  <p>
                    2nd Floor, Central Arcade. <br />
                    Cherooty Road,
                    <br />
                    Calicut - 673032
                  </p>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="mb-6 text-md font-semibold text-custom-green dark:text-white">
                Explore
              </h2>
              <ul className="text-white dark:text-gray-600 font-small">
                <li className="mb-1">
                  <p>Home</p>
                </li>
                <li className="mb-1">
                  <p>About Us</p>
                </li>
                <li className="mb-1">
                  <p>Courses</p>
                </li>
                <li className="mb-1">
                  <p>Gallery</p>
                </li>
                <li className="mb-1">
                  <p>Contact us</p>
                </li>
                <li className="mb-1">
                  <p>Privacy Policy</p>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3">
              <h2 className="mb-6 text-md font-semibold text-custom-green dark:text-white">
                Courses
              </h2>
              <ul className="text-white dark:text-gray-600 font-small">
                <li className="mb-1">
                  <p>Full Stack Developer and Certification courses</p>
                </li>
                <li className="mb-1">
                  <p>Bachelor of Commerce (Bcom)</p>
                </li>
                <li className="mb-1">
                  <p>BBA Computer Application</p>
                </li>
                <li className="mb-1">
                  <p>BSc Computer Science - AI and Data Science </p>
                </li>
                <li className="mb-1">
                  <p>BBA Aviation Management</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-4 pb-4">
          <div className="flex space-x-5">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-custom-green rounded-lg text-black hover:bg-green-700 transition-colors"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-custom-green rounded-lg text-black hover:bg-green-700 transition-colors"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center bg-custom-green rounded-lg text-black hover:bg-green-700 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
