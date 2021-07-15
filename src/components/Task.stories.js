import React from 'react';

import Task from './Task';

//This is the hook for Storybook to know about the component
export default {
  component: Task,
  title: 'Task',
};

//Args are used for the live editing of components directly in Storybook without a restart
const Template = args => <Task {...args} />;

//Each Story is a variant of the component
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};
