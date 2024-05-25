import React, { useState, useEffect } from 'react';

const Index = ({ texts, typingSpeed = 150, erasingSpeed = 100, delay = 2000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setDisplayText(texts[index].substring(0, subIndex));
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? erasingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index, texts, typingSpeed, erasingSpeed, delay]);

  return (
    <div className="typewriter">
      {displayText}
      <span className="cursor">|</span>
    </div>
  );
};

export default Index;
