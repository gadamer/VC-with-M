import React from 'react';
import { motion } from 'framer-motion';

const CoursePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-6 pt-24 pb-12">
        {/* Course Player */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg border border-white/20">
            {/* Course Embed */}
            <div className="aspect-video w-full">
              <iframe 
                src="https://app.courseau.co/projects/dd809d68-0fea-4d38-86d0-e028b55ca531/preview?mode=course" 
                style={{ border: 'none', height: '100%', width: '100%' }} 
                allowTransparency="true"
                title="Complete Coding Bootcamp"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CoursePage;
