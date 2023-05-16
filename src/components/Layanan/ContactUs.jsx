import React from 'react'
import { Container, Col } from 'reactstrap'
import '../Layanan/contact.css'



function ContactUs() {
const maps ='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15887.25758329813!2d105.25760924270608!3d-5.445128194642162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db9a8fd7c177%3A0x258f709a255ddb92!2sDinas%20Pemberdayaan%20Perempuan%20Dan%20Perlindungan%20Anak%20Provinsi%20Lampung!5e0!3m2!1sid!2sid!4v1680504242303!5m2!1sid!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
  return (
    <Container className='contact padding'>
        <div className="contact-container shadow  flex">
            <Col lg='6' md='6'>
                <div className="left row">
                    <iframe  title ='maps' src={maps}></iframe>
                </div>
            </Col>

            <Col lg='6' md='6'>
                <section >
                <div className="right row">
                    <h1>Contact Us</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, voluptatibus.</p>

                    <div className="items">
                        <div className="box">
                            <h5>ADDRESS :</h5>
                            <p>Jl. Wr Monginsidi No 69 Bandar Lampung Lampung</p>
                        </div>
                        <div className="box">
                            <h5 >Email :</h5>
                            <p>dinasppa@lampungprov.go.id</p>
                        </div>

                        <div className="box">
                            <h5>Phone :</h5>
                            <p>(0721) 489983</p>
                        </div>
                    </div>
                    <form action="">
                        <div className="flexSB">
                            <input type="text" placeholder='Nama' />
                            <input type="text" placeholder='Email' />
                        </div>
                        <input className='subject-input'type="text" placeholder='Subject' cols="30"/>
                        <textarea name="Message" id="" cols="30" rows="10" placeholder='Create a message here...'>
                            
                        </textarea>
                        <button className='primary-btn'>KIRIM PESAN</button>
                    </form>
                </div>
                 </section>
            </Col>
        </div>  
    
    </Container>
  )
}

export default ContactUs
