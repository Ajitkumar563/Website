export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        
        <div className="max-w-md w-full bg-black text-white p-12 rounded-3xl shadow-2xl text-center">
          
          <h2 className="text-3xl font-bold mb-6">Consulting Package</h2>

          <p className="text-5xl font-bold mb-8">₹25,000+</p>

          <ul className="space-y-4 text-gray-300 mb-10">
            <li>✔ AI Lead Workflow Setup</li>
            <li>✔ WhatsApp Automation</li>
            <li>✔ Email Follow-up System</li>
            <li>✔ CRM Integration</li>
          </ul>

          <a
            href="https://wa.me/918920581628"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Get Started
          </a>

        </div>

      </div>
    </section>
  );
}