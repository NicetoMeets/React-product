function Table ({data}) {
    
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    };

    return (
        <>
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
                        data?.map((item, idx) => {
                            const {id, title, brand, description, price, rating, stock} = item;
                            return <tr key={idx}>
                            <td>{id}</td>
                            <td>{title}</td>
                            <td>{brand}</td>
                            <td>{truncate(description, 39)}</td>
                            <td>{price}</td>
                            <td>{rating}</td>
                            <td>{stock}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table;