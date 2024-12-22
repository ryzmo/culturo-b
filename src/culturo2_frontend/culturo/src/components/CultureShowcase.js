import React, { useEffect, useState } from "react";
import { useShowcase } from "../ShowcaseContext";

const CultureShowcase = () => {
  const { showcases, setShowcases } = useShowcase();
  const [isVisible, setIsVisible] = useState(false);
  const [newShowcase, setNewShowcase] = useState({
    title: "",
    description: "",
    file: null,
    preview: "",
    uploader: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewShowcase({ ...newShowcase, [name]: value });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setNewShowcase({ ...newShowcase, file, preview });
    }
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (
      newShowcase.title &&
      newShowcase.description &&
      newShowcase.file &&
      newShowcase.uploader
    ) {
      setShowcases([...showcases, { ...newShowcase, id: showcases.length + 1 }]);
      setNewShowcase({ title: "", description: "", file: null, preview: "", uploader: "" });
    } else {
      alert("Please fill out all fields!");
    }
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-16 pt-24 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-center mb-10">
        <h1 className="text-5xl font-extrabold text-gray-800">CultureShowcase</h1>
        <p className="text-lg text-gray-600 mt-4">
          Share your creative art with the world!
        </p>
      </div>
      <form
        onSubmit={handleUpload}
        className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6"
      >
        <input
          type="text"
          name="title"
          value={newShowcase.title}
          onChange={handleInputChange}
          placeholder="Title"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <textarea
          name="description"
          value={newShowcase.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <input
          type="file"
          accept="image/*,video/*"
          onChange={handleFileUpload}
          className="w-full text-gray-700"
        />
        {newShowcase.preview && (
          <img
            src={newShowcase.preview}
            alt="Preview"
            className="mt-4 rounded-lg shadow-md object-cover max-w-xs mx-auto"
          />
        )}
        <input
          type="text"
          name="uploader"
          value={newShowcase.uploader}
          onChange={handleInputChange}
          placeholder="Your Name"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />
        <button
          type="submit"
          className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-700 transition duration-300"
        >
          Upload
        </button>
      </form>

      <div className="mt-16 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Public Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {showcases.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg p-4 transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={item.preview}
                alt={item.title}
                className="rounded-lg mb-4 object-contain h-auto w-full"
              />
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              <p className="text-sm text-gray-500 mt-1">By: {item.uploader}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CultureShowcase;
