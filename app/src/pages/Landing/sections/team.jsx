
import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

// TeamCard Component
const TeamCard = ({ img, name, role, socialLinks }) => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 w-full max-w-sm">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/50 group-hover:to-blue-900/50 transition-all duration-300" />
      
      <div className="relative p-6 flex flex-col items-center">
        <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-white shadow-lg transform group-hover:scale-105 transition-all duration-300">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {name}
          </h3>
          <p className="mt-2 text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
            {role}
          </p>
        </div>

        <div className="mt-4 flex justify-center space-x-3">
          {socialLinks.github && (
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
              <Github className="w-5 h-5" />
            </a>
          )}
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socialLinks.email && (
            <a href={`mailto:${socialLinks.email}`}
               className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-all duration-300">
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/80 to-purple-600/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
        <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <p className="text-sm mb-4">
            "Passionate about creating innovative solutions and pushing the boundaries of what's possible."
          </p>
          {socialLinks.linkedin && (
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-colors duration-300">
              <span className="mr-2">View Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Satyam Kumar Kesarwani",
      role: "Team Leader",
      img: "/img.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/satyam-kumar-kesarwani-763b61293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/satyamkes",
        email: "satyamkesarwani2020@gmail.com"
      }
    },
    {
      name: "Nikunj Chauhan",
      role: "Lead Frontend Developer",
      img: "/nikunj.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/nikunj-chauhan-9781832b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/nkca122",
        email: "nkca122@gmail.com"
      }
    },
    {
      name: "Sayan Jyoti Das",
      role: "Lead Backend Developer",
      img: "/sayan.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sayanjyotidas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "https://github.com/sayandas",
        email: "sayan@example.com"
      }
    },
    {
      name: "Sakina Khan",
      role: "Lead Designer",
      img: "/sakina.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sakina-khan-a03968278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
        email: "sakina@example.com"
      }
    },
    {
      name: "Sarafaraj Nasardi",
      role: "Backend Developer",
      img: "/sarafaraj.jpg",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/sarafaraj-nasardi-7722b31b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        github: "",
        email: "sarafaraj@example.com"
      }
    }
  ];

  return (
    // <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    //     <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none" />
        
    //     <div className="text-center relative z-10 mb-24">
    //       <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
    //         transform hover:scale-105 transition-all duration-300 mb-12">
    //         Meet Our Team
    //       </h1>
    //       <div className="mt-8 max-w-2xl mx-auto space-y-6">
    //         <p className="text-xl text-gray-600 italic">
    //           "From Small Steps to Giant Leaps: Illuminate Your Progress!"
    //         </p>
    //         <p className="mt-6 text-lg text-gray-600">
    //           Our dedicated team of professionals works tirelessly to bring you the best progress tracking experience.
    //           Each member brings unique expertise and passion to make Traillio exceptional.
    //         </p>
    //       </div>
    //     </div>

    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
    //       {teamMembers.map((member, index) => (
    //         <div key={index} className="flex justify-center">
    //           <TeamCard
    //             img={member.img}
    //             name={member.name}
    //             role={member.role}
    //             socialLinks={member.socialLinks}
    //           />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"> {/* Changed py-20 to py-32 */}
        <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-blue-100/50 to-transparent pointer-events-none" />
        
        <div className="text-center relative z-10 mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
            transform hover:scale-105 transition-all duration-300 mb-12">
            Meet Our Team
          </h1>
          <div className="mt-8 max-w-2xl mx-auto space-y-6">
            <p className="text-xl text-gray-600 italic">
              "From Small Steps to Giant Leaps: Illuminate Your Progress!"
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Our dedicated team of professionals works tirelessly to bring you the best progress tracking experience.
              Each member brings unique expertise and passion to make Traillio exceptional.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex justify-center">
              <TeamCard
                img={`/home/${member.img}`}
                name={member.name}
                role={member.role}
                socialLinks={member.socialLinks}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default OurTeam;