import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-xl font-semibold">Login With</h2>
        <button className="btn g w-full">
          <FaGoogle></FaGoogle>
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>
          Login With Github
        </button>
      </div>

      <div className="p-4 mb-6">
        <h2 className="text-xl font-semibold">Find Us On</h2>
        <a className="flex gap-2 items-center p-4 text-lg border rounded-t-lg cursor-pointer">
          <FaFacebook></FaFacebook>
          Facebook
        </a>
        <a className="flex gap-2 items-center p-4 text-lg border-x cursor-pointer">
          <FaTwitter></FaTwitter>
          Twitter
        </a>
        <a className="flex gap-2 items-center p-4 text-lg border rounded-b-lg cursor-pointer">
          <FaInstagram></FaInstagram>
          Instagram
        </a>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-xl font-semibold">Q Zone</h2>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
