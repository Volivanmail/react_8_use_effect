export default function List(props) {
    const { data } = props;
    const handleClick = (id) => {
      props.onClickItem(id);
    };
  
    return (
      <ul>
        {data.map((item) => <li key={item.id} onClick={() => handleClick(item.id)} className={item.active ? 'active' : ''}>
          {item.name}
        </li>)}
      </ul>
    );
  }