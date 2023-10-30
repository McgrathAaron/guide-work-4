import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.svg";
import HomePageGraphic from "@/assets/HomePageGraphic.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/*Image and Main Header*/}
        <div>
          {/* Main Header*/}
            <div>
             {/* Headers*/}
                <div>
                    <div>
                        <img alt="home-page-text" src={HomePageText} />
                    </div>

                    <p>

                    </p>
                </div>

                {/* Actions */}
                <div>
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Work with Us!
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500 "
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>

          {/*Image*/}
          <div>
            <img alt="home-pageGraphic" src={HomePageGraphic} /> 
          </div>  
        </div>
    </section>
  )
}

export default Home