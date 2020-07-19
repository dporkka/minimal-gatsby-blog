// import React, { useState } from 'react';
// import * as styles from './EmailListForm.module.scss';
// import addToMailchimp from './gatsby-plugin-mailchimp';

// const EmailListForm: React.FunctionComponent<{}> = () => {

//   const [email, setEmail] = useState('');

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//   };

//   const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setEmail(event.currentTarget.value);
//   };
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     addToMailchimp(email)
//       .then((data) => {
//         alert(data.result);
//       })
//       .catch((error: Error) => {
//         // Errors in here are client side
//         // Mailchimp always returns a 200
//       });
//   };
//   return (
//     <form onSubmit={handleSubmit} className={styles.EmailListForm}>
//       <h2>Subscribe to my email list!</h2>
//       <div className={styles.Wrapper}>
//         <input
//           placeholder="Email address"
//           name="email"
//           type="text"
//           onChange={handleEmailChange}
//         />
//         <button type="submit">Subscribe</button>
//       </div>
//     </form>
//   );
// };

// export default EmailListForm;