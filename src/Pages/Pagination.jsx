function Pagination({total, limit, page, setPage}) {

    const numPages = Math.ceil(total / limit);

    return (
    <nav>
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            &lt;
        </button>
        {Array(numPages)
            .fill()
            .map((_, i) => (
            <button
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