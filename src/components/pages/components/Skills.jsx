import Skill from "./Skill";
import { useState, useEffect } from "react";
import { devSkills } from "../../../constants/skills";
const Skills = () => {
    const { htmlSkill, cssSkill, jsSkill, reactSkill, nodeSkill, gitSkill } = devSkills;
    const [html, setHtml] = useState(0);
    const [javascript, setJavascript] = useState(0);
    const [git, setGit] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [css, setCss] = useState(0);
    const [nodeJs, setNodeJs] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            setHtml((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 95)
            })
            setJavascript((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 83)
            })
            setGit((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 63)
            })
            setReactJs((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 86)
            })
            setCss((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 80)
            })
            setNodeJs((oldProgress) => {
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 82)
            })
        }, 200);
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <>
            <Skill name={htmlSkill.name} color={htmlSkill.color} icon={htmlSkill.icon} value={html} />
            <Skill name={cssSkill.name} color={cssSkill.color} icon={cssSkill.icon} value={css} />
            <Skill name={jsSkill.name} color={jsSkill.color} icon={jsSkill.icon} value={javascript} />
            <Skill name={reactSkill.name} color={reactSkill.color} icon={reactSkill.icon} value={reactJs} />
            <Skill name={nodeSkill.name} color={nodeSkill.color} icon={nodeSkill.icon} value={nodeJs} />
            <Skill name={gitSkill.name} color={gitSkill.color} icon={gitSkill.icon} value={git} />
        </>
    );
}

export default Skills;