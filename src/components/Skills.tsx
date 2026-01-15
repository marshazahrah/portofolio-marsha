import { Code, Database, Layout, Palette, Rocket, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Technical Skills',
      skills: ['Usability Testing', 'Manual Testing & Test Case Design', 'Basic Frontend Development'],
    },
    {
      icon: Layout,
      title: 'Design Tools',
      skills: ['Figma', 'Canva', 'Draw.io'],
    },
    {
      icon: Database,
      title: 'Technologies',
      skills: ['UI/UX', 'HTML', 'CSS','JavaScript (Basic)']
    },
    {
      icon: Palette,
      title: 'Creative',
      skills: ['Wireframing', 'Prototyping', 'UI Design', 'Design Thinking'],
    },
    {
    icon: Rocket,
    title: 'Productivity Tools',
    skills: ['Microsoft Word', 'Microsoft Excel', 'Microsoft PowerPoint', 'Google Workspace (Docs, Sheets, Slides)'],
    },
    {
      icon: Users,
      title: 'Soft Skills',
      skills: ['Communication', 'Teamwork', 'Willing to learn', 'Attention to detail', 'Problem Solving'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-emerald-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-emerald-100 p-3 rounded-lg mr-4">
                    <Icon className="text-emerald-600" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-600 flex items-center"
                    >
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-md border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Key Characteristics
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5+</div>
              <p className="text-gray-600">Academic & Personal Projects</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
              <p className="text-gray-600">Test Cases Created</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">3+</div>
              <p className="text-gray-600">UI/UX Case Studies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
