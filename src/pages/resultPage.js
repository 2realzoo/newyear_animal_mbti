function ResultPage({ result }) {
    return (
        <div>
            <h2>{result.name}</h2>
            <div>{result.text}</div>
            <div>{result.friend}</div>
        </div>
    )
}

export default ResultPage;