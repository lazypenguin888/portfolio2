import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme'
import Header from '../Header/Header'
import About from '../About/About'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'

const Main = () => {
    const [{ themeName }] = useContext(ThemeContext)

    return (
        <div id='top' className={`${themeName} app`}>
        <Header />

        <main>
            <About />
            <Projects />
            {/* <Skills /> */}
            <Contact />
        </main>

        {/* <ScrollToTop />
        <Footer /> */}
        </div>
      )
}

export default Main
