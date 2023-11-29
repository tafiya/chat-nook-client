
import useAnnouncement from "../../hooks/useAnnouncement";
import Banner from "./Banner";
import Posts from "./Posts/Posts";
import ShowAnnouncement from "./ShowAnnouncement/ShowAnnouncement";
import Tags from "./Tags/Tags";


const Home = () => {
    const [posts]=useAnnouncement();
    return (
        <div>
            <Banner></Banner>
            <div className="flex md:flex-row flex-col-reverse  ">
            <div className=" md:w-2/3">
                <Posts></Posts>
            </div>
                <div className="md:w-1/3 min-h-screen border border-lg  border-accent">
                    <Tags></Tags>
                    {
                        posts.length>0?<><ShowAnnouncement></ShowAnnouncement></>:<></>
                    }
              
                </div>
                

            </div>
            
            
            
          
            
        </div>
    );
};

export default Home;