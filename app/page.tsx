import Scene from "./components/scene";
import { GitHub, Linkedin, Twitter } from "react-feather"

export default function Home() {
    return (
        <main className="mx-auto max-w-screen-xl md:grid md:grid-cols-3 gap-8 justify-center">
            <div className="md:col-span-1 flex flex-col items-center justify-start gap-8">
                <Scene />
                <div className="text-center">
                    <h1 className="text-3xl font-semibold">Leo Glass</h1>
                    <p>Washington, DC, USA</p>
                </div>
                <div className="flex gap-4">
                    <a href="https://linkedin.com/in/leogl"><Linkedin /></a>
                    <a href="https://github.com/twonull"><GitHub /></a>
                </div>
            </div>
            <div className="md:col-span-2 p-8 flex flex-col items-left justify-start gap-12">
                <div>
                    <div className="items-left mb-4">
                        <h1 className="text-2xl font-semibold text-neutral-950">About</h1>
                        <hr/>
                    </div>
                    <p className="text-sm">I'm a student and independent software engineer from the D.C. Metro Area. My current interests include&nbsp;
                    <span className="font-semibold">Healthcare IT</span>,&nbsp;
                    <span className="font-semibold">Reverse Engineering</span>,&nbsp;
                    <span className="font-semibold">Mathematical Optimization</span>, and <span className="font-semibold">Big Data</span>.</p>
                </div>
                <div>
                    <div className="items-left mb-4">
                        <h1 className="text-2xl font-semibold text-neutral-950">Experience</h1>
                        <hr/>
                    </div>
                    <p className="text-sm mb-4">I've gained experience with a variety of technologies including:</p>
                    <div className="flex flex-row justify-between text-sm mb-2 px-1 flex-wrap gap-8">
                    <ul className="">
                            <p className="text-base font-semibold text-neutral-950">Languages</p>
                            <li>Go</li>
                            <li>JS/TS</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>C++</li>
                        </ul>
                        <ul className="">
                            <p className="text-base font-semibold text-neutral-950">Frameworks</p>
                            <li>TailwindCSS</li>
                            <li>Electron, Wails</li>
                            <li>React, Next.js</li>
                            <li>Svelte, SvelteKit</li>
                            <li>Express, FastAPI, Gin</li>
                        </ul>
                        <ul className="">
                            <p className="text-base font-semibold text-neutral-950">CI/CD Tools</p>
                            <li>Docker</li>
                            <li>Git & Github</li>
                            <li>Terraform</li>
                            <li>Azure (ARM)</li>
                            <li>AWS (CFN, CDK)</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="items-left mb-4">
                        <h1 className="text-2xl font-semibold text-neutral-950">Projects</h1>
                        <hr/>
                    </div>
                    <span className="text-sm flex gap-2">
                        <a className="flex items-center gap-2" href="https://twitter.nullptrs.co"  target="_blank" rel="noopener noreferrer"><Twitter size={14} /> Twitter Video Downloader</a>{" | "}<a href="https://github.com/TwoNull/twitter-downloader" className="flex items-center gap-2"  target="_blank" rel="noopener noreferrer"><GitHub size={14} /> Repo</a>
                    </span>
                </div>
            </div>
        </main>
    );
}
