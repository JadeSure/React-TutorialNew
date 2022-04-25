import Link from 'next/link'

const Navbar = () =>{
    return (
        <nav>
            <div className="logo">
                <h1>Ninjia list header location</h1>
            </div>
            <Link href={'/'}>Home |</Link>
            <Link href='/about'> About |</Link>
            <Link href={'/cc/test'}> CC |</Link>
        </nav>
    )
}

export default Navbar;