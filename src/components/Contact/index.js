import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Social from '../Social'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs
            .sendForm(
                'service_m3whwdx',
                'template_tszyci5',
                form.current,
                'w9HbLxlk__GJPN_5h'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            stringArray={[
                                'C',
                                'o',
                                'n',
                                't',
                                'a',
                                'c',
                                't',
                                ' ',
                                'm',
                                'e',
                            ]}
                            index={15}
                        />
                    </h1>
                    <p>
                        If you have any requests or questions, don't hesitate to
                        contact me using below form.
                    </p>
                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        placeholder="Name"
                                        type="text"
                                        name="to_name"
                                        required
                                    />
                                </li>
                                <li className="half">
                                    <input
                                        placeholder="Email"
                                        type="email"
                                        name="from_name"
                                        required
                                    />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input
                                        type="submit"
                                        className="flat-button"
                                        value="SEND"
                                    />
                                </li>
                            </ul>
                        </form>
                    </div>
                    <Social className="social-contact" />
                </div>
                <div className="info-map">
                    Kraiovyi Denys
                    <br />
                    Ukraine
                    <br />
                    Shevchenko 101, 53200 <br />
                    Nikopol, Dnipropetrovsk Oblast <br />
                    <br />
                    <span>kraya.work@gmail.com</span>
                </div>
                <div className="map-wrap">
                    <MapContainer
                        center={[47.564297766353924, 34.396692698354464]}
                        zoom={13}
                    >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker
                            position={[47.564297766353924, 34.396692698354464]}
                        >
                            <Popup>
                                Denis lives here, come over for a cup of coffee
                                :)
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact
