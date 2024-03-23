import { TypeAnimation } from 'react-type-animation';
import banner from '../../assets/image/forumbackground.jpg'
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import usePosts from '../../hooks/usePosts';
import Tags from './Tags/Tags';
import Posts from './Posts/Posts';
import { Toaster } from 'react-hot-toast';
const Banner = () => {
  const [posts]=usePosts();
  // const [searchQuery, setSearchQuery] = useState('');
  const [tagFilter, setTagFilter] = useState('');

  const handleTagFilterChange = (event) => {
    setTagFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    event.preventDefault();
   
  };

  const filteredItems = posts.filter(post => post.tags.includes(tagFilter));
 
  console.log(filteredItems);
  useEffect(() => {
    AOS.init({})
  }, [])
    return (
      <div>
       
          <div className="hero h-[600px]" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
          <TypeAnimation 
                sequence={[
                    // Same substring at the start will only be typed once, initially
                    'Chat Nook',
                   3000,
                    
                 
                ]}
                speed={20}

                style={{ fontSize: '2em'  }}
                repeat={Infinity}
                wrapper='span'
                className=' text-white text-6xl font-bold  '
            />
       
            <form className='mt-8' onSubmit={handleSearchChange} data-aos="zoom-in-up" data-aos-duration="2000" action=" ">
              <input type="text"
                placeholder="Search by tag name..."
                value={tagFilter}
                onChange={handleTagFilterChange}
                className="input my-4 mr-4 text-black input-bordered input-success w-[300px] sm:w-[400px]" />
              
            </form>
          </div>
        </div>
      </div>
      <div className="  max-w-screen-xl mx-auto ">
           
           <Tags></Tags>
               <Posts posts={filteredItems}></Posts>
         
           </div> 

        
      </div>
      
    );
};

export default Banner;