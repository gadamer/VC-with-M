import React from 'react';
import { motion } from 'framer-motion';

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="container mx-auto px-6 pt-16 pb-8 h-screen flex items-center justify-center">
        {/* Course Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl h-[80vh]"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-3 h-full">
            {/* Course Embed */}
            <div className="w-full h-full">
              <iframe 
                src="https://app.courseau.co/projects/dd809d68-0fea-4d38-86d0-e028b55ca531/preview?mode=course" 
                style={{ border: 'none', height: '100%', width: '100%', overflow: 'hidden' }} 
                allowTransparency="true"
                title="Complete Coding Bootcamp"
                scrolling="no"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursePage;
