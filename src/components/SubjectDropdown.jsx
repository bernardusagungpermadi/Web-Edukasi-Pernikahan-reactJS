import React, { useState } from 'react';

const SubjectDropdown = () => {
  const [selectedSubject, setSelectedSubject] = useState('');

  const handleSubjectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  return (
    <div>
      <label htmlFor="subject">Select Subject:</label>
      <select id="subject" value={selectedSubject} onChange={handleSubjectChange}>
        <option value="">-- Select Subject --</option>
        <option value="Pernikahan">Pernikahan</option>
        <option value="Perceraian">Perceraian</option>
        <option value="Kekerasan dalam Rumah tangga">Kekerasan dalam Rumah tangga</option>
        <option value="Pola Asuh">Pola Asuh</option>
        <option value="Gaya Hidup">Gaya Hidup</option>
      </select>
      {selectedSubject && <p>You selected: {selectedSubject}</p>}
    </div>
  );
};

export default SubjectDropdown;
