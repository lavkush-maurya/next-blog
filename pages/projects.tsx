import { PageSeo } from 'components/SEO'
import { ProjectCard } from '~/components/ProjectCard'
import { projectsData } from '~/data/projectsData'
import { siteMetadata } from '~/data/siteMetadata'

export default function ProjectsPage() {
  const workProjects = projectsData.filter((project) => project.type === 'work')
  const sideProjects = projectsData.filter((project) => project.type === 'self')
  const pageDescription = 'My open-source side projects and stuff built with colleagues at work'

  return (
    <>
      <PageSeo title={`Projects - ${siteMetadata.author}`} description={pageDescription} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{pageDescription}</p>
        </div>
        <div className="container py-12">
          <ProjectsSection title="Work" projects={workProjects} />
          <ProjectsSection title="Side projects" projects={sideProjects} />
        </div>
      </div>
    </>
  )
}

function ProjectsSection({ title, projects }) {
  return (
    <div className="space-y-2 pb-8 pt-6 md:space-y-5">
      <h3 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <div className="-m-4 flex flex-wrap">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  )
}
