import React from 'react'
import Galerie1 from "../assets/img/galerie/zumba.png"
import Galerie2 from "../assets/img/galerie/yoga.png"
import Galerie3 from "../assets/img/galerie/pilates.png"
import Galerie4 from "../assets/img/galerie/indoorcycling.png"

function Galerie() {
    return (
        <div className='w-full min-h-screen'>
            {/* Container */}
            <div className='max-w-[1200px] min-h-fit mx-auto mb-6 pt-[14vh] px-[2vw] grid grid-rows-2 grid-flow-col gap-[60px]'>
                <div>
                    <img src={Galerie1} alt="" className='z-0 rounded-[16px] drop-shadow-[5px_8px_12px_rgba(100,100,100,0.6)] hover:scale-[1.2] hover:z-[999]
                    transition:hover duration-150' />
                </div>
                <div>
                    <img src={Galerie2} alt="" className='z-0 rounded-[16px] drop-shadow-[5px_8px_12px_rgba(100,100,100,0.6)] hover:scale-[1.2] hover:z-[999]
                    transition:hover duration-150' />
                </div>
                <div>
                    <img src={Galerie3} alt="" className='z-0 rounded-[16px] drop-shadow-[5px_8px_12px_rgba(100,100,100,0.6)] hover:scale-[1.2] hover:z-[999]
                    transition:hover duration-150' />
                </div>
                <div>
                    <img src={Galerie4} alt="" className='z-0 rounded-[16px] drop-shadow-[5px_8px_12px_rgba(100,100,100,0.6)] hover:scale-[1.2] hover:z-[999]
                    transition:hover duration-150' />
                </div>
            </div>
        </div>
    )
}

export default Galerie