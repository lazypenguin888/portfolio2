import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import './About.css'

const About = () => {

  return (
    <div className='about center'>
      <h1>
        Hey, I'm <span className='about__name'>LazyPenguin888.</span>
      </h1>
    
      <h2 className='about__role'>Software Developer</h2>
      <p className='about__desc'>
        I am a computer science student at Brown aspiring to become a Lead Developer. Here is my journey learning and coding front-end programming with exploration of UI/UX concepts.
      </p>

      <div className='about__contact center'>
          <a href="https://example.com">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>

          <>
            <a
              href='https://github.com'
              aria-label='github'
              className='link link--icon'
            >
              <GitHubIcon />
            </a>

            <a
              href='https://linkedin.com'
              aria-label='linkedin'
              className='link link--icon'
            >
              <LinkedInIcon />
            </a>
          </>
      </div>
    </div>
  )
}

export default About