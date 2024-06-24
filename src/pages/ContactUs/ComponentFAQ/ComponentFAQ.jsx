import React, { useState, useRef, useEffect } from "react";
import "./ComponentFAQ.scss";
import faqData from "../../../Components/reusableComponents/DataBox/Faq_Data";
import ContactUaParallax from "../ContactUsParallaxes/ContactUaParallax";

function formatText(text) {
  return text.replace(/\n/g, "<br>");
}

const FAQItem = ({ question, answer, isOpen, toggleFAQ }) => {
  const answerRef = useRef(null);
  const [height, setHeight] = useState(
    isOpen ? `${answerRef.current.scrollHeight}px` : "0px"
  );

  useEffect(() => {
    setHeight(isOpen ? `${answerRef.current.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <div className={`componentFaq__list-items ${isOpen ? "active" : ""}`}>
      <div className="question" onClick={toggleFAQ}>
        <span dangerouslySetInnerHTML={{ __html: formatText(question) }}></span>
        <div className={`plus-minus-toggle ${isOpen ? "" : "collapsed"}`}></div>
      </div>
      <div
        ref={answerRef}
        className="answer"
        style={{ maxHeight: `${height}` }}
      >
        <p dangerouslySetInnerHTML={{ __html: formatText(answer) }} />
      </div>
    </div>
  );
};

const ComponentFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const [isScrollable, setIsScrollable] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setIsScrollable(container.scrollHeight > container.clientHeight);
    }
  }, [activeIndex]);

  return (
    <div className="componentFaq__wrapper">
      <ContactUaParallax />
      <div className="componentFaq">
        <div className="componentFaq-container" ref={containerRef}>
          <div className="componentFaq__list">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={activeIndex === index}
                toggleFAQ={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>
        {isScrollable && <div className="scroll-indicator">▼</div>}
      </div>
    </div>
  );
};

export default ComponentFAQ;
