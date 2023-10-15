export default function Details(props) {
  const { data } = props;
  return (
    <div id={data.id} className="details">
      <img alt={data.name} src={data.avatar} />
      <p className="name">{data.name}</p>
      <p>City: {data.details.city}</p>
      <p>Company: {data.details.company}</p>
      <p>Position: {data.details.position}</p>
    </div>
  );
}