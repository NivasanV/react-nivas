import bootstrap from 'bootstrap/dist/css/bootstrap.css';
const TableHeader = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>job</th>
        </tr>
      </thead>
    </Table>
  );
};

const TableBody = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td>Nivasan</td>
          <td>developer</td>
        </tr>
        <tr>
          <td>Navin</td>
          <td>scientist</td>
        </tr>
        <tr>
          <td>Jayes</td>
          <td>coder</td>
        </tr>
        <tr>
          <td>Deepi</td>
          <td>UI/UX</td>
        </tr>
      </tbody>
    </table>
  );
};

export const Table = () => {
  return (
    <div>
      <TableHeader />
      <TableBody />
    </div>
  );
};
