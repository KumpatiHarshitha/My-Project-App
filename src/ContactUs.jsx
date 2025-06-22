import 'react-toastify/dist/ReactToastify.css';
function ContactUs()
{
    return(
        <>
       <title>Contact Us - FreshCart</title>
      <h1>Contact Us</h1>
     <p><strong>Phone:</strong> +91-9876543210</p>
       <p><strong>Email:</strong> support@freshcart.com</p>
       <p><strong>Address:</strong> 123 Market Street, Hyderabad, Telangana, India</p>
         <p><strong>Operating Hours:</strong> Mon–Sat: 9 AM – 9 PM</p>
     <form class="contact-form">
      <h2>Send Us a Message</h2>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Submit</button>
    </form>

    <div class="social-links">
      <h2>Connect with Us</h2>
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>




        </>
    )
}
export default ContactUs;