function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-bold mb-4">About Us</h3>
          <p className="text-sm">
            We as a devoloper want to make our community big and effective
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="list-none">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/project" className="text-gray-400 hover:text-white">
                Project
              </a>
            </li>
            <li>
              <a href="services" className="text-gray-400 hover:text-white">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <p className="text-sm">
            Barahi Kala Barahi Newada Varanasi Uttar Pradesh
          </p>
          <p className="text-sm">Email: rohitmcmt90@gmail.com</p>
          <p className="text-sm">Phone: +91 7071853247</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 ROHIT. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
