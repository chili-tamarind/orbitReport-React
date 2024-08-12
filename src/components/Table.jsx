const Table = ({ sat }) => {

  const orbitRows = sat.map((data, id) => (
    <tr key={data.id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      <td>{data.operational ? "Active" : "Inactive"}</td>
    </tr>
  ));  

  return (
    <table>
      <thead>
        <tr>
          <th> Name</th>
          <th> Type of Satellite</th>
          <th> Launch Date</th>
          <th> Status</th>
        </tr>
      </thead>
      <tbody>
        {orbitRows}
      </tbody>
    </table>
  );
};

export default Table;

// const Table = ({ sat }) => {

//   const orbitRows = (
//     <tr>
//       {sat.map((data, id) => (
//         <td key={id}>{data}</td>
//       ))}
//     </tr>
//   );
  


//   return (
//     <table>
//       <thead>
//         <tr>
//           <th> Name</th>
//           <th> Type of Satellite</th>
//           <th> Launch Date</th>
//           <th> Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>Row Data TBD</td>
//           <td>Row Data TBD</td>
//           <td>Row Data TBD</td>
//           <td>Row Data TBD</td>
//         </tr>
//       </tbody>
//     </table>
//   );
// };
