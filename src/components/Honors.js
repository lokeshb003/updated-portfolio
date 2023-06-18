import HonorCard from "./HonorCard.js"

import hr from "../assets/curve-hr.svg"

export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Recommendations</h1>
            <p className="font-light text-gray-400">Here are some of my recommendations received at Linkedin</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard name="Bakang Khunou" issued="Cloud System Engineer III at QSupport Cloud, South Africa" desc="I highly recommend Lokesh for their exceptional approach to learning and demonstrating their skills in cybersecurity. They are always up-to-date with the latest developments in the field and consistently seek out new ways to enhance their knowledge and expertise. Their commitment to excellence is truly impressive and they would make a valuable asset to any organization seeking a skilled cybersecurity professional." />
                <HonorCard name="Sai Prasaad G" issued="Founder & CEO of Melospiza" desc="Lokesh is an enthusiastic Cyber Security Analyst who consistently stays updated on the latest technologies related to cyber security. His deep understanding of the industry, combined with his analytical and problem-solving skills, make him an invaluable asset to any team. He is a great team player who is always willing to help and share his knowledge with others, making him a pleasure to work with." />
                <HonorCard name="Abishek V P" issued="Full Stack Developer at Rook" desc="Lokesh is Good at Learning and Implementating things. we worked together little. Even in the little thing, We were doing many things. A Perfect team mate to work together and grow together." />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
