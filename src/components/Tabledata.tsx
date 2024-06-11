import axios from "axios";

const TableData = ({ employees, fetchData }: any) => {
  const deleteEmployee = async (id: string) => {
    await axios.delete(`/api/action?id=${id}`);
    await fetchData();
  };

  return (
    <table className="table-zebra table">
      <thead className="bg-gray-50 text-sm uppercase text-gray-700">
        <tr>
          <th className="px-6 py-3">#</th>
          <th className="px-6 py-3">Name</th>
          <th className="px-6 py-3">Email</th>
          <th className="px-6 py-3">Phone Number</th>
          <th className="px-6 py-3">Created At</th>
          <th className="px-6 py-3"></th>
        </tr>
      </thead>

      <tbody>
        {employees.map((data: any, index: number) => (
          <tr key={data.id} className="border-b bg-white">
            <td className="px-6 py-3">{index + 1}</td>
            <td className="px-6 py-3">{data.name}</td>
            <td className="px-6 py-3">{data.email}</td>
            <td className="px-6 py-3">{data.phone}</td>
            <td className="px-6 py-3">July 11, 2023</td>
            <td className="flex justify-center gap-3 py-3">
              <button
                className="rounded-md bg-gray-300 px-2 py-1"
                onClick={() => {
                  if (confirm("Do you want to delete this employee?")) {
                    deleteEmployee(data.id);
                  }
                }}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableData;
