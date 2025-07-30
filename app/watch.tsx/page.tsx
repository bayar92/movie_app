"use client"

import { Cardo, Play } from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const cardo = Cardo({ subsets: ["latin"], weight: ["400", "700"] })
const play = Play({ subsets: ["latin"], weight: ["400", "700"] })

export default function WatchSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="w-full max-w-4xl mx-auto py-10 px-4">
      {/* Watch now товч */}
      

      <div className="mt-10 relative">
        {!isPlaying ? (
          // Preview image дээр play icon-той
          <div 
            className="cursor-pointer relative"
            onClick={() => setIsPlaying(true)}
          >
            <Image
              src="/home-image.svg"
              alt="Video preview"
              width={1080} 
              height={720}
              className="rounded-xl w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/30 p-4 rounded-full">
                <Image
                  src="/play.svg"
                  alt="Play"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        ) : (
          // Видео тоглуулагч
          <video
            controls
            autoPlay
            className="w-full rounded-xl"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  )
}
