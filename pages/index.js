import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [inputs, setInputs] = useState({ input1: "", input2: "", input3: "" });
  const [results, setResults] = useState(null);

  const handleSubmit = async () => {
    const res = await axios.post("/api/calculate", inputs);
    setResults(res.data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold">Web App (Vercel-Ready)</h1>

      <div className="mt-6 bg-gray-800 p-4 rounded-md">
        <h2 className="text-xl font-semibold mb-2">Enter Values</h2>
        {["input1", "input2", "input3"].map((field, index) => (
          <div key={index} className="mb-2">
            <label className="block">{field}:</label>
            <input
              type="text"
              className="w-full p-2 bg-gray-700 rounded-md"
              value={inputs[field]}
              onChange={(e) => setInputs({ ...inputs, [field]: e.target.value })}
            />
          </div>
        ))}
        <button onClick={handleSubmit} className="mt-4 bg-blue-600 px-4 py-2 rounded-md">Submit</button>
      </div>

      {results && (
        <div className="mt-6 bg-gray-800 p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Results</h2>
          <p>Result 1: {results.result1}</p>
          <p>Result 2: {results.result2}</p>
          <p>Result 3: {results.result3}</p>
        </div>
      )}
    </div>
  );
}
