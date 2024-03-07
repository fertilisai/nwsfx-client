import timeAgo from "../utils/utils.js";

export default function Entry(props) {
  let date = new Date(props.date);
  const timeAgoString = timeAgo(date);

  return (
    <>
      <div className="entry">
        <div className="top">
          <div className="source">{props.source}</div>
          <div className="date">{timeAgoString}</div>
        </div>
        <div className="title">
          <a href={props.link} target="_blank">
            {props.title}
          </a>
        </div>
        <div className="image">
          <img
            className="image"
            src={props.image === "" ? "src/assets/dummy.jpg" : props.image}
            loading="lazy"
          />
        </div>
        <div className="bottom">
          <div className="articles">1 article</div>
          {/* <div className="reads">0 read</div> */}
        </div>
      </div>
      <hr />
    </>
  );
}
