import Head from 'next/head'
import NavBar from '@/components/NavBar'
import Main from '@/components/Main'
import About from '@/components/about'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
export default function Home() {
  return (
    <div>
      <Head>
        <title> NextJS Dev </title>
      </Head>
      <NavBar />
      <Main />
      <About />
      <Skills />
      <Projects/>
      <Contact />
      </div>
  )
}
