import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.svg";
import HomePageGraphic from "@/assets/HomePageGraphic.svg";
import Kopar from "@/assets/Kopar.svg";
import Pablo from "@/assets/Pablo.svg";
import Natgood from "@/assets/Natgood.jpeg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "@/hooks/useMediaQuery";
import JokeComponent from "@/components/JokeComponent";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    

  return (
    <section
        id="home"
        className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
        {/*Image and Main Header*/}
        <JokeComponent />
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
          {/* Main Header*/}
            <div className="z-10 mt-32 md:basis-3/5">
             {/* Headers*/}
                <div className="md:-mt-20">
                  <div className="relative">
                    <div className="before:absolute before:-top-20  before:-left-32 before:z[-1] md:before:content-logorma before:opacity-20">
                        <img alt="home-page-text" src={HomePageText} />
                    </div>
                  </div>

                    <p className="mt-8 text-sm">
                    Unlock Your Business's Full Potential with Our Social Media Marketing Services!

                    Are you ready to take your company's online presence to the next level? Look no further! Our mission is to empower businesses like yours to thrive on social media
                    </p>
                </div>
                {/* Actions */}
                <div className="mt-8 flex items-center gap-8">
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
          <div className="flex basis-3/5 justify-center md:z-10
          md:ml-40 md:mt-60 md:justify-items-end"
          >
            <img alt="home-page-graphic" src={HomePageGraphic} className="w-[500px] h-[500px]" /> 
          </div>  
        </div>
      {/*COMPANIES*/}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10 relative overflow-hidden mt-16">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8 overflow-x-auto">
              <img alt="Kopar" src={Kopar} className="w-[100px] h-[100px]" />
              <img alt="Pablo" src={Pablo} className="w-[100px] h-[100px]" />
              <img alt="Natturulega-Gott" src={Natgood} className="w-[100px] h-[100px]" />
            </div>
          </div>
        </div>
      )}  
    </section>
  )
}

export default Home