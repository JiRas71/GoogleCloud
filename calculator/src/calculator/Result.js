function Result({value}) {
    if (value !== null)
        return <div className="Result"><strong>Výsledek: {value}</strong></div>;
    return null;
}

export default Result;