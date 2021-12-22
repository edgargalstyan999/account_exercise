import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './index.css';

const users = [
  {
    id: 1,
    name: 'Account 1',
    created: '5-8-2021',
    owner: 'User 1',
    action: 'Action',
  },
  {
    id: 2,
    name: 'Account 2',
    created: '5-8-2021',
    owner: 'User 2',
    action: 'Action',
  },
  {
    id: 3,
    name: 'Account 3',
    created: '5-8-2021',
    owner: 'User 3',
    action: 'Action',
  },
];

function App() {



    

  return (
    <div>
      <div className='comp_table'>
      <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created On</th>
            <th>Owner</th>
            <th>Action</th>
          </tr>
          {users.map((getUsers) => (
            <tr>
              <th>{getUsers.id}</th>
              <th>{getUsers.name}</th>
              <th>{getUsers.created}</th>
              <th>{getUsers.owner}</th>
              <th>
                <a href={getUsers.action}>View</a>
              </th>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
export default App;
