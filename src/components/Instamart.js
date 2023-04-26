import { useState } from "react";

const Section = ({title,description, isVisible, setIsVisible}) => {
    
    return(
        <div className="bg-gray-200 p-5 m-2">
        <h1 className="font-bold">{title}</h1>
        <p>{isVisible && description}</p>
        {
            isVisible ? null
            : <button className="bg-green-300 p-1 rounded-lg" onClick={()=>setIsVisible()}>Show</button>
        }
        </div>
    )
}
const Instamart = () => {
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: true,
        showTeam: false,
        showCareer: false,
    });

    return(
        <div className="px-10 py-5">
            <h1 className="text-lg font-bold">Instamart</h1>
            <Section title={"About Instamart"} description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} isVisible={sectionConfig.showAbout} setIsVisible={()=>setSectionConfig(
                {
                    showAbout: true,
                    showTeam: false,
                    showCareer: false,
                }
            )}/>

            <Section title={"Instamart Team"} description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} isVisible={sectionConfig.showTeam} setIsVisible={()=>setSectionConfig(
                {
                    showAbout: false,
                    showTeam: true,
                    showCareer: false,
                }
            )}/>

            <Section title={"Instamart Career"} description={"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."} isVisible={sectionConfig.showCareer} setIsVisible={()=>setSectionConfig(
                {
                    showAbout: false,
                    showTeam: false,
                    showCareer: true,
                }
            )}/>
        </div>
    )
}

export default Instamart;