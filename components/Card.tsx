import { FC } from 'react'
import Image from 'next/image'
const Card: FC<{ head: string, name: string, img: string }> = ({ img, head, name, children }) => {
    return(
    <div className='bg-white rounded-lg shadow-2xl w-3/4'>

        <img src={img} alt='avatar' className='rounded-t-lg h-60 w-full object-cover'/>

        <div className='p-8'>
            <h2 className='text-2xl font-extrabold mb-5'>{head}</h2>
            <p className='mb-2'>{children}</p>
        </div>

        <footer className='text-right py-3 px-8 text-sm text-blue-500'>
            {name}
        </footer>
    </div>
    )
}

export default Card