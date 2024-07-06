import HonorCard from "./HonorCard.js";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import hr from "../assets/curve-hr.svg";

export default function Honors() {
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Recommendations</h1>
      <p className="font-light text-gray-400">Here are some of my recommendations received at Linkedin</p>

      <div className="mt-4">
        <Slider {...settings}>
          <HonorCard name="Jaya Kumar" issued="Final Year Student| Core Java | Golang | Cloud Computing | LTTS Techgium®️ 7th Edition Semi-Finalist | DevOps Enthusiast" desc="Lokesh balaji is highly proficient in DevOps Principles and highly enthusiastic person, I have ever seen. His expertise in DevOps tools and cybersecurity is a great inspiration to me and I had the pleasure to work with lokesh balaji during our college days. I wish Lokesh Balaji would excel and make contributions seamlessly." />
          <HonorCard name="Anantha Krishnan D" issued="B.tech CSE & Medical Engineering | Software Developer" desc="I've had the pleasure of working with Lokesh Balaji at Beez Labs and can confidently say he is an exceptional professional. His technical expertise, strategic thinking, and problem-solving skills have significantly contributed to our team's success. Lokesh is a collaborative team player with excellent communication skills and a proactive approach that drives innovation and efficiency. He is a valuable asset to any organization and I highly recommend him!" />
          <HonorCard name="Suryaa Narayanan K" issued="Senior Student - AI & DS @RIT, Chennai👨🏻‍🎓| Python, C, Javascript, MYSQL 🖥️ | Data Analysis📊" desc="I know Lokesh for the past four years during our time together at college, where we pursued our studies in Artificial Intelligence & Data Science. Throughout our academic journey, Lokesh consistently demonstrated a strong passion and aptitude for technology, particularly in the realms of Ethical Hacking and DevOps. Lokesh's dedication to expanding his knowledge in these fields was evident not only in the classroom but also outside of it. We often attended various workshops and conferences together as a team, where Lokesh actively engaged in discussions, absorbed new concepts, and showcased his enthusiasm for learning. His eagerness to explore emerging trends and technologies in Ethical Hacking and DevOps always stood out, reflecting his commitment to personal and professional growth.I have no doubt that Lokesh's passion, dedication, and proficiency in Ethical Hacking and DevOps will make him a valuable addition to any organization. I wholeheartedly recommend him for opportunities in these areas, confident that he will continue to excel and make significant contributions wherever he goes." />
          <HonorCard name="Ashok M" issued="Research Scholar-Pedagogical Innovations in Engineering Education, e-learning, Computational Intelligence|JNTUCOEA'11|MKUAKCE'03" desc="Lokesh's proficiency in delivering software in the fastest possible way is commendable. He has consistently shown a keen interest in containerization, ensuring the isolation and reusability of applications. His ability to implement DevOps automation strategies has significantly contributed to the efficiency and productivity of our projects. One of Lokesh's standout strengths lies in his expertise in securing REST APIs. His in-depth understanding of cybersecurity principles, combined with his practical experience, has resulted in the successful implementation of robust security measures for our projects. Lokesh's dedication to his work, coupled with his technical acumen, makes him an invaluable asset to any team. His collaborative nature and effective communication skills further enhance his ability to work seamlessly with cross-functional teams." />
          <HonorCard name="Santhosh Kumar Ethiraj" issued="| Founder - Spinacle® | Student at RIT- Chennai | Entrepreneur | Innovator | Analyst | Explorer |" desc="I am delighted to provide a recommendation for Lokesh Balaji, with whom I had the pleasure of studying during our college years. Lokesh's exceptional skills in network coding, hacking, and cloud computing set him apart as a standout professional. His dedication to mastering new technologies, evident in his involvement in numerous projects and attendance at various networking and cloud computing events, speaks volumes about his commitment to excellence. Lokesh's contributions to our projects, especially his research on Pacs Systems, were invaluable. With his innate curiosity, technical proficiency, and collaborative nature, Lokesh is well-equipped to excel in any endeavor he undertakes. I highly recommend Lokesh for his outstanding abilities and unwavering dedication." />
          <HonorCard name="Dhalavai N" issued="RIT College Ambassador @ Rajalakshmi Institute of Technology | API, Flask, HTML Expert,Software Developer , Content Writter ,Ai enthusiasts" desc="Lokesh Balaji is very dedicated and hardworking person with outstanding skills in devops" />
          <HonorCard name="Bakang Khunou" issued="Cloud System Engineer III at QSupport Cloud, South Africa" desc="I highly recommend Lokesh for their exceptional approach to learning and demonstrating their skills in cybersecurity. They are always up-to-date with the latest developments in the field and consistently seek out new ways to enhance their knowledge and expertise. Their commitment to excellence is truly impressive and they would make a valuable asset to any organization seeking a skilled cybersecurity professional." />
          <HonorCard name="Sai Prasaad G" issued="Founder & CEO of Melospiza" desc="Lokesh is an enthusiastic Cyber Security Analyst who consistently stays updated on the latest technologies related to cyber security. His deep understanding of the industry, combined with his analytical and problem-solving skills, make him an invaluable asset to any team. He is a great team player who is always willing to help and share his knowledge with others, making him a pleasure to work with." />
          <HonorCard name="Abishek V P" issued="Full Stack Developer at Rook" desc="Lokesh is Good at Learning and Implementating things. we worked together little. Even in the little thing, We were doing many things. A Perfect team mate to work together and grow together." />
          <HonorCard name="Dhinakaran DGS" issued="Trainee Engineer @ Avasoft & Zeb" desc="Yes Highly Skilled and the enthu on Lokesh for all his Tech & CyberField is at its peak even if you call him at 12, he will be available to pick up and help you out at anything that you want that's a great value you can find on him. Kudos Lokesh." />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
