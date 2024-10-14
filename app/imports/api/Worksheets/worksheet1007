import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';

const UpdatePettyCash = () => {
  const [message, setMessage] = useState('');

  // Function to call the server method
  const updatePettyCashYear6 = () => {
    const owner = Meteor.user().username; // Get the current user's username

    // Call the server-side method
    Meteor.call('ws1007.addToPettyCashYear6', owner, (err, result) => {
      if (err) {
        console.error('Error updating petty_cash.year6:', err);
        setMessage(`Error: ${err.reason}`);
      } else {
        console.log('Updated petty_cash.year6:', result);
        setMessage(`Successfully updated petty_cash.year6 to ${result}`);
      }
    });
  };

  return (
    <div>
      <h3>Update Petty Cash for Year 6</
