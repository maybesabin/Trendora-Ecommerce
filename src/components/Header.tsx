import { useEffect, useState } from "react"
import shoppingCart from "../assets/images/shoppingCart.png"
import Banner from "./Banner"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { getUserFromLocalStorage } from "@/utils/localStorage"
import logo from "../assets/images/logo.png"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const favouriteCount = 0
    const shoppingItemCount = 0
    const [showNavbar, setShowNavbar] = useState(false);
    const data = getUserFromLocalStorage()
    useEffect(() => {
        if (!data) {
            setIsLoggedIn(false);
        } else {
            setIsLoggedIn(true)
        }
    }, [])

    return (
        <div className="w-full h-[6rem] z-[999] bg-white">
            <div className="fixed top-0 w-full left-0 z-[999] border-[#f6f8fa] border-b-2 bg-white">
                <Banner />
                <div className="flex items-center justify-between px-12 py-4">
                    <div className="lg:flex hidden items-center justify-center gap-9">
                        <Link to="/" className="text-[0.85rem] font-medium">Home</Link>
                        <Link to="/about" className="text-[0.85rem] font-medium">About</Link>
                        <NavigationMenu className="-mx-4 -mt-0.5">
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <Link to="/products"><NavigationMenuTrigger>Products</NavigationMenuTrigger></Link>
                                    <NavigationMenuContent className="md:flex hidden">
                                        <ul className="grid gap-8 px-6 py-9 md:w-[500px] lg:w-[900px] lg:grid-cols-[.75fr_1fr]">
                                            <li className="row-span-3">
                                                <img src={logo} className="h-6 w-6" />
                                                <div className="mb-2 mt-4 text-lg font-semibold">
                                                    Trendora - Your shopping destination
                                                </div>
                                                <p className="text-sm leading-tight text-muted-foreground">
                                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur libero nisi iste, voluptatem.
                                                </p>
                                                <div className="flex flex-col items-start gap-3 w-80 pt-9">
                                                    <h1 className="text-md font-medium">User Focused Links</h1>
                                                    <ul className="flex items-center gap-3 flex-wrap">
                                                        <li className="hover:underline text-sm">Eco-Friendly Products</li>
                                                        <li className="hover:underline text-sm">Gift Cards</li>
                                                        <li className="hover:underline text-sm">Product guides</li>
                                                        <li className="hover:underline text-sm">Customer Favourites</li>
                                                        <li className="hover:underline text-sm">Top Rated Products</li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li className="flex flex-col items-start gap-3">
                                                <h1 className="text-md font-medium">Men's Fashion</h1>
                                                <ul className="flex items-center gap-3 flex-wrap">
                                                    <li className="hover:underline text-sm">Shoes</li>
                                                    <li className="hover:underline text-sm">Clothing</li>
                                                    <li className="hover:underline text-sm">Accessories</li>
                                                    <li className="hover:underline text-sm">New Arrivals</li>
                                                    <li className="hover:underline text-sm">Best Sellers</li>
                                                    <li className="hover:underline text-sm">Trending Now</li>
                                                    <li className="hover:underline text-sm">Limited Now</li>
                                                    <li className="hover:underline text-sm">Clearance Sale</li>
                                                </ul>
                                            </li>
                                            <li className="flex flex-col items-start gap-3">
                                                <h1 className="text-md font-medium">Women's Fashion</h1>
                                                <ul className="flex items-center gap-3 flex-wrap">
                                                    <li className="hover:underline text-sm">Shoes</li>
                                                    <li className="hover:underline text-sm">Clothing</li>
                                                    <li className="hover:underline text-sm">Accessories</li>
                                                    <li className="hover:underline text-sm">New Arrivals</li>
                                                    <li className="hover:underline text-sm">Best Sellers</li>
                                                    <li className="hover:underline text-sm">Trending Now</li>
                                                    <li className="hover:underline text-sm">Limited Now</li>
                                                    <li className="hover:underline text-sm">Clearance Sale</li>
                                                </ul>
                                            </li>
                                            <li className="flex flex-col items-start gap-3">
                                                <h1 className="text-md font-medium">Popular Collections</h1>
                                                <ul className="flex items-center gap-3 flex-wrap">
                                                    <li className="hover:underline text-sm">New Arrivals</li>
                                                    <li className="hover:underline text-sm">Best Sellers</li>
                                                    <li className="hover:underline text-sm">Trending Now</li>
                                                    <li className="hover:underline text-sm">Limited Now</li>
                                                    <li className="hover:underline text-sm">Clearance Sale</li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                        <Link to="/contact" className="text-[0.85rem] font-medium">Contact</Link>
                    </div>

                    <h1 className="lg:text-4xl text-3xl font-bold text-zinc-700 tracking-tighter uppercase">Trendora</h1>

                    <div className="flex items-center justify-center gap-7">
                        {isLoggedIn ? (
                            <>
                                <h3 className="lg:text-[1rem] text-xs lg:flex hidden capitalize"><span className="opacity-75">Welcome</span>, {data.firstName}</h3>
                                <div className="relative md:flex hidden cursor-pointer" title="Shopping Cart">
                                    <img src={shoppingCart} width={'27px'} alt="" />
                                    <h3 className="absolute -top-2 -right-1 bg-black text-white rounded-full px-1 text-xs">{shoppingItemCount}</h3>
                                </div>
                                <div className="relative md:flex hidden cursor-pointer" title="Favourites">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25" color="#000000" fill="none">
                                        <path d="M13.7276 3.44418L15.4874 6.99288C15.7274 7.48687 16.3673 7.9607 16.9073 8.05143L20.0969 8.58575C22.1367 8.92853 22.6167 10.4206 21.1468 11.8925L18.6671 14.3927C18.2471 14.8161 18.0172 15.6327 18.1471 16.2175L18.8571 19.3125C19.417 21.7623 18.1271 22.71 15.9774 21.4296L12.9877 19.6452C12.4478 19.3226 11.5579 19.3226 11.0079 19.6452L8.01827 21.4296C5.8785 22.71 4.57865 21.7522 5.13859 19.3125L5.84851 16.2175C5.97849 15.6327 5.74852 14.8161 5.32856 14.3927L2.84884 11.8925C1.389 10.4206 1.85895 8.92853 3.89872 8.58575L7.08837 8.05143C7.61831 7.9607 8.25824 7.48687 8.49821 6.99288L10.258 3.44418C11.2179 1.51861 12.7777 1.51861 13.7276 3.44418Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <h3 className="absolute -top-2 -right-1 bg-black text-white rounded-full px-1 text-xs">{favouriteCount}</h3>
                                </div>
                                <Button className="md:flex hidden px-6" variant={"default"} onClick={() => setIsLoggedIn(false)} >
                                    Log Out
                                </Button>
                                <button
                                    className={`menu lg:hidden flex items-center justify-center ${showNavbar ? 'opened' : ''}`}
                                    onClick={() => setShowNavbar(!showNavbar)}
                                    aria-expanded={showNavbar}
                                    aria-label="Main Menu"
                                >
                                    <svg
                                        aria-label="Main Menu"
                                        width="34" height="34" viewBox="0 0 100 100">
                                        <path
                                            className="line line1"
                                            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                                        />
                                        <path className="line line2" d="M 20,50 H 80" />
                                        <path
                                            className="line line3"
                                            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                                        />
                                    </svg>
                                </button>
                            </>
                        ) : (
                            <>
                                <Link to={"/signup"}>
                                    <Button className="px-6" onClick={() => setIsLoggedIn(!isLoggedIn)} >
                                        Sign In
                                    </Button>
                                </Link>
                            </>

                        )}
                    </div>


                </div>
                <div className={`bg-zinc-100 fixed md:top-[7rem] top-[2.5rem] flex  ${showNavbar ? "translate-y-0 opacity-100" : "translate-y-[-30rem] opacity-0"} lg:hidden flex flex-col items-center justify-center gap-6 h-64 w-screen transition-all duration-500 ease-in-out z-[998]`}>
                    <a href="/"><Button className="hover:bg-zinc-300 transition-all text-zinc-500 hover:text-zinc-700" variant={"secondary"}>Home</Button></a>
                    <a href="/about"><Button className="hover:bg-zinc-300 transition-all text-zinc-500 hover:text-zinc-700" variant={"secondary"}>About</Button></a>
                    <a href="/products"><Button className="hover:bg-zinc-300 transition-all text-zinc-500 hover:text-zinc-700" variant={"secondary"}>Products</Button></a>
                    <a href="/contact"><Button className="hover:bg-zinc-300 transition-all text-zinc-500 hover:text-zinc-700" variant={"secondary"}>Contact</Button></a>
                </div>
            </div>
        </div >
    )
}

export default Header