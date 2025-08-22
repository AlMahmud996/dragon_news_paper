import React from 'react';
import { FaStar, FaEye, FaShareAlt,FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router';


const NewsCard = ({ news }) => {
    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
    } = news;

    const formattedDate = new Date(author.published_date).toLocaleDateString(
        "en-US",
        {
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );

    return (
        <div className="card w-full bg-base-100 shadow-xl my-5 rounded-lg overflow-hidden">
            {/* Author Section */}
            <div className="flex justify-between items-center px-4 pt-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold">{author.name}</h2>
                        <p className="text-sm text-gray-500">{formattedDate}</p>
                    </div>
                </div>
                <button className="btn btn-ghost btn-sm">
                <FaRegBookmark className="text-gray-600" />
                    <FaShareAlt className="text-gray-600" />
                </button>
            </div>

            {/* Title */}
            <div className="px-4 pt-2">
                <h1 className="text-lg font-bold leading-snug">{title}</h1>
            </div>

            {/* Thumbnail */}
            <figure className="px-4 pt-3">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-md w-full max-h-56 object-cover"
                />
            </figure>

            {/* Details */}
            <div className="px-4 pt-3">
                <p className="text-gray-700 text-sm">
                    {details.slice(0, 180)}...
                    <Link to={`/news-details/${id}`} className="text-primary cursor-pointer"> Read More</Link>
                </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 py-3 border-t mt-3">
                <div className="flex items-center gap-1 text-orange-500">
                    <FaStar />
                    <span className="font-semibold">{rating.number}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span>{total_view}</span>
                </div>
            </div>
        </div>
    );
}

export default NewsCard;