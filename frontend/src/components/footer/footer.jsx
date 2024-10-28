import './footer.css';

const Footer = () => {
  return (
<footer className="footer border-top">
    <div className="row">
      <div className="footer_sec1 col-4 mb-3">
        <div className='footer_section'>Section</div>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="footer_sec2 col-8 mb-3">
        <form>
          <h5>Subscribe for further updates</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="subs_input form-control" placeholder="Email address"/>
            <button className="subs_button btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="rights d-flex flex-column justify-content-between border-top">
      <p className='rights'>© 2024 Company, Inc. All rights reserved.</p>
      <ul className="rights list-unstyled d-flex justify-content-center">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-twitter-x"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-instagram"></i></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-facebook"></i></a></li>
      </ul>
    </div>
  </footer>
  )
}

export default Footer
