import { useEffect, useState } from "react";

function Search ({state, setState, getTotalData}) {

    const [search, setSearch] = useState({
        limit: 10,
        condition: ''
    });

    const onChangeSelect = (e) => {
        const { target : { value, name }} = e;
        
        
        setSearch({
            ...search,
            [name]: value
        })
    }

    const onChangeInput = (e) => {
        const { target : { value, name }} = e;
        
        setState({
            ...state,
            [name]: value
        })
    }

    const onClick = () => {
        setState({
            ...state,
            limit: search.limit,
            condition: search.condition
        })
        window.history.pushState("", "", `?limit=${search.limit}&condition=${search.condition}&word=${state.word}`)
        getTotalData();
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const word = params.get("word");
        const limit = params.get("limit");
        const condition = params.get("condition");

        setState({
            ...state,
            condition: condition,
            limit: limit,
            word: word
        })
        setSearch({
            condition: condition,
            limit: limit,
        })
    }, [])

    return (
        <>
            <select name="condition" onChange={(e) => onChangeSelect(e)} value={search.condition}>
                <option value=''>전체</option>
                <option value='title'>상품명</option>
                <option value='brand'>브랜드</option>
                <option value='description'>상품내용</option>
            </select>
            <input name="word" value={state.word || ''} onChange={(e) => onChangeInput(e)}></input>
            <strong>페이지당 행 : </strong>
            <select name="limit" onChange={(e) => onChangeSelect(e)} value={search.limit}>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='30'>30</option>
            </select>
            <button onClick={() => onClick()}>검색</button>
        </>
    )
}

export default Search;