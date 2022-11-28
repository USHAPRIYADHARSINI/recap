import React from 'react'
import { useState, useEffect } from 'react';

function Question({question}) {

    const [views, setViews] = useState("")
    const [vote, setVote] = useState("")
    const [answers, setAnswers] = useState("")

    const handleSubmit= (values)=>{
      const result = [...answers, values]
      setAnswers(result);
  }

  return <div className='company-container'>
  <div className='title'>
      <img src={question.profilepic} alt = "company logo" className='company-logo'/>
      <p className='company-location'>{question.name}</p>
      <p>Views{question.question.touched? setViews(+views+1): views} </p>
      <p>Vote {vote}</p>
      <p>Answers {answers.length}</p>
  </div>
<div className='company-contents'>
<h1 className='question-name'>{question.questionsubject}</h1>
<p className='company-name'>{question.question}</p>
<p className='company-services'>Department : {question.code}</p>
<p className='company-tags'>{answers}</p>
<p className='question-name'>{question.name}</p>
<form onSubmit={()=>handleSubmit}>
    <textarea label="Post if you have a solution" onChange={(e)=>setDoubt(e. target.value)}/>
    <button type='submit' >Post</button>
    </form>

<button onClick={()=>setVote(+vote+1)}>vote</button>
</div>
</div>
}

export default Question


// "question": "question 1",
// "answers": [
//  "O4Q7$^wyZb",
//  5507,
//  "U(V`d$NCJ|",
//  56125,
//  42283,
//  25828,
//  "gau80\\U%hh",
//  "1!7xBy\"S.@",
//  "\\I#k]&\"M6P",
//  9357
// ],
// "questionsubject": "questionsubject 1",
// "name": "Lila Casper",
// "profilepic": "https://loremflickr.com/640/480/abstract",
// "code": "code 1",
// "id": "1"