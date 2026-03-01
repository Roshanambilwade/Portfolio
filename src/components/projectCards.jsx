import React from 'react'

const ProjectCards = ({ title, description, image, tech, demo='#', code='#' }) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* Content */}
      <div className="p-6">

        {/* Title */}
        <h3 className='text-xl font-semibold mb-2 text-white'>
          {title}
        </h3>

        {/* Description */}
        <p className='text-gray-400 mb-4'>
          {description}
        </p>

        {/* Tech tags */}
        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span
              key={index}
              className='px-3 py-1 bg-dark-400 rounded-full text-sm text-gray-300'
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons (mobile safe) */}
        <div className="flex flex-col sm:flex-row gap-2">

          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300"
          >
            View Demo
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-300"
          >
            Code
          </a>

        </div>

      </div>
    </div>
  )
}

export default ProjectCards