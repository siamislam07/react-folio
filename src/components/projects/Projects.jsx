import project1 from '../../assets/img/projects01.png'

const Projects = () => {
    const myProjectData = [
        {
            name: "Technology and Electronic",
            type: "e-commerce site",
            time: "Complete in - 4days",
            image: "https://i.ibb.co/P5tR3JP/projects01.png",
            github: "https://github.com/siamislam07/Technology-and-Electronic",
            
            live: "https://technology-and-electroni-96f71.web.app/",
            
        },
        {
            name: "Dream Jobs",
            type: "Job finding site",
            time: "Complete in - 5days",
            image: "https://i.ibb.co/ZVmSxgq/project2.png",
            github: "https://github.com/siamislam07/Career-Finder-client",
            
            live: "https://a11-career-finder.web.app/",
            
        },
        {
            name: "Health Hub",
            type: "Diagnostic center management",
            time: "Complete in - 7day",
            image: "https://i.ibb.co/QnWLjvK/3rd-project.png",
            github: "https://github.com/siamislam07/Diagnostic-Center-Client",
            
            live: "https://diagnostic-center-8422e.web.app/",
            
        },
    ]


    return (
        <div className="w-full max-w-7xl mx-auto mt-24">
            <h1 className="text-center text-4xl font-bold mb-3">My Projects</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6 ">
                {
                    myProjectData.map((info, i) => (
                        <div key={i} className=" w-full p-3  bg-base-100 shadow-xl">

                            <div className='w-full h-[300px]'>
                                <a href={info?.live} target='_blank' rel="noreferrer" className=' rounded-md '>
                                    <img className='w-full h-full object-cover object-top hover:object-bottom transition-all duration-[3000ms] rounded-md' src={info?.image} alt="project image" />
                                </a>
                            </div>

                            <div className="card-body">
                                <h2 className="card-title">{info.name}</h2>
                                <p>{info.type}</p>
                                <p>{info.time}</p>
                                <div className=" flex  gap-5">
                                    <a href={info?.github}><button className="btn btn-primary hover:-translate-y-2">Github</button></a>
                                    <a href={info?.live}><button className="btn btn-outline hover:-translate-y-2">Live</button></a>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default Projects;