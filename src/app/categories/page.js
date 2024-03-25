"use client"
import React, { useState, useEffect } from 'react';
import Card from '@/components/card/page';
import Breadcrumbs from '@/components/breadcrumbs/page';

export default function Categories() {
  const routes = [
    { link: './categories', name: 'Categories' },
  ];

  const categories = {
    technology: { name: "Technology", link: "/categories/technology", color: "#6B46C1", image: "cpu.png" },
    Workout: { name: "Workout", link: "/categories/workout", color: "#3B82F6", image: "gym.png" },
    Miscellaneous: { name: "Miscellaneous", link: "/categories/miscellaneous", color: "#34D399", image: "project-management.png" },
  };

  const categoriesArray = Object.values(categories);
  const [loading, setLoading] = useState(true); // Initially set loading to true

  useEffect(() => {
    // Simulating an asynchronous operation (fetching categories) with setTimeout
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (simulating data loading)
    }, 200); // Adjust the delay as needed

    // Cleanup function
    return () => clearTimeout(timer);
  }, []);

  return (
    <section>
      <Breadcrumbs crumbs={routes}/>
      <div className='w-full flex justify-center items-center p-8 font-bold'>
        <h1 className='text-slate-100 text-4xl'>All Categories</h1>
      </div>
      {loading ? ( // If loading, display a loading screen
        <div className="w-full h-full flex justify-center items-center">
          <h2>Loading...</h2>
        </div>
      ) : ( // If not loading, display the categories
        <section className="w-screen h-screen flex flex-wrap justify-center gap-8 px-16">
          {categoriesArray.map((product, index) => (
            <Card key={index} color={product.color} image={product.image} text={product.name} link={`${product.link}`} />
          ))}
        </section>
      )}
    </section>
  );
}
