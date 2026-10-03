import React from 'react';
import Headrer from '../../others/Headrer';
import TaskBox from '../../others/TaskBox';
import TaskList from '../TaskLIst/TaskList';

const EmployeeDashboard = ({data}) => {

  return (
    <div className='p-15'>
        <Headrer data={data}  />
        <TaskBox data={data} />
        <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;
