import React, { useContext } from 'react'
import { DashboardContext } from '../../../state/dashboardContext';

export const UsersListTable = () => {
    const {data, setData} = useContext(DashboardContext);
    return <table>
    <tr>
      <th>Avatar</th>
      <th>Email</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
    {data.map((val, key) => {
      return (
        <tr key={key}>
          <img src={val.avatar} alt="Lamp" height="32" />
          <td>{val.email}</td>
          <td>{val.first_name}</td>
          <td>{val.last_name}</td>
        </tr>
      );
    })}
  </table>;
}
