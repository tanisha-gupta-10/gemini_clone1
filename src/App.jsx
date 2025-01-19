import { useState, useEffect, useRef } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Gemini from './components/Main/Gemini';
import { run, processImageAndCaption } from './config/gemini';  // Correct import

function App() {
  const [collapsed, setCollapsed] = useState(true);
  const [askQue, setAskQue] = useState("");
  const [displayQue, setDisplayQue] = useState("");
  const [answer, setAnswer] = useState("");
  const [isQuestionSent, setIsQuestionSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [allQs, setAllQs] = useState([]);

  const containerRef = useRef(null);

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setAnswer(prev => prev + nextWord);
    }, 75 * index);
  }

  const [ques, setQues] = useState([
    { id: 1, question: 'What is the best programming language?' },
    { id: 2, question: 'Suggest beautiful places to see on an upcoming road trip' },
    { id: 3, question: 'Who was the first person to climb Mount Everest?' },
    { id: 4, question: 'What is the smallest planet in our solar system?' },
  ]);

  const sendQue = async (que) => {
    if (que.length) {
      setDisplayQue(que);
      setLoading(true);
      setAskQue("");

      const answer = await run(que);
      const newAnswer = answer.split(" ");

      processImageAndCaption();
      // Clear the answer state initially

      const isExistingQuestion = allQs.some((q) => q.question === que);

      // Only add the question if it's not already in allQs
      if (!isExistingQuestion) {
        setAllQs([
          ...allQs,
          { id: allQs.length + 1, question: que }
        ]);
      }

      // Loop through each word with a delay
      newAnswer.forEach((word, index) => {
        delayPara(index, word + " ");
      });

      setAnswer("");
      setLoading(false);
    } else {
      alert("Please ask a question.");
      setIsQuestionSent(false);
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [answer]);

  const handleKeyDown = (e) => {

    if (e.key === "Enter" && askQue.trim()) {
      setIsQuestionSent(true);
      sendQue(askQue);

      const isExistingQuestion = allQs.some((q) => q.question === askQue);

      // Only add the question if it's not already in allQs
      if (!isExistingQuestion) {
        setAllQs([
          ...allQs,
          { id: allQs.length + 1, question: askQue }
        ]);
      }
    }
  }


  const sidebarClicked = () => {
    setCollapsed(!collapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      // Check if the window width is smaller than 768px (for mobile devices)
      if (window.innerWidth <= 922) {
        setIsMobile(true);
      } else {
        setIsMobile(false);

      }
    };

    // Initial check
    handleResize();

    // Add event listener to handle resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>

      {isMobile ? null : <Sidebar collapsed={collapsed} onSidebarClick={sidebarClicked} allQs={allQs} sendQue={sendQue} />}
      <Gemini
        collapsed={collapsed}
        ques={ques}
        askQue={askQue}
        setAskQue={setAskQue}
        sendQue={sendQue}
        isQuestionSent={isQuestionSent}
        setIsQuestionSent={setIsQuestionSent}
        displayQue={displayQue}
        answer={answer}
        loading={loading}
        isMobile={isMobile}  // Add isMobile prop to Gemini component for mobile styling adjustments  // Correct usage of isMobile prop in Gemini component  // Correct usage of isMobile prop in Sidebar component  // Correct usage of isMobile prop in App component  // Correct usage of isMobile prop in Sidebar component  // Correct usage of isMobile prop in App component  // Correct usage of isMobile prop in Gemini component  // Correct usage of isMobile prop in
        handleKeyDown={handleKeyDown}
        sendRef = {containerRef}
      />
    </>
  );
}

export default App;
