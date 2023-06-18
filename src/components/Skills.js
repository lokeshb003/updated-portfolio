import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import kvm from "../assets/skills/kvm.svg"
import linux from "../assets/skills/linux.svg"
import python from "../assets/skills/python.svg"
import reactIcon from "../assets/skills/react.svg"
import kubernetes from "../assets/skills/kubernetes.svg"
import ansible from "../assets/skills/ansible.svg"
import windows from "../assets/skills/windows.svg"
import cisco from "../assets/skills/cisco.svg"
import docker from "../assets/skills/docker.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import gitlab from "../assets/skills/gitlab.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="linux" experience="2 years" img={linux} />
                <SkillCard name="bash" experience="2 years" img={bash} />
                <SkillCard name="python" experience="2 years" img={python} />
                <SkillCard name="javascript" experience="2 years" img={javascript} />
                <SkillCard name="react" experience="2 years" img={reactIcon} />
                <SkillCard name="kvm" experience="2 years" img={kvm} />
                <SkillCard name="kubernetes" experience="2 years" img={kubernetes} />
                <SkillCard name="ansible" experience="2 years" img={ansible} />
                <SkillCard name="windows" experience="4 years" img={windows} />
                <SkillCard name="cisco networking" experience="2 year" img={cisco} />
                <SkillCard name="docker" experience="2 years" img={docker} />
                <SkillCard name="git" experience="2 years" img={git} />
                <SkillCard name="express" experience="2 years" img={express} />
                <SkillCard name="gitlab" experience="2 years" img={gitlab} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}