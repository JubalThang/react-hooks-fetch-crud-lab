import React, { useEffect, useState } from "react";
import QuestionItem from './QuestionItem'

function QuestionList() {
  const [questions, setQuestions] = useState([])


  function handleDeleteQuestion(id) {
    setQuestions(questions.filter(question => question.id !== id))
  }
  
  useEffect(() => {
    fetch('http://localhost:3000/questions') 
      .then(respnse => {
        if(!respnse.ok) {
          throw new Error('Something wrong')
        } else {
          return respnse.json()
        }
      })
      .then(questions => setQuestions(questions))
      .catch(err => console.error('Something wrong', err))
  },[])

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
      /* display QuestionItem components here after fetching */
      questions.map(question => <QuestionItem key={question.id} question={question} onDelete={handleDeleteQuestion}/>)
      }</ul>
    </section>
  );
}

export default QuestionList;
