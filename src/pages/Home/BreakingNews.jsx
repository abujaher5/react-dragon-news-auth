import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="flex items-center bg-[#F3F3F3] p-2">
      <button className="px-3 py-1 rounded-sm bg-[#D72050] text-white ">
        Latest
      </button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link to="/"> Match Highlights:</Link>
        <Link to="/"> Germany vs Spain as...</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
