import {useState} from 'react'
import { Link, useLoaderData } from "react-router-dom";
import type { Project } from "../types/types";
import SectionHeader from "../components/ui/SectionHeader/SectionHeader";
import Modal from '../components/ui/Modal/Modal';

const Projects = () => {
    const [selected, setSelected] = useState<Project | null>(null)
    
  const [open, setOpen] = useState(false);
 
    const handleOpen = (project: Project) => {
        setOpen(true)
        setSelected(project)
    };
    const handleClose = () => {
        setOpen(false)
        setSelected(null)
    };
    
    const projects = useLoaderData() as Project[]
    return (
        <div className="bg-white-primary dark:bg-dark-primary dark:text-white-primary pt-16 min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4">
                    <SectionHeader
                        header='My Latest'
                        headerSpan='Projects'
                        subheader='I have hands on experience with industry standard full-stack and frontend projects.'
                />
                <div className="w-full grid grid-cols-250 gap-3 grid-flow-dense relative">
                    {
                        projects.map(project => (
                            <div data-aos="zoom-in-up" key={project.id} className={`group/project p-1 bg-white-secondary dark:bg-dark-secondary border border-border-primary dark:border-border-secondary flex flex-col justify-between ${(project.id === 2 || project.id === 6) && 'md:col-span-2'}`}>
                                <div className=" overflow-hidden h-48 relative">
                                    <img src={project.thumbnail} className="w-full h-auto duration-[3000ms] translate-y-0 group-hover/project:translate-y-custom" alt="" />
                                </div>
                                <div className="flex flex-col gap-4 mt-4">
                                    <div className='flex justify-between'>
                                    <h1 className="text-md font-bold">{project.title}</h1>
                                    <div className="flex gap-1">
                                        <button onClick={() => handleOpen(project)} className='bg-accent-primary dark:bg-accent-secondary text-white-primary text-sm px-1 rounded-full'>Details</button>
                                        <Link to={`${project.links?.live}`} target="_blank" className='bg-accent-primary dark:bg-accent-secondary text-white-primary text-sm px-1 rounded-full'>Live Demo</Link>
                                    </div>
                                    </div>
                                    <div>
                                    <h1 className="text-xs font-bold mb-2">{project.slug}</h1>
                                    <p>{project.description.slice(0, 60)}...</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Modal project={selected} open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </div>
    );
};

export default Projects;