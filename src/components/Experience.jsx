const Experience = () => {
    return (
        <div id="Experience" className="scroll-mt-24 flex min-h-screen w-full flex-col items-center justify-center p-5 md:gap-20 md:scroll-mt-0 lg:-36  ">
            <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-3xl font-semibold text-transparent h-17 md:text-7xl md:h-20 lg-text-7xl">Experience</h1>
            <div className="flex flex-wrap gap-0 md:flex-nowrap">
                <div>
                    <div className="relative space-y-1 boder-l-2 p-5 text-left md:p-10">
                        <h3 className="text-xl font-semibold md:text-4xl">Front-End Development (Mentored Training)</h3>
                        <p className="font-light  text-gray-600">May 2023 - Present</p>
                        <ul className="list-disc pl-5 pt-5 md:pl-12 flex flex-col gap-7 text-lg">
                            <li>Gained hands-on experience building <span className="text-teal-600">web applications</span> through one-on-one mentorship with a senior front-end developer.</li>
                            <li>Improved <span className="text-teal-600">time management</span> by balancing <span className="text-teal-600">independent study</span>, project work, and mentorship deadlines.</li>
                            <li>Collaborated with the mentor on code reviews, debugging, and testing features for interactivity and responsiveness.</li>
                            <li>Focused on mobile-first design principles, creating clean and adaptive layouts with CSS Flexbox and Grid.</li>
                            <li>Consistently practiced <span className="text-teal-600">JavaScript</span> and <span className="text-teal-600">React</span> through guided exercises and hands-on coding challenges.</li>
                            <li>Developed strong <span className="text-teal-600">communication</span> and <span className="text-teal-600">problem-solving skills</span> by working closely with a mentor—discussing code solutions, applying feedback, and improving code quality through regular reviews.</li>
                            <li>Strengthened <span className="text-teal-600">independent learning</span> and critical thinking by studying real-world codebases, following tutorials, and solving coding challenges on my own.</li>
                            <li>Built interactive features such as user login, data filtering, and form validation using React and Firebase Authentication.</li>
                            <li>Worked with Firebase Firestore and Storage to manage real-time data and upload images in personal projects.</li>
                        </ul>
                        <span className="hidden md:block absolute -left-[-5px] top-0 h-full w-0.5 bg-gray-500"></span>
                    </div>
                </div>
                <div className="flex-1"></div>
            </div>
        </div>
    )
}

export default Experience;