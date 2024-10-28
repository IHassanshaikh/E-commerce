import "./about.css"
import Method from '../home/order/method'

const About = () => {
  return (
    <div className="">
      <div className="about container-fluid d-flex">
        <div className="about_main">ABOUT US</div>
        <p className="aboutus_content">Welcome to Shopiee, your premier destination for the latest and greatest in electronics. Founded with a passion for technology and innovation, we are committed to bringing you a curated selection of high-quality gadgets, devices, and accessories. From cutting-edge smartphones and laptops to home entertainment systems and smart home solutions, we offer a wide range of products to meet your tech needs.</p>

        <p className="aboutus_content m-4">Our mission is to provide an exceptional shopping experience through our user-friendly website, competitive prices, and unparalleled customer service. We work closely with leading brands and manufacturers to ensure that our inventory is always up-to-date with the newest releases and the most sought-after items.</p>
      </div>
      <Method></Method>
    </div>
  )
}

export default About
