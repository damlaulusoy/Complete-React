//rsc kısayolu ile function component oluşturabiliriz.
import React from 'react';

const Projects = ({items}) => {
    return (
        <div className='section-center'>
            {
                items.map((menuItem) => {
                    const {id, title, img, url} = menuItem;
                    return (
                        <article key={id}>
                            <a href={url} target="_blank" rel="noreferrer">
                                <img src={img} alt={title} className='photo'/>
                            </a>
                            <div style={{marginTop: '12px'}}>
                                <h4 style={{textAlign: "center"}}>{title}</h4>
                            </div>
                        </article>
                    );
                })
            }
        </div>
    );
};

export default Projects;
