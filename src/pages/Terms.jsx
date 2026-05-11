import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-dark p-8 md:p-12 rounded-3xl border border-white/10"
      >
        <h1 className="text-4xl md:text-5xl font-serif text-gold mb-8">Terms of Service</h1>
        
        <div className="space-y-6 text-muted leading-relaxed">
          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using <strong>See The Quran</strong>, you agree to be bound by these Terms of Service. 
              If you do not agree to all the terms and conditions, then you may not access the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">2. Description of Service</h2>
            <p>
              See The Quran is an immersive platform for exploring the Quran. It utilizes the Quran Foundation APIs 
              to provide text, audio, and tafsir content. This service is provided "as is" and "as available."
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">3. User Conduct</h2>
            <p>
              You agree not to use the service for any purpose that is prohibited by these Terms. You are responsible 
              for all of your activity in connection with the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">4. Intellectual Property</h2>
            <p>
              The content provided through the Quran Foundation APIs remains the property of the Quran Foundation 
              or its respective licensors. The application code and design are provided under the MIT License.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">5. Limitation of Liability</h2>
            <p>
              In no event shall See The Quran, nor its directors, employees, partners, agents, suppliers, or affiliates, 
              be liable for any indirect, incidental, special, consequential or punitive damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-serif text-ivory mb-4">6. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
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

export default Terms;
