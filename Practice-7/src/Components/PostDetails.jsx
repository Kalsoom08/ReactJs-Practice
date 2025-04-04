import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';


const PostDetails = () => {
  const { id } = useParams();  
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://newsapi.org/v2/everything?q=tesla&from=2025-03-04&sortBy=publishedAt&apiKey=691bc8140a0542aab1ced98fb52ee97b'
      )
      .then((response) => {
        setData(response.data.articles);
        console.log(response.data.articles);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const postDetails = data[Number(id)];  

  if (!postDetails) return <div className="text-center text-gray-600">
      <div className="flex justify-center items-center h-64">
              <Oval height="80" width="80" color="green" ariaLabel="loading" />
      </div>
  </div>; 

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 ">
      <div>
      {postDetails.urlToImage && (
        <img 
          src={postDetails.urlToImage} 
          alt={postDetails.title} 
          className="w-full h-full object-cover rounded-md mb-4"
        />
      )}
      </div>
      
      <div>
      <h2 className="text-3xl font-bold mb-4">{postDetails.title}</h2>
      <p className="text-gray-600 text-sm mb-2">By {postDetails.author || 'Unknown'} - {new Date(postDetails.publishedAt).toLocaleDateString()}</p>
      <p className="text-gray-700 leading-relaxed mb-4">{postDetails.description}</p>
      <p className="text-gray-700 leading-relaxed mb-4">{postDetails.content}</p>
      <button onClick={() => navigate('/')} className="mt-6 bg-green-900 text-white py-2 px-4 rounded-lg hover:bg-green-800">Back</button>
      </div>
    </div>
  );
};

export default PostDetails;