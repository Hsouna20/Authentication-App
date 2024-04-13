import React from 'react'

function About() {
  return (
          <div className='min-h-screen flex items-center justify-center'>
            <div className='max-w-2xl mx-auto p-3 text-center'>
              <div>
                <h1 className='text-3xl font font-semibold text-center my-7'>
                  About the Géolocalisation App
                </h1>
                <div className='text-md text-gray-500 flex flex-col gap-6'>
                  <p>
                  Welcome to the Géolocalisation App! This app was created by Hassen Mrabet as an end-of-study project in collaboration with Medianet. 
                  Hassen is a passionate developer and a DevOps engineering student who loves to write about technology, coding, and everything in between.
                  </p>
      
                  <p>
                  With this Geo App, you can find and search for information about a given IP address.
                  </p>
      
                  <p>
                  We encourage you to use our app, and if you encounter any problems, please feel free to contact us via email or LinkedIn. 
                  Additionally, you can share your feedback in the comments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      }

export default About