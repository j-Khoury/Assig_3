"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function page({ params: { id } }) {
  const [details, setDetails] = useState();

  useEffect(() => {
    // Function to fetch video details
    const fetchVideoDetails = async () => {
      try {
        // Fetch data from API
        const response = await axios.get(`https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874`);

        // Set the details state with the fetched data
        setDetails(response.data.data.result.related);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };

    // Fetch video details when component mounts
    fetchVideoDetails();
    
  }, []);

  console.log(details);
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <p>
        this page is a next routing page from the main page to the task details page
          </p> 
        And here we get the api related array..
        <ul>
          {details?.map((detail)=> {
            return (
              <li >
                {detail.title}
                <img src={detail.image} />
              </li>
              
            )
          })}
          </ul>
        <p>and this id task is {id} </p>

      </main>
  );
}

