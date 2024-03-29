import "../../index.css";
import Logo from "../../img/ENGLISH.png";
import Bg from "./wave.svg";

function Contacts() {
  return (
    <div
      className="m-0 bg-black"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionY: "-170px",
      }}
    >
      <div
        className="flex flex-col justify-between
        h-screen m-0
        "
      >
        <div className="  w-screen m-0">
          <h2 className="text-black text-5xl font-bold m-10 ml-[20vw]">
            CONTACT US
          </h2>

          <div
            className="contactDiv flex justify-evenly gap-7 
          "
          >
            <div className="contactNum mt-20 -ml-60">
              <div className=" flex items-center m-5 gap-3 text-cyan-50">
                <div className="bg-cyan-50 p-3 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-black "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <ul>
                  <li className="text-lg">RD Lohith</li>
                  <li className="text-xl">
                    <a href="tel:+91 8861422587">+91 8861422587</a>
                  </li>
                </ul>
              </div>

              <div className=" flex items-center m-5 gap-3 text-cyan-50">
                <div className="bg-cyan-50 p-3 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-black "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <ul>
                  <li className="text-lg">Maheep</li>
                  <li className="text-xl">
                    <a href="tel:+91 8884142903">+91 8884142903</a>
                  </li>
                </ul>
              </div>

              <div className=" flex items-center m-5 gap-3 text-cyan-50">
                <div className="bg-cyan-50 p-3 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-black "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <ul>
                  <li className="text-lg">Kunal Jaiswal</li>
                  <li className="text-xl">
                    <a href="tel:+91 9148748266">+91 9148748266</a>
                  </li>
                </ul>
              </div>

              <div className=" flex items-center m-5 gap-3 text-cyan-50">
                <div className="bg-cyan-50 p-3 rounded-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6 text-black "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>

                <ul>
                  <li className="text-lg">Sai Karthik</li>
                  <li className="text-xl">
                    <a href="tel:+91 8553912102">+91 8553912102</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pl-[15vw]">
              <div className="contactLogo">
                <img
                  src={Logo}
                  className="rounded-full h-80 w-80  translate-y-10 translate-x-20"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
