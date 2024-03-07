import Entry from "./Entry.jsx";

export default function Feed(props) {
  return (
    // Load data (entries) into the Feed
    <main>
      {props.data.map((el) => {
        return <Entry {...el} />;
      })}
    </main>
  );
}
