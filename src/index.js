import fp from 'lodash/fp';

// Deprefix the speech recongition constructor
const SR = webkitSpeechRecognition || SpeechRecognition;

// Gets the latest transcript out of a continuous SpeechRecognitionResultList
const getLatest = fp.flow(fp.last, fp.head, fp.get('transcript'));

/**
 * @param {function} onGrumble - Function to call when a grumble is detected.
 * @param {string} lang - Language to detect grubmles in. Defaults to 'en'.
 */
export default (onGrumble, lang = 'en') => {
  // Attempt to create a recongizer
  const rec = new SR();
  // Language
  rec.lang = lang;
  // Get results while the user is talking
  rec.continuous = true;
  // Define the grumble detection pipeline
  rec.onresult = ({ results }) => {
    const context = getLatest(results);
    // Latest words
    context.split(/\s+/g)
      // Detect grumbles
      .filter(word => word.includes('*'))
      // Emit grumbles
      .forEach(word => onGrumble({
        word,
        context,
        time: Date.now(),
      }));
  };
  // Start the grumble detection pipeline
  rec.start();
  // Return function to stop grumble detection
  return () => rec.stop();
};
