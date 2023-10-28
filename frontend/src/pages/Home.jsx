import React from 'react'
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import wordlImg from '../assets/images/world.png'
import Subtitle from './../shared/Subtitle'

const Home = () => {
  return <>(
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Wonosobo Asri'} />
                <img src={wordlImg} alt="" />
              </div>
              <h1>Traveling <span className='highlight'>memories</span>
              </h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, quidem?</p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    )
  </>
}

export default Home