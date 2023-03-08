import React from 'react'

const ShowPages = ({ title }) => {
    return (
        <div className='sticky  top-0  ' >
            <div className=' bg-opacity-30   font-SFPRODISPLAYREGULAR   sticky top-0 z-10 bg-white backdrop-filter backdrop-blur-lg   ' >
                <div className='max-w-[1240px] mx-auto ' >
                    <h3 className=' py-3 leading-[14px] mx-2 ' >{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default ShowPages;