import React, { useState } from 'react';
import './Student.scss';

const calculateAverage = (arrOfNum) => {
  return arrOfNum.reduce((acc, value) => acc + parseInt(value), 0) / arrOfNum.length;
};

export default function Student({ student, tags, setTags }) {
  const [listExpanded, setListExpanded] = useState(false);

  const [tagInput, setTagInput] = useState('');
  const { pic, firstName, email, company, skill, grades } = student;

  const renderTestField = () => {
    return grades.map((v, index) => {
      return (
        <React.Fragment key={index}>
          <div className="field">
            Test {index}: {v}%
          </div>
        </React.Fragment>
      );
    });
  };

  const renderTags = () => {
    return tags.map((v, index) => {
      return (
        v[firstName] && (
          <React.Fragment key={index}>
            <div className="tag">{v[firstName]}</div>
          </React.Fragment>
        )
      );
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTags([...tags, { [firstName]: tagInput }]);
      setTagInput('');
    }
  };

  return (
    <div className="Student">
      <div className="expandIcon expand-btn" onClick={() => setListExpanded(!listExpanded)}>
        {listExpanded ? '-' : '+'}
      </div>
      <div className="imageContainer">
        <img src={pic} alt="student" />
      </div>
      <div>
        <div className="field firstName">{firstName}</div>
        <div className="field">Email: {email}</div>
        <div className="field">Company: {company}</div>
        <div className="field">Skill: {skill}</div>
        <div className="field">Average: {calculateAverage(grades)}%</div>

        <div
          className="expandedList"
          style={{ height: listExpanded ? 'auto' : 0, overflow: listExpanded ? 'auto' : 'hidden' }}
        >
          {renderTestField()}
          <div className="tagsContainer">{renderTags()}</div>
          <input
            placeholder="Add a tag"
            className="tagInput add-tag-input"
            onChange={(e) => setTagInput(e.target.value)}
            value={tagInput}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
}
