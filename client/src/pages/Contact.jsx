import React from 'react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
        <p className="text-gray-600 mb-6">
          If you have any questions or feedback, feel free to reach out to us using the methods below:
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <a
            href="https://github.com/Hsouna20"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <BsGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mrabet-hassen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <BsFacebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900"
          >
            <BsInstagram className="w-6 h-6" />
          </a>
        </div>

        

        {/* Contact Information */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Address:</h2>
          <p className="text-gray-600">
            Avenue Habib Bourguiba, 10 Décembre, Immeuble Essaadi Tour C-D Mezzanine Menzah 4, 1004 Tunis
          </p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Phone:</h2>
          <p className="text-gray-600">+216 28 910 608</p>
        </div>
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Email:</h2>
          <p className="text-gray-600">Information: <a href="mailto:info@medianet.com.tn">info@medianet.com.tn</a></p>
          <p className="text-gray-600">Commercial: <a href="mailto:sales@medianet.com.tn">sales@medianet.com.tn</a></p>
          <p className="text-gray-600">Recruitment: <a href="mailto:recrutement@medianet.com.tn">recrutement@medianet.com.tn</a></p>
        </div>

        {/* About and Legal Links */}
        <p className="text-gray-600 mb-6">
          You can also visit our <Link to="/about" className="text-indigo-600 hover:underline">About</Link> page to learn more about our IP Geolocation Service.
        </p>
        <p className="text-gray-600 mb-6">
          For legal inquiries, please refer to our <Link to="#" className="text-indigo-600 hover:underline">Privacy Policy</Link> and <Link to="#" className="text-indigo-600 hover:underline">Terms & Conditions</Link>.
        </p>
      </div>
    </div>
  );
}

export default Contact;
