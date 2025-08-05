import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const openLightbox = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // All images from public/Vargas Assets folder
  const allImages = [
    { src: "/Vargas Assets/Chandalier3.jpeg", alt: "Chandalier 3 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Chandalier4.jpeg", alt: "Chandalier 4 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover1.jpg", alt: "Cover 1 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover2.1.jpg", alt: "Cover 2.1 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover3.jpg", alt: "Cover 3 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover4.jpg", alt: "Cover 4 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover5.jpg", alt: "Cover 5 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover6.jpg", alt: "Cover 6 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover7.jpg", alt: "Cover 7 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover8.jpg", alt: "Cover 8 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover9.jpg", alt: "Cover 9 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover10.jpg", alt: "Cover 10 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover11.jpg", alt: "Cover 11 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover12.jpg", alt: "Cover 12 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover13.jpg", alt: "Cover 13 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover14.jpg", alt: "Cover 14 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover15.jpg", alt: "Cover 15 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover17.jpg", alt: "Cover 17 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover18.jpg", alt: "Cover 18 - Vargas Carpentry project" },
    { src: "/Vargas Assets/Cover19.jpg", alt: "Cover 19 - Vargas Carpentry project" }
  ];

  // Show first 6 images by default, or all if showAll is true
  const displayedImages = showAll ? allImages : allImages.slice(0, 6);

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">See Our Work</h2>
          <p className="text-lg text-gray-600">
            Browse through our portfolio of completed projects and see the quality of our craftsmanship.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {displayedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(image.src)}
              loading="lazy"
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        {allImages.length > 6 && (
          <div className="text-center mt-8">
            <button
              onClick={toggleShowAll}
              className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
            >
              {showAll ? (
                <>
                  Show Less
                  <ChevronUp size={20} className="ml-2" />
                </>
              ) : (
                <>
                  Show More
                  <ChevronDown size={20} className="ml-2" />
                </>
              )}
            </button>
          </div>
        )}
        
        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[80vh] object-contain"
              onClick={e => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;