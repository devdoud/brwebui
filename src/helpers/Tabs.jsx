import { useState } from 'react';

export function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`flex-1 py-2 text-center ${
              activeTab === index
                ? 'border-b-2 border-[#FFC146] text-[#FFC146] font-semibold'
                : 'text-gray-500 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabs.map((tab, index) => (
          <div key={index} className={activeTab === index ? 'block' : 'hidden'}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
