import React, { useState } from 'react'
import Next from './Next';

function Quiz() {
    const [ showQuiz , setShowQuiz] = useState(false)
    const [ falseQuiz , setFalseQuiz] = useState(false)
    const [ falseQuizOne , setFalseQuizOne] = useState(false)
    const [ falseQuizTwo , setFalseQuizTwo] = useState(false)
    const [next , setNext] = useState(false)

    if(next){
        return <Next/>
    }

  return (
    <>
    <div style={{marginTop:-80, display:'flex'}}>
         <img className='btn' src="src/assets/img/nextHe.png" alt="" />
         <p className='quizHeader'>Accessibility</p>
    </div>
    <div className='btnbox'>
        <div className='quizBox'>
            <i>Question 6 of 10</i>
            <p>Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?</p>
            <div className='main'><div className='mainh'></div></div>
        </div>
        <div>
            <button className='wrBoxxtrue' onClick={() => {setShowQuiz(true)}}>
                <b className='wrBox'>A</b>
                <b className='wrboxB'>4.5 : 1</b>
                {showQuiz && <img className='btnShow' src="src/assets/img/true.png" style={{}} />}
            </button>
            <button  className='wrBoxx'  onClick={() => {setFalseQuiz(true)}}>
                <b className='wrBox'>B</b>
                <b className='wrboxB'> 3 : 1 </b>
                {falseQuiz && <img className='btnShow' src="src/assets/img/false.png" style={{}} />}
            </button>
            <button  className='wrBoxx' onClick={() => {setFalseQuizOne(true)}}>
                <b className='wrBox'>C</b>
                <b className='wrboxB'>2.5 : 1</b>
                {falseQuizOne && <img className='btnShow' src="src/assets/img/false.png" style={{}} />}
            </button>
            <button  className='wrBoxx' onClick={() => {setFalseQuizTwo(true)}}>
                <b className='wrBox'>D</b>
                <b className='wrboxB'>5 : 1</b>
                {falseQuizTwo && <img className='btnShow' src="src/assets/img/false.png" style={{}} />}
            </button>
            <button className='sbmt' onClick={() => setNext(true)} >Next Question</button>
        </div>
    </div>     
           

    </>
  )
}

export default Quiz;
