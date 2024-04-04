import React from 'react'
import { Link } from 'react-router-dom'

const links= [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Games',
        link: 'games'
    },
    {
        name: 'Wallet',
        link: 'wallet'
    }
]

const Header = () => {
  return (
    <div className="fixed top-0 flex flex-row justify-between shadow-md items-center w-[100%] bg-[white] px-[10px] py-[15px]">
        <div className="">
            <h1 className='text-[25px] font-[500] '>Logo</h1>
        </div>
        <div className="flex flex-row justify-center gap-[50px] items-center mr-[30px]">
            {links.map((link, index) => (
                <Link key={index} to={link.link}
                className='text-[#068FFF] text-[18px] font-[500] hover:text-[#4E4FEB] '
                >
                    {link.name}
                </Link>
            ))}
        </div>
    </div>
  )
}

export default Header