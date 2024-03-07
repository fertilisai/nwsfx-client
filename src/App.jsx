import Header from "./components/Header.jsx";
import Feed from "./components/Feed.jsx";
import Footer from "./components/Footer.jsx";

// import { DATA } from "./data/tech.js";
import { useState, useEffect } from "react";

const topics = ["NwsFx", "AI", "World", "Tech", "Business", "Science"];

export default function App() {
  // State to track the currently active topic
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [data, setData] = useState([]);

  // Function to handle topic click
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    // console.log(selectedTopic);
    fetch(`http://localhost:8000/${selectedTopic.toLowerCase()}`)
      .then((response) => response.json())
      .then((DATA) => setData(DATA));
  }, [selectedTopic]);

  return (
    <div className="container">
      <Header
        topics={topics}
        selectedTopic={selectedTopic}
        handleSelect={handleSelect}
      />
      <Feed data={data} />
      <Footer />
    </div>
  );
}
