import React, { useState } from 'react';
import MaterialTable from 'material-table';
import searchIcon from "@material-ui/icons/Search";


const MembersTable = () => {
  const [data, setData] = useState([
    { userId: 1234, id: '123456789', name: 'Luka Duncic' },
    { userId: 1235, id: '123456788', name: 'Steph Curry' },
  ]);
  return (
    <div>
      <MaterialTable
        options={{
          grouping: true,
        }}
        columns={[
          {
            title: 'User Id',
            field: 'userId',
            type: 'numeric',
          },
          {
            title: 'Id Number',
            field: 'id',
          },
          {
            title: 'Full Name',
            field: 'name',
            type: 'string',
          },
        ]}
        data={data}
      />
    </div>
  );
};

export default MembersTable;
