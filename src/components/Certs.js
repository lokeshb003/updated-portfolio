import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import bshell from "../assets/certs/1.jpg"
import k8s from "../assets/certs/2.jpg"
import ansible from "../assets/certs/3.jpg"
import swarm from "../assets/certs/4.jpg"
import packer from "../assets/certs/5.jpg"
import gcp from "../assets/certs/6.jpg"
import jenkins from "../assets/certs/7.jpg"
import docker from "../assets/certs/8.jpg"
import cscu from "../assets/certs/9.jpg"

// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Certified Secure Computer User (CSCU)" img={cscu} issued="EC-Council" date="Dec 2021" />
                <CertCard name="Complete Bash Shell Scripting" img={bshell} issued="EC-Council" date="Jan 2023" />
                <CertCard name="Kubernetes Hands-on" img={k8s} issued="KodeKloud" date="Jan 2023" />
                <CertCard name="Ansible Beginners Course" img={ansible} issued="KodeKloud" date="Feb 2023" />
                <CertCard name="Docker SWARM | SERVICES | STACK - Hands-on" img={swarm} issued="KodeKloud" date="Mar 2023" />
                <CertCard name="Hashicorp Packer" img={packer} issued="KodeKloud" date="May 2023" />
                <CertCard name="GCP DevOps Project" img={gcp} issued="KodeKloud" date="Apr 2023" />
                <CertCard name="Jenkins Hands-on" img={jenkins} issued="KodeKloud" date="Mar 2023" />
                <CertCard name="Docker Beginners Course - Hands-on" img={docker} issued="KodeKloud" date="Feb 2023" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
