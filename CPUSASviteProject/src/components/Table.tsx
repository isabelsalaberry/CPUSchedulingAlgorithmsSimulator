import React from 'react';

interface Process {
  id: number;
  arrivalTime: string;
  runningTime: string;
}

interface TableProps {
  processes: Process[];
}

const Table: React.FC<TableProps> = ({ processes }) => {
  return (
    <table className="w-full bg-white rounded-xl">
      <thead>
        <tr>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Arrival Time</th>
          <th className="border px-4 py-2">Running Time</th>
        </tr>
      </thead>
      <tbody>
        {processes.map((process) => (
          <tr key={process.id}>
            <td className="border px-4 py-2">P{process.id}</td>
            <td className="border px-4 py-2">{process.arrivalTime}</td>
            <td className="border px-4 py-2">{process.runningTime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
