const Contact = () => {
  return (
    <div className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-12">Contact page</h2>

      <iframe
        title="Google Maps - Madhavji Sweet Shop Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13996.078004381464!2d76.35031482659179!3d29.315723158907746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3911bfe8c09d7277%3A0x4da7290f29c6c3b3!2sMain%20Bazar%2C%20Jind%2C%20Haryana!5e0!3m2!1sen!2sin!4v1676829054772!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="mb-8"
      ></iframe>


      <div className="container mx-auto mt-24 max-w-2xl">
        <form
          action="https://formspree.io/f/xeqdgwnq"
          method="POST"
          className="mx-auto max-w-md"
        >
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            className="w-full px-4 py-2 mb-4 border rounded"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
            className="w-full px-4 py-2 mb-4 border rounded"
          />

          <textarea
            name="Message"
            cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter your message"
            className="w-full px-4 py-2 mb-4 border rounded"
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="w-full px-6 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-white hover:border hover:text-blue-500 transform hover:scale-90 transition duration-200"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
