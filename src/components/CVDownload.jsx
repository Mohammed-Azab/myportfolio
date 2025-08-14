import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const CVDownload = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/CV.pdf';
    link.download = 'Mohammed_Abdelazim_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      onClick={handleDownload}
      className="btn-secondary inline-flex items-center gap-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Download size={20} />
      Download CV
    </motion.button>
  );
};

export default CVDownload;
