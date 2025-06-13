import React from 'react';

const FormPreview = ({ questions }) => (
  <div style={{ borderTop: '1px solid #ddd', marginTop: '30px', paddingTop: '20px' }}>
    <h3>Live Preview</h3>
    <form>
      {questions.map(q => (
        <div key={q.id} style={{ marginBottom: '20px' }}>
          <label>{q.label}</label>
          <div>
            {q.type === 'Text' && <input type="text" disabled />}
            {q.type === 'Checkbox' &&
              q.options.map((opt, i) => (
                <label key={i} style={{ display: 'block' }}>
                  <input type="checkbox" disabled /> {opt}
                </label>
              ))}
            {q.type === 'Dropdown' && (
              <select disabled>
                {q.options.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
            )}
          </div>
        </div>
      ))}
    </form>
  </div>
);

export default FormPreview;
