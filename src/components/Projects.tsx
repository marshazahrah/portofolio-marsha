import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Healthio',
      description:
        'Mengembangkan desain UI/UX aplikasi kesehatan fisik Healthio menggunakan metode Human-Centered Design (HCD), mencakup proses riset pengguna, perancangan alur dan antarmuka, pembuatan wireframe hingga prototype, serta pengujian kegunaan dan tampilan aplikasi.',
      tags: ['UI/UX','Human Centered Design', 'Problem Solving','Figma','Draw.io','Usability Testing'],
      image: '/portofolio-marsha/projects/healthio.png',
      liveUrl: 'https://www.figma.com/design/rwZJu80a51E2ynJz20Xmyv/Healthio?node-id=0-1&t=mNKsc31zfrYh8o9E-1',
      //githubUrl DIHAPUS/TIDAK ADA
    },
    {
      title: 'ArtIst',
      description:
        'Mengembangkan aplikasi mobile ArtIst bersama tim sebagai platform etalase karya digital bagi artist dan digital creator. Aplikasi ini memungkinkan pengguna mengunggah karya, berinteraksi melalui fitur like dan komentar, serta membagikan profil. Selain itu, tersedia fitur auto-generate caption untuk membantu penyajian karya agar lebih menarik dan informatif.',
      tags: ['Kotlin', 'Firebase', 'AndroidStudio', 'CHATGPT API', 'Draw.io'],
      image: '/portofolio-marsha/projects/poster_artist.png',
      liveUrl: 'https://youtu.be/X96tlbbVA8M?si=RZ5sMK7wDG70aP1n',
      githubUrl: 'https://github.com/naelafauzul/ArtIs',
    },
    {
      title: 'Sistem Informasi Kependudukan',
      description:
        'Melakukan redesign antarmuka Sistem Informasi Kependudukan Desa dalam kegiatan KKN untuk meningkatkan kerapian, keterbacaan, dan kemudahan penggunaan. Berkontribusi dalam penyusunan struktur data kependudukan, input dan validasi data warga menggunakan Microsoft Excel, serta penyesuaian format data agar siap digunakan dan dikelola oleh perangkat desa.',
      tags: ['UI Design', 'Figma', 'Design System','Prototyping','Microsoft Excel'],
      image: 'sik.png',
      liveUrl: 'https://www.figma.com/design/PQhAqqwH0Xe0MmvAzENwH1/Prototype-SIK?node-id=0-1&t=AgqWptqXFmPj270R-1',
      //githubUrl DIHAPUS/TIDAK ADA
    },
    {
      title: 'Dish Dash',
      description:
        'Mengembangkan game simulasi memasak 2D Dish Dash bersama tim (Synergy) dengan elemen kompetisi dan tantangan berbatas waktu. Berkontribusi dalam perancangan konsep dan gameplay, implementasi alur permainan seperti tutorial, sistem resep, dan manajemen waktu, serta melakukan pengujian dan deployment menggunakan Unity untuk memastikan game berjalan sesuai konsep dan memberikan pengalaman bermain yang imersif.',
      tags: ['Game Design', 'Unity'],
      image: 'postergim.png',
      liveUrl: 'https://example.com',
      //githubUrl DIHAPUS/TIDAK ADA
    },
    {
      title: 'Cerdimaju x Purwacaraka',
      description:
        'Mengembangkan konsep sistem informasi pengelolaan keuangan untuk Purwacaraka bersama tim (Co-Elite) guna mendukung pengelolaan usaha yang lebih terstruktur. Berkontribusi dalam perancangan fitur pencatatan pendapatan dan pengeluaran, pembuatan laporan keuangan, serta penyusunan konsep sistem dan dokumentasi proyek sesuai kebutuhan pengguna.',
      tags: ['ERD', 'SQL', 'Project-based Learning','Data Visualization'],
      image: 'cerdimaju1.png',
      liveUrl: 'https://www.youtube.com/watch?v=2q42H8svDvQ',
      githubUrl: 'https://github.com',
    },
    {
      title: 'SocialMusic',
      description:
        'Mengembangkan aplikasi web SocialMusic bersama tim sebagai platform media sosial berbasis hobi musik untuk memfasilitasi interaksi dan kolaborasi antar musisi. Berkontribusi dalam perancangan fitur utama seperti home feed, akun pengguna, pertemanan, chat, dan pengaturan akun, serta mendukung pembentukan relasi dan kolaborasi berdasarkan minat musik yang sama.',
      tags: ['HTML', 'CSS', 'MYSQL','PhpMyAdmin','Visual Studio Code','Web Hosting'],
      image: 'socialmusic.png',
      liveUrl: 'https://youtu.be/OuZvKwfkLaA?si=LFETywPfhf7UJLqG',
      //githubUrl DIHAPUS/TIDAK ADA
    },
    {
      title: 'Nakia',
      description:
        'Merancang UI/UX aplikasi Nakia bersama tim (Interbrand) sebagai platform pengaduan berbasis mobile bagi perempuan korban diskriminasi dan kekerasan seksual. Rancangan difokuskan pada kemudahan pelaporan, penyampaian informasi, serta akses fitur edukasi melalui alur dan antarmuka yang sederhana, aman, dan berpusat pada kebutuhan pengguna.',
      tags: ['Design Thinking', 'UI Design', 'Wireframing', 'Prototyping'],
      image: 'nakia.png',
      liveUrl: 'https://link-demo-atau-figma-atau-youtube',
      //githubUrl DIHAPUS/TIDAK ADA
      },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-shadow border border-gray-200 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-600 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="View live project"
                  >
                    <ExternalLink size={20} />
                  </a>
                  {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-emerald-600 p-3 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="View source code"
                >
                <Github size={20} />
              </a>
            )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
