import axios from "axios";
import React, { useState } from "react";

const Create = ({
  setCreate,
  fetchData,
}: {
  setCreate: Function;
  fetchData: Function;
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const addEmployee = async () => {
    if (name !== "" && email !== "" && phoneNumber !== "") {
      await axios.post("/api/action", {
        name: name,
        email: email,
        phone: phoneNumber,
      });

      await fetchData();
      setCreate(false);
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-96 rounded bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl">Enter new employee's details</h2>

        <div>
          <div className="mb-4">
            <h1 className="block text-gray-700">Name</h1>
            <input
              type="text"
              className="w-full rounded border px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <h1 className="block text-gray-700">Email</h1>
            <input
              type="email"
              className="w-full rounded border px-3 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <h1 className="block text-gray-700">Phone Number</h1>
            <input
              type="number"
              className="w-full rounded border px-3 py-2"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => setCreate(false)}
              className="mr-2 rounded bg-gray-500 px-4 py-2 text-white"
            >
              Cancel
            </button>

            <button
              type="button"
              className={`rounded px-4 py-2 text-white ${name !== "" && email !== "" && phoneNumber !== "" ? "bg-blue-500" : "bg-blue-300"}`}
              onClick={() => {
                addEmployee();
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
