import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/logo.svg";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";



type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    // Define CSS classes for styling purposes
    const flexBetween = "flex items-center justify-between";
    // State to manage the toggled menu
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    // Custom hook to check if screen size is above 1060px
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    // custom hook to set navBar to different color on scroll
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"

    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE */}
                        <img alt="logo" src={Logo} />

                        {/* RIGHT SIDE */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="About"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Projects"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Services"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <ActionButton setSelectedPage={setSelectedPage}>Contact Us</ActionButton>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2 focus:outline-none hover:bg-primary-500 transition duration-300 ease-in-out transform hover:scale-105"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Modal */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-full bg-primary-100 drop-shadow-xl">
                    {/* Close Icon */}
                    <div className={`${flexBetween} flex justify-end p-12`}>
                        <img alt="logo" src={Logo} />
                        <button
                            className="rounded-full bg-white p-2 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105" 
                            onClick={() => setIsMenuToggled(!isMenuToggled) }>
                            <XMarkIcon className="h-6 w-6 text-secondary-500" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="ml-[24px] flex flex-col gap-10 text-3xl">
                                    <Link
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="About"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Projects"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Services"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                </div>
                )}
        </nav>
)}

export default Navbar