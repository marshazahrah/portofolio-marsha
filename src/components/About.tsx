import { Briefcase, GraduationCap, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Fresh graduate dengan keterlibatan dalam beragam proyek pengembangan sistem informasi selama masa perkuliahan, mencakup pengembangan aplikasi mobile, website, game 2D, dan desain UI/UX aplikasi. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Terlibat dalam proses desain mulai dari riset kebutuhan, pembuatan wireframe, prototyping, hingga usability testing untuk memastikan solusi yang intuitif dan mudah digunakan. Selain UI/UX, memiliki pengalaman dalam pengembangan aplikasi mobile, website, serta proyek sederhana seperti game 2D. Terbiasa mengikuti alur pengembangan sistem mulai dari analisis kebutuhan, perancangan, implementasi, hingga pengujian. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Mampu berpikir analitis, teliti dalam setiap tahapan pekerjaan, serta bertanggung jawab dalam menyelesaikan tugas hingga tuntas. Pengalaman proyek selama kuliah mendukung kemampuan bekerja secara efektif dalam tim maupun secara mandiri.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <GraduationCap className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Education</h3>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-600">
                      Bachelor of Informatics
                    </span>
                     <p className="text-sm text-gray-500">
                       Sep 2021 – Dec 2025
                     </p>
                    Universitas Islam Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-100 p-3 rounded-lg">
                  <Briefcase className="text-emerald-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Volunteer</h3>
                  <p className="font-semibold text-gray-600 mt-1">
                    PORSEMATIK 2022
                  </p>
                  <p className="text-sm text-gray-500">
                    Staf Divisi Kesehatan
                  </p>
                  <p className="font-semibold text-gray-600 mt-1">
                    INPUT 2023
                  </p>
                  <p className="text-sm text-gray-500">
                    Staf Komisi B
                  </p>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}
