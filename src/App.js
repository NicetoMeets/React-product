import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './Pages/Pagination';

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


  return (
    <div className="App">
      <table>
          <thead>
              <tr>
                  <th>상품번호</th>
                  <th>상품명</th>
                  <th>브랜드</th>
                  <th>상품내용</th>
                  <th>가격</th>
                  <th>평점</th>
                  <th>재고</th>
              </tr>
          </thead>
          <tbody>
              {
                  data?.products.map((item, idx) => {
                    const {id, title, brand, description, price, rating, stock} = item;
                    return <tr key={idx}>
                      <td>{id}</td>
                      <td>{title}</td>
                      <td>{brand}</td>
                      <td>{description}</td>
                      <td>{price}</td>
                      <td>{rating}</td>
                      <td>{stock}</td>
                    </tr>
                  })
              }
          </tbody>
      </table>

      {data && <Pagination total={data.total} limit={data.limit} page={0} setPage={setPage}/>}
    </div>
  );
}

export default App;
