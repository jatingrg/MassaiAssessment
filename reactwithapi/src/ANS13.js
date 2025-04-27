import React, { useState } from 'react';

function ANS13() {
  const [emails, setEmails] = useState(['']);
  const [error, setError] = useState('');

  const addEmailField = () => {
    setEmails([...emails, '']);
  };

  const handleEmailChange = (index, value) => {
    const updatedEmails = [...emails];
    updatedEmails[index] = value;
    setEmails(updatedEmails);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < emails.length; i++) {
      if (!validateEmail(emails[i])) {
        setError('Please enter valid email addresses.');
        return;
      }
    }
    setError('');
    console.log('Emails submitted:', emails);
  };

  return (
    <div>
      <h1>Dynamic Email Form</h1>
      <form onSubmit={handleSubmit}>
        {emails.map((email, index) => (
          <div key={index}>
            <label>Email {index + 1}:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              placeholder="Enter email"
            />
          </div>
        ))}
        <button type="button" onClick={addEmailField}>
          Add Email
        </button>
        <button type="submit">Submit</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <h3>Entered Emails:</h3>
      <ul>
        {emails.map((email, index) => (
          <li key={index}>{email}</li>
        ))}
      </ul>
    </div>
  );
}

export default ANS13;
