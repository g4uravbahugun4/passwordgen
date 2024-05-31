import React, { useState } from 'react';
import './index.css'
const App = () => {
  const [length, setLength] = useState(8);
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);
  const [password, setPassword] = useState('');
  const [copySuccess, setCopySuccess] = useState('');

  const generatePassword = () => {
    let characters = '';
    if (includeAlphabets) {
      characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
      characters += '0123456789';
    }
    if (includeSpecialChars) {
      characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    }
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(result);
    setCopySuccess('');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopySuccess('Copied!');
    }, () => {
      setCopySuccess('Failed to copy!');
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
        Password Length
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="shadow appearance-none border rounded  ml-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        /></label>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            type="checkbox"
            checked={includeAlphabets}
            onChange={(e) => setIncludeAlphabets(e.target.checked)}
            className="mr-2 leading-tight"
          />
          Include Alphabets
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
            className="mr-2 leading-tight"
          />
          Include Numbers
        </label>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={(e) => setIncludeSpecialChars(e.target.checked)}
            className="mr-2 leading-tight"
          />
          Include Special Characters
        </label>
      </div>
      <button
        onClick={generatePassword}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Generate Password
      </button>
     
      {password && (
        <div className="mt-4 p-2 bg-gray-100 border border-gray-300 rounded flex items-center">
          <strong>Generated Password:</strong>
          <span className="ml-2">{password}</span>
          <button
            onClick={copyToClipboard}
            className="ml-4 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Copy
          </button>
        </div>
      )}
      {copySuccess && (
        <div className="mt-2 text-green-500">
          {copySuccess}
        </div>
      )}
    </div>
  );
};

export default App;
