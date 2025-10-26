function Result({value}) {
    if (value == null)
        return null;
    return <div className="Result">Výsledek: {value}</div>;
}

export default Result;