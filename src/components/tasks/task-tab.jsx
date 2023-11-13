import React, { useState } from 'react';
import ProjectCreate from '../projects/create';
import CreateForm from '../projects/create-form';
import TaskList from './task-list';

const TaskTab = () => {
  const [activeTab, setActiveTab] = useState('tab1'); // Initial active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div className="tab-container flex gap-6">
        <div
          className={`tab ${activeTab === 'tab1' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Tab 1
        </div>
        <div
          className={`tab ${activeTab === 'tab2' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </div>
        <div
          className={`tab ${activeTab === 'tab3' ? 'active-tab' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </div>
      </div>

      <div className="tab-content">
        {activeTab === 'tab1' && <TaskList/>}
        {activeTab === 'tab2' && <CreateForm />}
        {activeTab === 'tab3' && <Component3 />}
      </div>
    </div>
  );
};

// Sample components for tab content
const Component1 = () => <div>Content for Tab 1</div>;
const Component2 = () => <div>Content for Tab 2</div>;
const Component3 = () => <div>Content for Tab 3</div>;

export default TaskTab;
