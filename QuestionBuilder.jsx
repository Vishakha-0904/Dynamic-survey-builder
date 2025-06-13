import React from 'react';
import OptionInput from './OptionInput';

const QuestionBuilder = ({ data, onUpdate, onDelete }) => {
  const handleChange = (key, value) => {
    onUpdate(data.id, { ...data, [key]: value });
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Question Label"
        value={data.label}
        onChange={e => handleChange('label', e.target.value)}
      />
      <select
        value={data.type}
        onChange={e => handleChange('type', e.target.value)}
      >
        <option value="Text">Text</option>
        <option value="Checkbox">Checkbox</option>
        <option value="Dropdown">Dropdown</option>
      </select>

      {['Checkbox', 'Dropdown'].includes(data.type) && (
        <OptionInput
          options={data.options}
          onChange={(opts) => handleChange('options', opts)}
        />
      )}

      <button onClick={() => onDelete(data.id)}>Delete Question</button>
    </div>
  );
};

export default QuestionBuilder;
