import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import blackRobotAnim from '../animation/BlackMovingRobot/animations/3cb82fad-d42e-4ebe-9891-2e53a3e322cf.json';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

const ProjectModal = ({ open, onClose, project }) => {
  if (!open || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modalVariants}
      >
        <motion.div
          className="bg-dark-surface rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modalVariants}
        >
          <button
            className="absolute top-4 right-4 text-gray-400 hover:text-electric-blue"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <h2 className="text-3xl font-bold mb-4 text-electric-blue">{project.name}</h2>
          <p className="text-gray-300 mb-6 text-lg">{project.description}</p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-neon-green">Technologies</h3>
            <ul className="list-disc list-inside text-gray-200">
              {project.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          {/* Images section placeholder */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-neon-green">Images</h3>
            <div className="flex gap-4 flex-wrap">
              {/* Replace with actual images if available */}
              <div className="w-32 h-20 bg-gray-800 rounded-lg flex items-center justify-center text-gray-500">No images</div>
            </div>
          </div>
          {/* Add more details, bullet points, etc. here as needed */}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
