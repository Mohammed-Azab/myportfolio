import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGallery = ({ images, open, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);

  // Reset state when gallery opens
  useEffect(() => {
    if (open) {
      setCurrentIndex(initialIndex);
      setScale(1);
    }
  }, [open, initialIndex]);

  // Keyboard controls
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowLeft":
          e.preventDefault();
          navigatePrevious();
          break;
        case "ArrowRight":
          e.preventDefault();
          navigateNext();
          break;
        case "+":
        case "=":
          e.preventDefault();
          setScale((s) => Math.min(4, s + 0.2));
          break;
        case "-":
          e.preventDefault();
          setScale((s) => Math.max(1, s - 0.2));
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, currentIndex, images.length]);

  const navigateNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setScale(1); // Reset zoom when changing images
  };

  const navigatePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setScale(1); // Reset zoom when changing images
  };

  const currentImage = images[currentIndex];

  if (!open || !images || images.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        {/* Top controls */}
        <div className="absolute top-4 right-4 flex gap-2 z-10">
          <button
            onClick={() => setScale((s) => Math.min(4, s + 0.2))}
            className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
            title="Zoom In (+)"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={() => setScale((s) => Math.max(1, s - 0.2))}
            className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
            title="Zoom Out (-)"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-lg transition-colors"
            title="Close (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image counter */}
        {images.length > 1 && (
          <div className="absolute top-4 left-4 bg-gray-700/80 text-white px-3 py-2 rounded-lg text-sm z-10">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={navigatePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-full transition-colors z-10"
              title="Previous Image (←)"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={navigateNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-700/80 hover:bg-gray-600/80 text-white rounded-full transition-colors z-10"
              title="Next Image (→)"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Main image */}
        <motion.img
          key={`${currentImage.url || currentImage}-${currentIndex}`}
          src={currentImage.url || currentImage}
          alt={
            currentImage.caption ||
            currentImage.alt ||
            `Image ${currentIndex + 1}`
          }
          style={{ transform: `scale(${scale})` }}
          className="max-h-[85vh] max-w-[90vw] object-contain rounded bg-transparent"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: scale, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onWheel={(e) => {
            e.preventDefault();
            setScale((s) =>
              Math.max(1, Math.min(4, s + (e.deltaY < 0 ? 0.1 : -0.1)))
            );
          }}
        />

        {/* Image caption */}
        {(currentImage.caption || currentImage.alt) && (
          <div
            className={`absolute left-1/2 -translate-x-1/2 bg-gray-700/80 text-white px-4 py-2 rounded-lg text-sm max-w-md text-center z-10 ${
              images.length > 1 && images.length <= 10
                ? "bottom-16" // Move up when thumbnails are present
                : "bottom-4" // Stay at bottom when no thumbnails
            }`}
          >
            {currentImage.caption || currentImage.alt}
          </div>
        )}

        {/* Thumbnail navigation for multiple images */}
        {images.length > 1 && images.length <= 10 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setScale(1);
                }}
                className={`w-12 h-8 rounded border-2 overflow-hidden transition-all ${
                  index === currentIndex
                    ? "border-electric-blue ring-2 ring-electric-blue/50"
                    : "border-gray-500 hover:border-gray-300"
                }`}
              >
                <img
                  src={image.url || image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGallery;
