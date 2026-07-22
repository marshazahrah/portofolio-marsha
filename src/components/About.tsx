import { Briefcase, GraduationCap } from 'lucide-react';

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
              Fresh graduate jurusan Informatika dengan pengalaman akademik dalam berbagai proyek pengembangan 
              sistem informasi selama masa perkuliahan, termasuk pengembangan aplikasi mobile, website, game 2D, 
              serta desain UI/UX. Berpengalaman mengerjakan proyek baik secara individu maupun dalam tim, serta 
              memahami alur pengembangan sistem dan aplikasi mulai dari analisis kebutuhan, perancangan, 
              implementasi, hingga pengujian. 
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Terbiasa merancang solusi digital, menyusun dokumentasi, serta melakukan pengujian untuk memastikan 
              kualitas dan fungsionalitas sistem. Selain itu, mampu menangani berbagai tugas administratif, 
              seperti mengelola dokumen dan menyusun laporan. Memiliki kemampuan berpikir analitis, teliti dalam 
              setiap tahapan pekerjaan, cepat beradaptasi, serta mampu bekerja secara efektif baik secara mandiri 
              maupun kolaboratif dalam tim.
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
                      Bachelor of Informatics | GPA: 3.57/4.00
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
                    Staf Divisi Kesehatan - PORSEMATIK 2022
                  </p>
                  <p className="text-sm text-gray-500">
                    Bertanggung jawab dalam melakukan pemeriksaan kesehatan, memberikan pertolongan pertama, 
                    serta memastikan kesiapan fasilitas dan kebutuhan medis selama kegiatan berlangsung.
                  </p>
                  <p className="font-semibold text-gray-600 mt-1">
                    Staf Komisi B - INPUT 2023
                  </p>
                  <p className="text-sm text-gray-500">
                    Berperan dalam penyusunan aturan, SOP, dan pedoman kedisiplinan kegiatan, serta melakukan 
                    koordinasi monitoring dan evaluasi untuk mendukung kelancaran acara.
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
