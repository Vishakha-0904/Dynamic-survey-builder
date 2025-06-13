import React, { useState, useEffect } from 'react';
import QuestionBuilder from './QuestionBuilder';
import FormPreview from './FormPreview';
import { v4 as uuidv4 } from 'uuid';

const SurveyBuilder = () => {
  const getInitialSurvey = () => {
    try {
      const saved = localStorage.getItem('survey');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  const [questions, setQuestions] = useState(getInitialSurvey());

  useEffect(() => {
    localStorage.setItem('survey', JSON.stringify(questions));
  }, [questions]);

  const addNewQuestion = () => {
    setQuestions(prev => [
      ...prev,
      { id: uuidv4(), label: '', type: 'Text', options: [] }
    ]);
  };

  const updateQuestion = (id, updatedData) => {
    setQuestions(questions.map(q => (q.id === id ? { ...q, ...updatedData } : q)));
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div>
      <button onClick={addNewQuestion}>Add New Question</button>
      {questions.map(q => (
        <QuestionBuilder
          key={q.id}
          data={q}
          onUpdate={updateQuestion}
          onDelete={deleteQuestion}
        />
      ))}
      <FormPreview questions={questions} />
    </div>
  );
};

export default SurveyBuilder;
