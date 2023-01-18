/* eslint-disable jsx-a11y/anchor-has-content */
import Profile from "./assets/profile.png";
import github from "./assets/github.png";
import In from "./assets/in.png";
import Wa from "./assets/wa.png";
import Tiktok from "./assets/tiktok.png";
import Ig from "./assets/ig.png";
import Web from "./assets/Web.png";
import "animate.css";

function App() {
  return (
    <>
      <div className="container myBG">
        <div className="h-screen flex flex-col items-center">
          <div className="flex flex-col mt-10 items-center gap-2">
            <img src={Profile} alt="profile" width={100} />
            <h2 className="text-xl text-slate-50">Lorem Ipsum</h2>
          </div>
          <div className="grid grid-cols-1 mt-5 gap-6 md:gap-8">
            <a
              href="https://dimstry.me/"
              className="w-80 h-10 bg-slate-50 rounded-lg animate__animated animate__fadeInLeft"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="px-5 h-full flex items-center">
                <img src={Web} alt="web" className="w-7" />
                <span className="mx-auto">Website</span>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dimastry/"
              className="w-80 h-10 bg-slate-50 rounded-lg animate__animated animate__fadeInLeft animate__delay-2s"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="px-5 h-full flex items-center">
                <img src={In} alt="web" className="w-7" />
                <span className="mx-auto">Linkdin</span>
              </div>
            </a>
            <a
              href="https://dimstry.me/"
              className="w-80 h-10 bg-slate-50 rounded-lg animate__animated animate__fadeInLeft animate__delay-3s"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="px-5 h-full flex items-center">
                <img src={Ig} alt="web" className="w-7" />
                <span className="mx-auto">Instagram</span>
              </div>
            </a>
            <a
              href="https://dimstry.me/"
              className="w-80 h-10 bg-slate-50 rounded-lg animate__animated animate__fadeInLeft animate__delay-4s"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="px-5 h-full flex items-center">
                <img src={Wa} alt="web" className="w-7" />
                <span className="mx-auto">Whatsapp</span>
              </div>
            </a>
            <a
              href="https://dimstry.me/"
              className="w-80 h-10 bg-slate-50 rounded-lg animate__animated animate__fadeInLeft animate__delay-5s"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="px-5 h-full flex items-center">
                <img src={github} alt="web" className="w-7" />
                <span className="mx-auto">Github</span>
              </div>
            </a>
            <a
              href="https://dimstry.me/"
              className="w-80 h-10 bg-slate-50 rounded-lg animate__animated animate__fadeInLeft animate__delay-5s"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="px-5 h-full flex items-center">
                <img src={Tiktok} alt="web" className="w-7" />
                <span className="mx-auto">Tiktok</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
