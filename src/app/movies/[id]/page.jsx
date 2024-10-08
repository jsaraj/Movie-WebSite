
import not_found from "../../not-found";
import Image from "next/image";


const getData = async (id) => {
    const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`);
    return data.json();
}
const page = async ({ params }) => {

    const movie = await getData(params.id);
    if (!movie.id) {
        return not_found();
    }

    return (
        <div className="mx-20 my-10  flex" >
            <main className=" py-12 px-10 bg-gray-200 mr-1  rounded-md">
                <section className="flex items-start justify-between ">
                    <div className="flex flex-col gap-4">
                        <h1 className="font-semibold border-b border-orange-400 pb-2">{movie.title}</h1>
                        <h3><span className="font-semibold">Year: </span> {movie.year}</h3>
                        <h3><span className="font-semibold">Realsed: </span> {movie.released}</h3>
                        <h3><span className="font-semibold">RunTime: </span> {movie.runtime}</h3>
                        <h3><span className="font-semibold">Director: </span> {movie.director}</h3>
                        <h3><span className="font-semibold">Actors: </span> {movie.actors}</h3>
                        <h3><span className="font-semibold">Country: </span> {movie.country}</h3>
                        <h3><span className="font-semibold">IMDB: </span> {movie.imdb_rating}</h3>
                        <div className="flex gap-4">
                            <h3><span className="font-semibold">Genere: </span></h3>
                            <div className="flex gap-4 w-1/2">
                                {
                                    movie.genres.map((item, id) => (
                                        <div key={id}>
                                            <div className="text-[16px] py-1 px-3 bg-orange-400 rounded-md">{item}</div>
                                        </div>
                                    ))}
                            </div>
                        </div>

                        <h3><span className="font-semibold">Plot: </span>{movie.plot}</h3>
                    </div>
                    <div className="">
                        <Image className="rounded-md hover:translate-x-3 transition-all duration-200" src={movie.poster} height={350} width={280} alt={movie.title} />
                    </div>
                </section>
                <div className="border-b border-orange-400 text-center mt-12 mb-5 py-2">
                    <h2>Another Picture of Movie</h2>
                </div>
                <div className="flex justify-around gap-10 py-5">
                    {
                        movie.images.map((item, id) => (
                            <Image key={id} className="rounded-md hover:scale-105 transition-all duration-200" id="image1" src={item} height={107} width={256} alt={movie.title} />
                        ))
                    }
                </div>
            </main>
            <aside className="w-3/12 bg-gray-200 rounded-md ml-1 p-8">
                <h3 className="text-center border-b border-orange-400 pb-2 mb-2">SideBar</h3>
                <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos nostrum tempore numquam a. Possimus laboriosam similique enim magnam. Earum, dicta, quas maiores tempore ratione veritatis facere dolore provident rem nobis iste sapiente possimus expedita officia incidunt eligendi, culpa natus corrupti. Amet dolores doloribus rem incidunt est quidem sunt dolorum qui totam accusamus voluptatibus deserunt eaque quaerat sint ipsum exercitationem reprehenderit porro consequuntur, consectetur aspernatur obcaecati quibusdam. Doloremque optio veniam, iusto delectus itaque totam eveniet magnam dolorum. Ullam nam accusamus culpa sequi inventore minus illo veniam! Nobis incidunt iste eum dolore unde laudantium quasi quibusdam adipisci nemo fuga, quam iure perferendis ducimus officia aliquid culpa nulla non voluptatem deleniti </p>
            </aside>
        </div>
    );
}

export default page;