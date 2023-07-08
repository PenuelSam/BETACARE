import { ContactButtons } from "../../data"
import Line from '../../assets/Figma-Images/Care/Line.png'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const ContactForm = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      delay: 200,
      easing: "ease-in-out", 
    })
    Aos.refresh()
  },[])

  return (
    <div className=" bodyBg">
        <div data-aos="zoom-in" className=" maxcontainer2 grid  grid-cols-2 lg:grid-cols-1 place-items-center">
          <div className="lg:hidden">
          <div className="relative z-[5]">
                {ContactButtons.map((btn, i) => (
                  <img key={i} src={btn.button} alt="" className="mb-5  cursor-pointer" />
                ))}
          </div>
          <img src={Line} alt="" className="absolute left-[30%] top-[140%] z-[2]"/>
          </div>
              
          <form action="" className="sm:flex sm:flex-col sm:items-center sm:justify-center">
            <div className="relative">
              <Person2OutlinedIcon sx={{fill: 'black', position: 'absolute', top: '20%', left: '5%' }}/>
              <input type="text" placeholder="Name" className="inputStyle"/>
            </div>
            <div className="relative">
              <EmailOutlinedIcon sx={{fill: 'black', position: 'absolute', top: '20%', left: '5%' }} />
              <input type="email" placeholder="Email" className="inputStyle"/>
            </div>
            <div className="relative">
              <PhoneOutlinedIcon sx={{fill: 'black', position: 'absolute', top: '20%', left: '5%' }} />
              <input type="text" placeholder="Number" className="inputStyle" />
            </div>
            <div className="relative">
              <LocationOnOutlinedIcon sx={{fill: 'black', position: 'absolute', top: '20%', left: '5%' }} />
              <input type="text" placeholder="Location" className="inputStyle" />
            </div>
            <div className="relative">
              <ContactSupportOutlinedIcon sx={{fill: 'black', position: 'absolute', top: '7%', left: '5%' }} />
              <textarea name="" id="" cols="30" rows="10" placeholder="message" className="textareaStyle" />
            </div>
            <button type="submit" className="formSubmit">Submit</button>
          </form>
        </div>
    </div>
  )
}

export default ContactForm