import { Mail, MapPin, MessageCircle  } from 'lucide-react';

export default function Contact() {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm open to full-time opportunities, internships, and project collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <Mail className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:your.email@example.com"
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      marshazahrahfatharani@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MessageCircle className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 hover:text-emerald-600 transition-colors"
                    >
                      (+62) 81347096436
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-emerald-100 p-3 rounded-lg">
                    <MapPin className="text-emerald-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600">DI Yogyakarta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">
                Why Work With Me?
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-600">
                    Responsible and organized in managing tasks and meeting deadlines.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-600">
                    Able to work effectively both independently and in a team.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 mt-2"></span>
                  <span className="text-gray-600">
                    Enthusiastic about learning new skills and taking on new challenges.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
