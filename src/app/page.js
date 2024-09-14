import Image from "next/image";
import Link from "next/link";
import { SiImdb } from "react-icons/si";

const getData = async () => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}");
  return data.json();
}

const page = async () => {


  const movies = await getData();

  return (
    <div className="flex items-center flex-wrap justify-around px-20">
      {
        movies.data.map((item, i) => (
          <Link
          href={`/movies/${item.id}`}
          key={i} className="cursor-pointer relative w-72 h-[530px] border rounded-md my-6 overflow-hidden shadow-sm transition-all duration-200 hover:scale-105">
            <Image alt={item.title} width={288} height={260} src={item.poster} />
            <div className="py-1 px-2 ">
              <h2 className="text-center pb-1 text-lg">{item.title}</h2>
              <div className="">
                <span className="flex gap-2 absolute bottom-2 left-2 border-orange-300 border-t w-1/2 "> <SiImdb size={20} className="mt-1" color="orange" /> {item.imdb_rating}</span>
                <span className="absolute bottom-2 right-2 border-t border-orange-300 w-1/2 text-right">{item.year}</span>
              </div>
            </div>

          </Link>
        ))
      }
    </div>
  );
}

export default page;
