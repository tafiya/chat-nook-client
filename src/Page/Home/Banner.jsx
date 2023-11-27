import banner from '../../assets/image/forumbackground.jpg'

const Banner = () => {
    return (
        <div className="hero h-[600px]" style={{backgroundImage: `url(${banner})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Chat Nook</h1>
            {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            <form action="">
                <input type="text" name='tagName' className="input mr-4 input-bordered input-success h-14 w-full max-w-xs" placeholder=' Search here...' />
                <input type="submit" className="btn btn-outline  btn-accent" value="Search" />
            </form>
          </div>
        </div>
      </div>
    );
};

export default Banner;