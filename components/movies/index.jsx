
const getData = async () => {
    const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}");
    return data.json();
}

const MoviesData = async () => {
    const data = await getData();
    return (
        <div>
            {
                data.data.map((item,i)=>(
                    <div key={i}>{item.title}</div>
                ))
            }
        </div>
    );
}

export default MoviesData;