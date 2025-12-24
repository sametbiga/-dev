import React, {  useState } from 'react'
import App from './App'

function Next() {
    const [play , setPlay] = useState(false)
    if(play){
        return  <App/>
    }
  return (
    <>
        <div className='nextbtn' style={{marginTop:-80, display:'flex'}}    >
            <img className='btn' src="src/assets/img/nextHe.png" alt="" />
            <p className='quizHeader'>Accessibility</p>
        </div>
        <div className='nextBox'>
            <div className='next'>
                <p>Quiz completed</p>
                <h1>You scored...</h1>
            </div>
            <div>
                <div className='playBox'>
                    <div style={{display:'flex'}}>
                        <img className='btn' src="src/assets/img/nextHe.png" alt="" />
                        <h6 className='quizHeader' style={{marginTop:15}}>Accessibility</h6>                    
                    </div>
                    <div className='eight'><h1>8</h1></div>
                    <div><p>out of 10</p></div>
                </div>
                    <button className='plybtn' onClick={() => setPlay(true)}>Play Again</button>
            </div>
        </div>
    </>
  )
}

export default Next
