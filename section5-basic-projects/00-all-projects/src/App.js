import React, {useState} from 'react';
import items from './data';
import Projects from './Projects';

function App()
{
    const [projects, setProjects] = useState(items);
    console.log(projects);
    return (
        <main>
            <section className="menu section">

                <div className="title">
                    <h2>Basic Projects</h2>
                    <div className="underline"></div>
                </div>

                <Projects items={projects}/>
            </section>
        </main>
    );
}

export default App;
