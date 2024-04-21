import React from 'react';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-3xl mx-auto flex p-3">
        {/* Text content on the left */}
        <div className="flex-1 pr-8">
          <div className="w-full">
            <h1 className="text-3xl font-semibold mb-4">
              Welcome to our IP Geolocation Application!
            </h1>
           
            <p className="text-md text-gray-500 mb-4">
              Sign in or create an account to leave feedback and access additional features.
            </p>
            <p className="text-md text-gray-500 mb-4">
              Enter an IP address to retrieve its geolocation information.
            </p>
          </div>
        </div>

        {/* Image on the right */}
        <div className="flex-1">
          <img
            src="https://img-0.journaldunet.com/urAIP6saqhxYCx_3UyBL49A3D9A=/1500x/smart/aadb733d93664c98afb0fe73149f01a7/ccmcms-jdn/15846745.jpg"
            alt="IP Geolocation Service"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
