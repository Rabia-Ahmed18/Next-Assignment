import Link from 'next/link'

export default function Header (){
    return (

        <div className="header">
           
            <ul className='header-btn'>
            <div className="logo">RABIA AHMED</div>

               <Link href={"/"}>
               <button className='btn'>  <li>Portfolio</li> </button></Link>
                <Link href={"/"}>
                <button className='btn'> <li>About</li> </button></Link>
                <Link href={"/"}>
                <button className='btn'> <li>Contact us</li></button></Link>
            
            </ul>
        </div>
        
    )
}