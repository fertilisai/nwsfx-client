// import { useState } from "react";
// import TabButton from "./TabButton.jsx";

export default function Header(props) {
  return (
    <header>
      <nav>
        <ul>
          {props.topics.map((topic, index) => (
            <li
              key={index}
              className={topic === props.selectedTopic ? "active" : undefined}
              onClick={() => props.handleSelect(topic)}
            >
              {topic}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
