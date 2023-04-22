/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import Footer from '../../components/footer'

import '../../index.css'

function EventsTablet() {

    const [isLoading, setIsLoading] = useState(false)

    const [soloEvents, setSoloEvents] = useState([
        { title: 'Stand Up Comedy', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/stand_up_comedy.jpg' },
        { title: 'Beat Boxing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/beat-boxing.jpg' },
        { title: 'Dance', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/dance-solo.jpg' },
        { title: 'Singing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/singing-solo.jpg' },
        { title: 'Content Writing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/content-writing.jpg' },
        { title: 'Poetry', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/poetry.jpg' },
        { title: 'Essay Writing', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/essay-writing.jpg' },
        { title: 'Painting', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/painting.jpg' }
    ])

    const [groupEvents, setGroupEvents] = useState([
        { title: 'FIFA', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/fifa.jpg' },
        { title: 'Valorant', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/Valorant.jpg' },
        { title: 'CODM', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/codm.jpg' },
        { title: 'Group Dance', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/dance-group.jpg' },
        { title: 'Battle Of Bands', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/battle-of-bands.jpg' },
        { title: 'Treasure Hunt', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/treasure-hunt.jpg' },
        { title: 'Documentary', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/documentary.jpg' },
        { title: 'Theatre', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/theatre.jpg' },
        { title: 'Reels', img: 'https://ik.imagekit.io/pranavSindhanuru/events-img/reels.jpg' },
        { title: 'Fashion Show', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/fasion-show.jpg' },
        { title: 'Face Painting', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/face-painting.jpg' },
        { title: 'Product Launch', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/product-launch.jpg' },
        { title: 'Rangoli', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/rangoli.jpg' },
        { title: 'Debate', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/debate.jpg' },
        { title: 'Mr & Miss DSU', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/mr-miss-dsu.jpg' },
        { title: 'E Poster', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/e-poster.jpg' },
        { title: 'Hackathon', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/hackathon.jpg' },
        { title: 'Code Auction', img: 'https://ik.imagekit.io/pranavSindhanuru/tr:w-600/events-img/code-auction.jpg' }
    ])

    return (
        <div className="">
            <div className="">
                <div className="p-5">
                    <div className="text-4xl flex justify-center items-center w-full p-5">
                        SOLO EVENTS
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                        {soloEvents.map((item: any) => (
                            <div className="flex justify-center items-center">
                                <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer">
                                    <div className="h-[225px] rounded-lg transition-all">
                                        <img src={item.img} className={`h-[225px] object-cover`} loading='lazy' alt="event" />
                                    </div>
                                    <div className="text-base flex justify-center my-5">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-4xl flex justify-center items-center w-full p-5">
                        GROUP EVENTS
                    </div>
                    <div className="grid grid-cols-2 gap-x-5 gap-y-10">
                        {groupEvents.map((item: any) => (
                            <div className="flex justify-center items-center">
                                <div className="p-3 h-[300px] w-[325px] bg-[#495057] rounded-lg transition-all hover:scale-110 cursor-pointer">
                                    <div className="h-[225px] rounded-lg transition-all">
                                        <img src={item.img} className={`h-[225px] object-cover`} loading='lazy' alt="event" />
                                    </div>
                                    <div className="text-base flex justify-center my-5">{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                < Footer />
            </div>
        </div>
    )
}

export default EventsTablet