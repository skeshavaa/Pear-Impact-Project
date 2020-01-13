import React, { useState } from 'react';
//Packages
import addToMailchimp from 'gatsby-plugin-mailchimp';
//Styles
import * as styles from '@compStyles/EmailListForm.module.scss';



const Email = () => {

  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
      .then((data) => {
        alert(data.result);
      })
      .catch((error) => {
        // Errors in here are client side
        // Mailchimp always returns a 200
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.EmailListForm}>
      <div className={styles.outerWrapper}>
      <div className={styles.Wrapper}>
        <div> <input
          placeholder="Email address"
          name="email"
          type="text"
          onChange={handleEmailChange}
          className={styles.setback}
        /></div>
        <div className={styles.btn}><button type="submit">Subscribe</button></div>
      </div>
      </div>
    </form>
  );
};

export default Email;