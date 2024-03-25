import React from 'react';

export default function Breadcrumbs(props) {
    const { crumbs } = props;
    const crumbsArray = Object.values(crumbs);

    // Prepend "home" to the breadcrumbs array
    const breadcrumbsWithHome = [{ link: '/', name: 'Home' }, ...crumbsArray];

    return (
        <section className="text-slate-200 pt-4 pl-4">
            {breadcrumbsWithHome.length === 0 ? ( 
                <span>Loading breadcrumbs...</span>
            ) : (
                breadcrumbsWithHome.map((crumb, index) => (
                    <span key={index}>
                        {index !== 0 && ' / '}
                        <a href={`/${crumb.link}`}>
                            {crumb.name}
                        </a>
                    </span>
                ))
            )}
        </section>
    );
}
