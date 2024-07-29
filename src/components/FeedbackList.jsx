import React from 'react';
import FeedbackItem from './feedbackitem';
import { motion, AnimatePresence } from 'framer-motion';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const {feedback,isLoading}=useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <p>No Feedback Yet</p>;
  }
 return isLoading?<Spinner/>:(
  <div className='feedback-list'>
    <AnimatePresence>
      {feedback.map((item) => (
        <motion.div
          key={item.id}  // Use item.id directly for the key
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <FeedbackItem
            item={item}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  </div>
)
}

/*FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,  // Adjusted to string for UUID
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};*/ 
//no need of props feedback as we are context for the Global feedback

export default FeedbackList;
