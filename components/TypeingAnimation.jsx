"use client";
import React, { useEffect, useState } from 'react'

export const TypeingAnimation = () => {
  const skills = ["Developer", "Designer", "Player"];
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text < skills.length - 1 ? text + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  });
  return (
    <span className="cd-words-wrapper">
      {skills.map((skill, i) => (
        <b key={i} className={text === i ? "is-visible" : "is-hidden"}>
          {skill}
        </b>
      ))}
    </span>
  );
}
