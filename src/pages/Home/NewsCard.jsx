import { IoBookmarkOutline, IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineStarPurple500, MdVisibility } from "react-icons/md";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
  const {
    title,
    _id,
    img,
    author,
    published_date,
    total_view,
    rating,
    details,
    thumbnail_url,
    image_url,
  } = news;
  return (
    <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
      <div className="flex justify-between ">
        <div className="flex space-x-4">
          <img
            alt=""
            src={author.img}
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold"
            >
              {author.name}
            </a>
            <span className="text-xs dark:text-gray-600">
              {author.published_date}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xl">
          <IoBookmarkOutline></IoBookmarkOutline>
          <IoShareSocialOutline></IoShareSocialOutline>
        </div>
      </div>
      <div>
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>

        <img src={image_url} alt="" />

        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}
            <Link to={`/news/${_id}`} className="font-semibold text-orange-500">
              Read More..
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>

      <div className="flex flex-wrap justify-between border-t pt-2">
        <div className="space-x-2 flex items-center">
          <MdOutlineStarPurple500 className="text-xl text-orange-500"></MdOutlineStarPurple500>
          <MdOutlineStarPurple500 className="text-xl text-orange-500"></MdOutlineStarPurple500>
          <MdOutlineStarPurple500 className="text-xl text-orange-500"></MdOutlineStarPurple500>
          <span>{rating.number}</span>
        </div>
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <MdVisibility className="text-xl text-gray-600"></MdVisibility>
            <span>{total_view}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
