import styles from "./ProjectsStyles.module.css"
import ProjectCard from "../../common/ProjectCard"
import androidKernel from "../../assets/android-kernel.png"
import githubAction from "../../assets/github-action.png"
import api from "../../assets/api.jpg"
import adminDashboard from "../../assets/admin-dashboard.png"
import twrp from "../../assets/twrp.jpg"
import scriptCompile from "../../assets/script-compile.webp"

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={androidKernel}
          link="https://github.com/romiyusnandar/android_kernel_xiaomi_msm8953"
          h3="Android Custom Kernel"
          p="The kernel has modifed and got improvment in performance and battery backup"
        />
        <ProjectCard
          src={githubAction}
          link="https://github.com/romiyusnandar/kernel_build_action"
          h3="Github Action"
          p="Github action for building android kernel"
        />
        <ProjectCard
          src={twrp}
          link="https://github.com/romiyusnandar/device_xiaomi_sweet-twrp"
          h3="TWRP"
          p="Custom recovery for android"
        />
        <ProjectCard
          src={api}
          link="https://orion-apiv1.vercel.app/"
          h3="OrionOS API"
          p="API for some projects"
        />
        <ProjectCard
          src={adminDashboard}
          link="https://github.com/romiyusnandar/fullstack_admin_dashboard_FE"
          h3="Admin Dasboard"
          p="Fullstack project admin dashboard project that's can manage users, products, and customers"
        />
        <ProjectCard
          src={scriptCompile}
          link="https://github.com/romiyusnandar/script-compile"
          h3="Script Compile"
          p="Script for compiling android kernel"
        />
      </div>
    </section>
  )
}

export default Projects