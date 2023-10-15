import { useState, useEffect } from 'react';
import './App.css';
import List from './components/List';
import Details from './components/Details';

function App() {
  const url = import.meta.env.VITE_APP_URL;
  console.log(url);
  const [list, setList] = useState([]);
  const [details, setDetails] = useState({});
  const [currentFetch, setCurrentFetch] = useState({
    state: setList,
    itemUrl: `${url}users.json`,
  });
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(currentFetch.itemUrl);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        currentFetch.state(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [currentFetch]);

  const handleClick = (id) => {
    if(id !== details.id) {
      setList(prevList => prevList.map((item) => {
        let activeItem = false;
        if (item.id === id) {
          activeItem = true;
        }
        return {
          id: item.id,
          name: item.name,
          active: activeItem,
        };
      }))

      setCurrentFetch({
        state: setDetails,
        itemUrl: `${url}${id}.json`,
      });
    }
  }

  return (
    <>
      {isLoading && <p className="loading">Идет загрузка</p>}
      <List data={list} onClickItem={handleClick} />
      {details.id && <Details data={details} />}
    </>
  );
}

export default App;