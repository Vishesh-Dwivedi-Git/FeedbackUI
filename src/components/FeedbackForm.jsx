import Card from "./shared/Card"
import { useState,useEffect } from "react"
import Button from "./shared/button";
import RatingSelect from "./RatingSelect";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";


function FeedbackForm() {
    const [text,setText]=useState('');
    const [btnDisabled, setBtnDisabled]= useState(true);
    const [message, setMessage]=useState('');
    const [rating,setRating]=useState();
    const {addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext);
    useEffect(()=>{
     if(feedbackEdit.edit===true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
     }

    },[feedbackEdit])
    const handleTextChange=(e)=>{ //applying validation :
        if(text===''){
          setBtnDisabled(true);
          setMessage(null);
         }
         else if(text!=='' && text.trim().length<=10){
          setBtnDisabled(true);
          setMessage("Text must be atleast 10 characters");
         }
         else{
          setBtnDisabled(false);
          setMessage('');
         }
         setText(e.target.value);
            }
    const handleSubmit=(e)=>{
      e.preventDefault();
      if(text.trim().length>10){
        const newFeedback={
          text,
          rating
        }
        if(feedbackEdit.edit===true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }else{
          addFeedback(newFeedback);
        }
        setText('');
        setRating(null);
      }

    }

  return (
      <Card>
      <h2>How would you rate the services ?</h2>
      <RatingSelect select={(rating)=>setRating(rating)}/>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
            <input onChange={handleTextChange}  type='text' placeholder=" Write a Review" value={text}  ></input>
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
      </Card>
  )
}

export default FeedbackForm
