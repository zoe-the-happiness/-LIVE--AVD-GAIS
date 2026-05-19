export function Contact() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-6">Contact Us</h1>
        <p className="text-lg leading-8 text-gray-600 max-w-2xl mx-auto text-center mb-16">
          Have questions or need assistance? Reach out to our central office or find your district representative.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Head Office</h3>
            <div className="space-y-4 text-gray-600 border-l-2 border-blue-600 pl-4">
              <p>
                <strong>Address:</strong><br />
                Association of Veterinary Doctors<br />
                Kolkata, West Bengal
              </p>
              <p>
                <strong>Email:</strong><br />
                <a href="mailto:info@avdwb.org" className="text-blue-600 hover:underline">info@avdwb.org</a>
              </p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white rounded-md px-4 py-2 font-medium hover:bg-blue-500 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
