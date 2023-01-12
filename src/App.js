import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './Pages/Pagination';
import { useSelector } from 'react-redux';
import Table from './Pages/Table';

function App() {

  const [limit, setLimit] = useState(10);
  const [data, setData] = useState();

  const setPage = async (page) => {
    const result = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${page*limit}`);
    setData(result.data);
  }

  useEffect(() => {
    setPage(0);
  }, [])

  const test = useSelector((state) => {
    return state;
  })

  console.log(test, 'test')


  return (
    <div className="App">
      <Table data={data}/>
      {data && <Pagination total={data.total} limit={data.limit} page={0} setPage={setPage}/>}
    </div>
  );
}

export default App;
