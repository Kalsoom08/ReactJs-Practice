import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Post = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=tesla&from=2025-03-04&sortBy=publishedAt&apiKey=691bc8140a0542aab1ced98fb52ee97b'
      )
      .then((response) => {
        setData(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="font-bold mb-6 text-center">
        <TypeAnimation
          sequence={[
            'Latest Blogs',
            1000,
            '',
            500, // Erase before typing next text
            'Latest Posts',
            1000,
            '',
            500,
            'Latest News',
            1000,
            '',
            500,
          ]}
          speed={20}
          style={{ fontSize: '2.5em' }}
          repeat={Infinity}
          cursor={true}
        />
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <Oval height="80" width="80" color="green" ariaLabel="loading" />
        </div>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((post, index) => (
            <motion.div
              key={post.url}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: false }}
              className="group bg-white shadow-lg rounded-lg overflow-hidden p-4 hover:shadow-2xl transition-shadow duration-100"
            >
              {post.urlToImage && (
                <div className="relative w-full h-48">
                  <img
                    src={post.urlToImage}
                    alt={post.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-[#1818177a] rounded-md group-hover:bg-transparent transition-all duration-100"></div>
                </div>
              )}
              <div className="mt-4">
                <h2 className="text-xl font-semibold transition-colors duration-100 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  By {post.author || 'Unknown'}
                </p>
                <p className="text-gray-700 mt-2 line-clamp-2">{post.content}</p>
                <Link
                  to={`/details/${index}`}
                  className="inline-block mt-4 text-green-900 hover:underline"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Post;
