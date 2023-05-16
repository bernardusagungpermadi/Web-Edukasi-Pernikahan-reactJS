
import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../Why-Choose-Us-Section/chooseuse.css'
import chooseImg from '../../asset/Download People Working On Project On Laptop for free.png'

import ReactPlayer from 'react-player'

const Chooseuse = () => {
    const [showVidio,setShowVidio] = useState(false)
  return <section>
    <Container>
        <Row>
            <Col lg="6">
            <div className="choose__content">
                <h2>Why Choose Use</h2>
                <p>"Kenapa harus memilih kami? Kami adalah aplikasi edukasi pernikahan berbasis web yang didedikasikan untuk membantu Anda dalam persiapan pernikahan yang sempurna. 
                    Dengan berbagai fitur dan layanan yang kami tawarkan, kami memberikan pengalaman yang unik dan bermanfaat bagi calon pengantin."</p>
            </div>
            </Col>

            <Col lg="6">
                <div className="choose__img">
                    {
                        showVidio ? <ReactPlayer url='https://www.youtube.com/watch?v=3P7ORA_2slQ' controls width="100%" height= "300px"/> : <img src={chooseImg} alt="" className='w-100'/>
                    }

                    {
                        !showVidio && <span className='play__icon' onClick={()=>setShowVidio(!showVidio)}><i class="uil uil-play-circle"></i></span>
                    }
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Chooseuse