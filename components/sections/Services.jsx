export default function Services() {
  return (
    <section
      id="services"
      className="py-32 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          What I Do
        </h2>

        <p className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          I design AI automation systems that handle your leads, follow-ups,
          and CRM workflows — so you can focus on closing.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left">
            
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white text-xl">
              🚀
            </div>

            <h3 className="text-xl font-semibold mb-3">
              Lead Automation
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Capture, qualify, and respond to new leads instantly — 24/7 —
              without manual follow-ups.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left">
            
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white text-xl">
              💬
            </div>

            <h3 className="text-xl font-semibold mb-3">
              WhatsApp & Email Automation
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Automated follow-up sequences, reminders, and smart responses
              that increase conversion rates.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-2xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-left">
            
            <div className="mb-6 w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white text-xl">
              📊
            </div>

            <h3 className="text-xl font-semibold mb-3">
              AI CRM Setup
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Structured sales pipelines that track every lead and ensure
              no opportunity is missed.
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}