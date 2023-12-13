import react from '../../assets/icons/react.png'
import fb from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'

const Skills = () => {
    return (
        <div className="mt-56 ">
            <h1 className="text-center text-4xl font-bold mb-9">My Skills</h1>
            <div className="max-w-2xl  mx-auto">
                <div className="avatar animate-spin  mr-8 mx-auto">
                    <div className="w-24 mx-auto rounded-full  ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={react} />
                    </div>
                </div>
                <div className="avatar mr-8 animate-pulse">
                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://th.bing.com/th/id/OIP.V7sGzOy5sRVMsMgqTByRkgHaEc?rs=1&pid=ImgDetMain" />
                    </div>
                </div>
                <div className="avatar mr-8 animate-bounce">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={fb} />
                    </div>
                </div>
                <div className="avatar mx-auto mr-8">
                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
                    </div>
                </div>
                <div className="avatar mx-auto mr-8">
                    <div className="w-24 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={css} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;