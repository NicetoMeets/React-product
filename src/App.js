import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './Pages/Pagination';
import Table from './Pages/Table';
import Search from './Pages/Search';

function App() {

  const [state, setState] = useState({
    page: 0,
    limit: 10,
    condition: '',
    word: ''
  })
  const [data, setData] = useState();
  const [totalData, setTotalData] = useState();
  const [showData, setShowData] = useState();

  // 최초 데이터 불러오기
  const getData = async () => {
    const result = await axios.get(`https://dummyjson.com/products?limit=100`);
    setData(result.data);
  }

  // 검색 데이터
  const getTotalData = (condition, word) => {

    const totalData = data?.products.filter(e => {
      const {title, brand, description} = e;
      const compareWord = word.toLowerCase();

      if (condition === "") {
        return (title.toLowerCase().includes(compareWord) || description.toLowerCase().includes(compareWord));
      }
      else if (condition === 'title'){
        return title.toLowerCase().includes(compareWord)
      }
      else if (condition === 'brand'){
        return brand.toLowerCase().includes(compareWord)
      }
      else if (condition === 'description'){
        return description.toLowerCase().includes(compareWord)
      }
    });

    setTotalData(totalData);
  }

  // 페이지 세팅
  const setPage = (page) => {

    if (!totalData) return;

    const {limit, condition, word} = state;

    const result = [];
    for (var i=0; i < totalData.length; i += Number(limit)) {
      let temp;
      temp = totalData.slice(i, i + Number(limit));
      result.push(temp);
    }

    setShowData(result[page]);
    setState({
      page: 0,
      limit: limit,
      condition: condition,
      word: word
    })
  }

  useEffect(() => {
    getData();
  }, [])

  useEffect(() => {
    getTotalData(state.condition, state.word);
  }, [data]);

  useEffect(() => {
    setPage(0);
  }, [totalData])

  return (
    <div className="App">
      <Search state={state} setState={setState} getTotalData={getTotalData}/>
      {totalData && <p>검색된 데이터 : {totalData.length}</p>}
      <Table data={showData} />
      {totalData && <Pagination total={totalData.length} state={state} setPage={setPage}/>}
    </div>
  );
}

export default App;
