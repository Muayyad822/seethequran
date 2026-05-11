import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-dark p-8 md:p-12 rounded-3xl border border-white/10"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-gold mb-8">Privacy Policy</h1>
        
        <div className="space-y-6 text-muted leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">Introduction</h2>
            <p>
              Welcome to <strong>See The Quran</strong>. We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website 
              (seethequran.vercel.app) and tell you about your privacy rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Identity Data:</strong> Includes first name, last name, and profile picture (if provided via Google Sign-In).</li>
              <li><strong>Contact Data:</strong> Includes email address.</li>
              <li><strong>Usage Data:</strong> Includes information about how you use our website, such as your bookmarks and collections.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>To provide the core services of the app (saving bookmarks, creating collections).</li>
              <li>To authenticate your session via Firebase.</li>
              <li>To interact with the Quran Foundation APIs on your behalf.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">Third-Party Services</h2>
            <p>
              Our app integrates with third-party services:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li><strong>Firebase:</strong> For authentication and database storage.</li>
              <li><strong>Quran Foundation:</strong> To provide Quranic content, audio, and tafsir.</li>
            </ul>
            <p className="mt-4">
              These third parties have their own privacy policies, and we encourage you to read them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us via our GitHub repository.
            </p>
          </section>

          <p className="text-xs mt-12 opacity-50">
            Last Updated: May 11, 2026
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Privacy;
