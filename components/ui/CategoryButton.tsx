"use client"
import React, {useState} from 'react'

interface CategoryButtonProps {
    categories: string[];
    onFilterProjects: (category: string) => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({categories, onFilterProjects}) => {
    const [activeCategory, setActiveCategory] = useState('All');

    const changeCategoryHandler = (category: string) => {
        setActiveCategory(category);
        onFilterProjects(category);
    }

    return (
        <div className="inline-flex py-5" role="group" aria-label="Button group">
            {categories.map((category, index) => (
                <button 
                    key={index}
                    onClick={() => changeCategoryHandler(category)} 
                    className={`h-10 px-5 text-slate-900 dark:text-slate-100 transition-colors duration-150 bg-blue-500 focus:shadow-outline hover:bg-blue-400 
                    ${activeCategory === category ? 'bg-blue-600' : ''}
                    ${index === 0 ? 'rounded-l-lg' : ''}
                    ${index === categories.length - 1 ? 'rounded-r-lg' : ''}`}>
                        {category}
                </button>
            ))}
        </div>
    )
}

export default CategoryButton