import React from 'react';

const OptionInput = ({ options, onChange }) => {
  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    onChange(updated);
  };

  const addOption = () => {
    onChange([...options, '']);
  };

  const removeOption = (index) => {
    onChange(options.filter((_, i) => i !== index));
  };

  return (
    <div style={{ marginTop: '10px' }}>
      {options.map((opt, i) => (
        <div key={i}>
          <input
            type="text"
            value={opt}
            onChange={(e) => handleOptionChange(i, e.target.value)}
          />
          <button onClick={() => removeOption(i)}>Remove</button>
        </div>
      ))}
      <button onClick={addOption}>Add Option</button>
    </div>
  );
};

export default OptionInput;
