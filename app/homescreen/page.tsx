import React from "react"
import { Cardo, M_PLUS_1, Noto_Sans_Rejang, Play } from "next/font/google"
import Image from "next/image"
import Link from "next/link"


const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] })
const play = Play({ subsets: ["latin"], weight: ["400", "700"] })

export default function HomeScreen() {
  return (
     <div className="flex h-screen bg-black text-white font-sans">
      {/* Sidebar */}
      <aside className="w-60 bg-zinc-900 p-6 flex flex-col gap-6">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <Image src="/watch.svg" alt="Watch Icon" width={20} height={20} />
                  WATCH
                </h1>
        
        <nav className="flex flex-col gap-4">
         <Link href="/home" className="flex items-center gap-2 text-purple-400">
            {" "}
            {/* Active state for home */}
            <Image src="/home.svg" alt="Home Icon" width={20} height={20} />
            Home
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <img
            src="/favourites.svg"
            alt="Watch Icon"
            className="w-5 h-5"
            
          />
           <Link href="/favouritescreen" className="text-white font-medium hover:underline transition-all">
             Favourites 
             </Link>
          </Link>
          
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <img
            src="/trending.svg"
            alt="Watch Icon"
            className="w-5 h-5"
         
          />
          <Link href="/trendingscreen" className="text-white font-medium hover:underline transition-all">
                Trending
              </Link>
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <img
            src="/comingsoon.svg"
            alt="Watch Icon"
            className="w-5 h-5"
            
          /> Coming soon
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <img
            src="/community.svg"
            alt="Watch Icon"
            className="w-5 h-5"
            /> Community
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <img
            src="/social.svg"
            alt="Watch Icon"
            className="w-5 h-5"
            />  Social
          </Link>
        </nav>
        <div className="mt-auto flex flex-col gap-2">
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <img
            src="/settings.svg"
            alt="Watch Icon"
            className="w-5 h-5"
            />  Settings
          </Link>
          <Link href="#" className="flex items-center gap-2 hover:text-purple-400">
            <img
            src="/logout.svg"
            alt="Watch Icon"
            className="w-5 h-5"
            />
            <Link href="/pagee" className="text-white font-medium hover:underline transition-all">
                Log out
              </Link> 
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Header section */}
        <div className="relative h-64 rounded-xl overflow-hidden bg-zinc-800 flex items-center justify-center">
          <Image src="/home-image.svg" alt="Insider Background" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute bottom-6 left-6">
            <h2 className="text-4xl font-bold">Insider</h2>
            <p className="text-sm">2022 | Comedy horror | 1 Season</p>
            <div className="mt-4 flex gap-4">
              <button className="bg-purple-600 px-4 py-2 rounded hover:bg-purple-500">Watch now</button>
              <button className="border border-white px-4 py-2 rounded">🤍</button>
            </div>
          </div>
        </div>

        {/* Trending section */}
        <section className="mt-10">
          <h3 className={"text-xl font-semibold mb-4 $ {play.className}"}>Trending</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{
              title: "Tokyo Train",
              year: "2022",
              genre: "Action comedy" ,
            imageSrc: "/tokyo.svg",
                  },
                  {
                title: "Moonfall",
                year: "2022",
                genre: "Sci-fi",
                imageSrc: "/Moonfall.svg",
              }, {
                title: "Life in Paris",
                year: "2023",
                genre: "Documentary series",
                imageSrc: "/Paris.svg",
              },
              {
                title: "House of Gucci",
                year: "2021",
                genre: "Drama",
                imageSrc: "/House.svg",
              }].map((movie, idx) => (
              <div key={idx} className="bg-zinc-800 rounded-lg overflow-hidden">
                <div className="w-full h-60 bg-zinc-700 flex items-center justify-center">
                <Image
                    src={movie.imageSrc || "/tokyo.svg"}
                    alt={movie.title}
                    width={255}
                    height={370}
                    className="object-cover"
                  />
                
                  </div>
                <div className="">
                  <h4 className="text-md font-semibold">{movie.title}</h4>
                  <p className="text-sm text-gray-400">{movie.year} | {movie.genre}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Continue watching */}
        <section className="mt-10">
          <h3 className="text-xl font-semibold mb-4">Continue watching</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[0, 1, 2].map((continue1, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-zinc-800 flex justify-center items-center">
                {/* Continue watching SVG here */}
                <div className="w-full h-30 bg-zinc-700 flex items-center justify-center">
                  <img
            src="/continue1.svg"
            alt="Watch Icon"
            className="w-255 h-f"
            />
            
           
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
     

      {/* User info */}
      <div className="absolute top-6 right-6 flex items-center gap-4">
        <button className="text-white"></button>
        <button className="text-white"></button>
        <span className="text-white font-medium">Tetiana</span>
      </div>
    </div>
   

   
)
}
