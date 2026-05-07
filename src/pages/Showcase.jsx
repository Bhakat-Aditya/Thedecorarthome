import React from 'react';
import { portfolio } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Showcase() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 w-full">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-stone-900 dark:text-white mb-4">Our Masterpieces</h2>
        <p className="text-stone-600 dark:text-stone-400">Browse through our bespoke categories to find the perfect piece for your home.</p>
      </div>

      {portfolio.map((section) => (
        <section key={section.id} className="mb-20">
          <div className="mb-8 border-b border-stone-200 dark:border-stone-800 pb-4">
            <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-white">
              {section.category}
            </h3>
            <p className="text-stone-600 dark:text-stone-400 mt-2">
              {section.description}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {section.items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}