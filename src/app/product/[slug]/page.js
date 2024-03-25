"use client"
import { useEffect, useState } from "react";
import Card from '@/components/card/page';
import Breadcrumbs from '@/components/breadcrumbs/page';

export default function Slug(currentProduct) {
    const [product, setProduct] = useState("");
    const [loading, setLoading] = useState(true);

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, function(char) {
            return char.toUpperCase();
        });
    }

    const products = {
        playstationFive: { name: "Playstation 5", link: "https://tailwindcss.com/docs/text-color", category: "technology" },
        computer: { name: "Computer", link: "https://tailwindcss.com/docs/text-color", category: "technology" },
        dumbbell: { name: "Dumbbell", link: "https://tailwindcss.com/docs/text-color", category: "workout" },
        treadmill: { name: "Treadmill", link: "https://tailwindcss.com/docs/text-color", category: "workout" },
    };

    const routes = [
        { link: './categories', name: 'Categories' },
        { link: `./categories/${products[product] && products[product].category}`, name: capitalizeWords(`${products[product] && products[product].category}`) },
        { link: `./categories/${product}`, name: capitalizeWords(`${products[product] && products[product].name}`) },
    ];

    useEffect(() => {
        const data = currentProduct.params.slug;
        setProduct(data);
        
        const timer = setTimeout(() => {
            setLoading(false);
        }, 200);

        return () => clearTimeout(timer);
    }, [currentProduct.params.slug]);

    return (
        <section>
            <Breadcrumbs crumbs={routes}/>
            <div className='w-full flex justify-center items-center p-8 font-bold'>
                <h1 className='text-slate-100 text-4xl'>{products[product] && products[product].name}</h1>
            </div>
            {loading ? ( 
                <div className="w-full h-full flex justify-center items-center">
                    <h2>Loading...</h2>
                </div>
            ) : ( 
                <section className="w-screen h-screen flex flex-wrap justify-center gap-8 px-16">
                    <Card color="#6B46C1" image="cpu.png" text={products[product].name} link={`${products[product].link}`}/>
                </section>
            )}
        </section>
    );
}
