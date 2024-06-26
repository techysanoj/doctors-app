import "./CardOne.css"

export default function Card({name, description, }) {
  return (
    <div className="card-main">
      <img className="c-img" src="/public/vite.svg"></img>
      <a><h2 className="c-h2">{name}</h2></a>
      <p className="c-p">
        {description}
      </p>
      <a><p className="c-p-a">Read More</p></a>
    </div>
  );
}
