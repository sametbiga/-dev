import React, { useState } from 'react'
import Quiz from './Quiz'
function Sec() {
    const [quiz , setQuiz] = useState(false)
    if(quiz){
        return <Quiz/>;  
    }
  return (
    <section className='secsec'>
        <div className='secbox'>
            <p>Welcome to the</p>
            <h3>Frontend Quiz!</h3>
            <i>Pick a subject to get started.</i>
        </div>
        <div className='btnbox'>
            <button className='secbtn'>
                <img className='btn' src="src/assets/img/html.png" alt="" />
                <b>HTML</b>
            </button>
            <button className='secbtn' onClick={() => setQuiz(true)    }>
                <img className='btn' src="src/assets/img/css.png" alt="" />
                <b>CSS</b>
            </button>
            <button className='secbtn'>
                <img className='btn' src="src/assets/img/js.png" alt="" />
                <b>Javascript</b>
            </button>
            <button className='secbtn'>
                <img className='btn' src="src/assets/img/ac.png" alt="" />
                <b>Javascript</b>
            </button>
        </div>        
    </section>
  )
}

export default Sec
