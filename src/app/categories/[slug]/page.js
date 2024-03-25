"use client"
import React, { useEffect, useState } from 'react';
import Card from '@/components/card/page';
import Breadcrumbs from '@/components/breadcrumbs/page';

export default function Slug(currentCategory) {
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(true);

    const routes = [
        { link: './categories', name: 'Categories' },
        { link: `./categories/${category}`, name: `${capitalizeWords(category)}` },
    ];

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }
    
    useEffect(() => {
        const data = currentCategory.params.slug;
        setCategory(data);
        // Simulating data loading with setTimeout
        const timer = setTimeout(() => {
            setLoading(false); // Set loading to false after a delay (simulating data loading)
        }, 200); // Adjust the delay as needed

        // Cleanup function
        return () => clearTimeout(timer);
    }, [currentCategory.params.slug]);
    
    const products = {
        technology: [
            { name: "Playstation 5", link: "playstationFive" },
            { name: "Laptop", link: "laptop" },
        ],
        workout: [
            { name: "Dumbbell", link: "dumbbell" },
            { name: "Treadmill", link: "treadmill" },
        ],
    };
    const categoryProducts = products[currentCategory.params.slug];
    
    return (
        <section>
            <Breadcrumbs crumbs={routes}/>
            <div className='w-full flex justify-center items-center p-8 font-bold'>
                <h1 className='text-slate-100 text-4xl'>{capitalizeWords(category)}</h1>
            </div>
            {loading ? ( // If loading, display a loading screen
                <div className="w-full h-full flex justify-center items-center">
                    <h2>Loading...</h2>
                </div>
            ) : ( // If not loading, display the products
                <section className="w-screen h-screen flex flex-wrap justify-center gap-8 px-16">
                    {categoryProducts?.map((product, index) => (
                        <Card key={index} color="#6B46C1" image="cpu.png" text={product.name} link={`/product/${product.link}`}/>
                    ))}
                </section>
            )}
        </section>
    );
}
