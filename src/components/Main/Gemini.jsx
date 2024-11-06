import React from 'react'
import QuesCard from './QuesCard'

function Gemini({ collapsed, ques, cardClick, askQue, setAskQue, sendRef, sendQue, isQuestionSent, handleKeyDown, setIsQuestionSent, displayQue, answer, loading, isMobile }) {

  const formattedText = answer.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  const formattedText2 = formattedText.replace(/\* /g, '<br />• ');
  return (
    <>
      <div className="mainPart" style={{
        paddingTop: isMobile ? "20px" : "30px",
        paddingLeft: "20px" ,
        paddingRight: isMobile ? "20px" : "30px",
        paddingBottom: "100px"
      }}
      ref={sendRef}>
        <div className="topPart">
          <div className="brandName">Gemini Clone</div>
          <img src="https://clone-gemini.vercel.app/assets/user_icon-BYrw3k3X.png" alt="" />
        </div>


        {isQuestionSent ? <div className="resultPart">
          <div className="resutTitle">
            <img src="https://clone-gemini.vercel.app/assets/user_icon-BYrw3k3X.png" alt="" style={{ padding: "5px" }} />
            <span className="resutTitleText">{displayQue}</span>
          </div>

          <div className="resultData">
            <img src="data:image/png;base64,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" alt="" style={{ width: "50px", height: "50px", padding: "5px" }} />
            {loading ? <div className="loader">
              <div className="animated-bg"></div>
              <div className="animated-bg"></div>
              <div className="animated-bg"></div>
            </div> : <div className="answer" dangerouslySetInnerHTML={{ __html: formattedText2 }} ></div>
            }

          </div>
        </div> : <>
          <div className="greetPart">
            <span className="greetMsg">Hello, Dev!</span>
            <span className="subGreet">How can I help you today?</span>
          </div>

          <div className="ques" style={{ flexDirection: isMobile ? "column" : "row" }}>
            {ques.map((que) => <QuesCard key={que.id} queText={que.question} sendQue={sendQue} isQuestionSent={isQuestionSent} setIsQuestionSent={setIsQuestionSent} isMobile={isMobile} />)}
          </div></>}

        <div className="inputSec">
          <div className="form-group searchBox" style={{ margin: "0 30px 0 0" }}>
            <input type="text"
              className="form-control" name="" id="" 
              value={askQue} onChange={(e) => setAskQue(e.target.value)} 
              onKeyDown={handleKeyDown} aria-describedby="helpId" placeholder="Ask something to this GEMINI Clone" />

            <img src="https://clone-gemini.vercel.app/assets/gallery_icon-DX7cOO5y.png" alt="" style={{ width: "25px" }} />
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAACeklEQVR4nO2aPYgTQRiGx/MfUQtREAKRMDDzvpNdkGDlQUDEzvJasbK1EltLW0sr4UpbsbrWwsJG4QQLBRFEEBRB/OHUlQ82GiTHTeLs7uRmHviasDB5dmfne2cSpTKZTCaTiRvn3CWl1B6VCiQrki8AXO/3+4dUIsKVFIB3AG5Za0+oFIT5t76SXB8Oh1YlIlzV9RPAAwAXVSLC1VQ9sdZeGY/H+1QiwlVdr0jeHAwGx1UiwlVdn0jeKYqip5YJzpABcAPAGx9xAN8B3DPGFGoZ4AwJ+Xw0Gu0nuUbyse9TB/DIOXc56iDDbYT/uWaV5H2SPzzl4w0y9BCeulbLe0vyi+cTjy/IcA7hCWVZnpKVmuRbzyceT5DhAsITtNYHpTcDeO4p3n2Q4X8IT7EiEiITfZBhGOE/ADgr0xfAVpRBhoGFJ1hrT8uCBeBjVEGGDQlPMMYclRYF4LVvkJEW6Jw7p5ZReIq9Eko6DzKcMVDTCwnJCyQfkvzlKf+M5FWSB0IMXs24s1sAXpLcAHC37rlr1tqR1vpYEOuuggz928j0wB+krci7BuA2yWvSloqiGCwy/bTWJ1sLMlxAeIf6tt3s6PV6hz2DzGZjQYYtCu+0mVg0uTnnzi/VlJZsLu8myfee43+Wm2mMMfOOpfKixQTbkmqAaE5QGGe0XG/sjIwNCRtjzsiCtus3D1hgeygzoCzLI6oNGEZ4pd4YbOzqAwDdRlCIQbhsMyh0KcxUjmlJrtYHdF5BAcBTiZtLdRA/iiUohIazv3haP6YxpqAQGs4v2m5QCA1jDwqhYexBITSMPSiEhrEHhdAw9qAQGpfan0szmUwmk1Gd8Bv41GFkySRCBgAAAABJRU5ErkJggg==" alt="" style={{ width: "25px" }} onClick={() => {
              sendQue(askQue);
              askQue ? setIsQuestionSent(true) : setIsQuestionSent(false);
              ;
            }} />
          </div>
        </div>

      </div>
    </>
  )
}

export default Gemini