import React from 'react';

const ColorTest = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Color Scheme Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Primary Colors */}
        <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Primary Colors</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-50 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-50</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-100 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-100</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-200 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-200</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-300 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-300</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-400 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-400</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-500 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-500</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-600 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-600 (#ff0026)</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-700 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-700</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-800 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-800</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-primary-900 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">primary-900</span>
            </div>
          </div>
        </div>
        
        {/* Secondary Colors */}
        <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Secondary Colors</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-50 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-50</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-100 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-100</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-200 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-200</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-300 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-300</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-400 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-400</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-500 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-500</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-600 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-600</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-700 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-700</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-800 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-800</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-secondary-900 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">secondary-900</span>
            </div>
          </div>
        </div>
        
        {/* Accent Colors */}
        <div className="bg-white dark:bg-secondary-800 p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Accent Colors</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-50 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-50</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-100 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-100</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-200 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-200</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-300 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-300</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-400 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-400</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-500 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-500</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-600 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-600</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-700 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-700</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-800 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-800</span>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-accent-900 rounded"></div>
              <span className="ml-3 text-secondary-700 dark:text-secondary-300">accent-900</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Buttons using the new color scheme */}
      <div className="mt-8 bg-white dark:bg-secondary-800 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold mb-4 text-secondary-900 dark:text-white">Buttons with New Primary Color</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn-primary">Primary Button</button>
          <button className="btn-secondary">Secondary Button</button>
          <button className="btn-outline">Outline Button</button>
        </div>
      </div>
    </div>
  );
};

export default ColorTest;