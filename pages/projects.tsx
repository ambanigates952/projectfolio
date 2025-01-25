import { FC } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';
import { projects } from '../lib/projects';

const Projects: FC = () => {
  return (
    <>
      <Head>
        <title>Projects - Rohit Sharma</title>
      </Head>
      <Navbar />
      <main className="pt-20 bg-black min-h-screen">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-white text-center mb-16">Projects</h1>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects; 