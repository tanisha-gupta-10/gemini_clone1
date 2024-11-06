import React from 'react'

function QuesCard({queText, sendQue, isQuestionSent, setIsQuestionSent, isMobile}) {
    return (
        <>
            <div className="card mb-3" onClick={() => {sendQue(queText); setIsQuestionSent(true)}} style={{width : isMobile ? "100%" : ''}}>
                <div className="card-body">
                    <p className="card-text">{queText}</p>
                </div>
            </div>
        </>
    )
}

export default QuesCard