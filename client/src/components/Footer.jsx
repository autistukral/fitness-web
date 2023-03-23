import React from 'react'

function Footer() {
    return (
        <div className='static w-full h-[80px] flex items-center px-4 bg-[#34b4aa] '>
            {/* Footer */}
            <div className='text-[#f7fafc]'>
                <p>tel. 696 969 696</p>
                <p>mail: hladke.brisko@gmail.com</p>
            </div>
            <div className='text-[#f7fafc] font-bold mx-auto translate-x-[-50%]'>
                HLADKE BRISKO &copy; 2023
            </div>
        </div>
    )
}

export default Footer