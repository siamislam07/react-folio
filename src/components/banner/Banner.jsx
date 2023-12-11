
const Banner = () => {
    // style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}
    return (
        <div className="   ">
            <div className="hero min-h-screen bg-blue-800" >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">hi I'm</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="avatar">

                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                            <a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by NajmunNahar - Flaticon</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;