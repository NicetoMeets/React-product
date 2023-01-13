function Pagination({total = 0, state, setPage}) {

    const {limit, page} = state;
    const numPages = Math.ceil(Number(total) / limit);
    
    return (
    <nav className="navBtn">
        <button onClick={() => setPage(page)} disabled={page === 1}>
            &lt;
        </button>
        {Array(numPages)
            .fill()
            .map((_, i) => (
            <button style={{margin:'auto'}}
                key={i}
                onClick={() => setPage(i)}
                aria-current={page === i ? "page" : null}
            >
                {i + 1}
            </button>
            ))}
        <button onClick={() => setPage(numPages - 1)} disabled={page === numPages}>
            &gt;
        </button>
    </nav>
    );
}

export default Pagination;