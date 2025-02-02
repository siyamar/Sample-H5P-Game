import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SeekAdvice = () => {
  const [question, setQuestion] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim()) {
      setSubmitted(true);
      setQuestion(""); // Clear input after submission
    }
  };

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqList = [
    { question: "⚡ How do I level up faster?", answer: "Complete daily quests and high-reward challenges." },
    { question: "💎 Where can I find rare items?", answer: "Explore hidden dungeons and defeat elite bosses for better loot." },
    { question: "🐉 What is the best strategy for boss fights?", answer: "Learn attack patterns, use defensive moves, and upgrade your gear." },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="my-8 max-w-2xl mx-auto p-6 bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
      >
        Seek Advice
      </motion.h1>

      <p className="mb-6 text-gray-300 text-center">
        Need help in the game? Ask a question below and get expert advice!
      </p>

      {/* Question Input Form */}
      {!submitted ? (
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <textarea
            className="w-full p-4 bg-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            rows="4"
            placeholder="Enter your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 py-3 rounded-xl font-semibold text-white shadow-md"
          >
            Submit
          </motion.button>
        </motion.form>
      ) : (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-green-400 text-center font-semibold"
        >
          ✅ Your question has been submitted! Stay tuned for responses.
        </motion.p>
      )}

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 p-4 bg-gray-800 rounded-xl shadow-md border border-gray-700"
      >
        <h2 className="text-xl font-semibold mb-3 text-blue-400">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqList.map((faq, index) => (
            <motion.div key={index} className="bg-gray-700 rounded-lg shadow-md">
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left p-3 font-semibold text-white flex justify-between items-center focus:outline-none"
              >
                {faq.question}
                <motion.span animate={{ rotate: openIndex === index ? 180 : 0 }} className="text-gray-400">
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 p-3 border-t border-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SeekAdvice;
