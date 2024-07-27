
import {createContext , useState} from 'react';
import FeedbackData from '../data/FeedbackData';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext= createContext();

export const FeedbackProvider=({children})=>{
    const[feedback,setFeedback]=useState(FeedbackData)
    const [feedbackEdit, setFeedbackEdit]=useState({
        item:{},
        edit:false
    })
    const updateFeedback=(id,updItem)=>{
       setFeedback(
        feedback.map((item)=>(item.id===id?{...item,...updItem}:item)) //updating the feedback which matched , content of item upd item get merged!
      )
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete this?')) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };
      const addFeedback = (newFeedback) => {
        if (window.confirm('Are you sure you want to submit the review?')) {
          newFeedback.id = uuidv4();
          setFeedback([newFeedback, ...feedback]);
        }
      };
      //set item to be updated
      const editFeedBack=(item)=>{
        setFeedbackEdit({
            item,
            edit:true
        })
      }
    return <FeedbackContext.Provider value={{feedback,deleteFeedback,addFeedback,editFeedBack,feedbackEdit,updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;