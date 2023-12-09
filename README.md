

github client-side repository- https://github.com/Porgramming-Hero-web-course/b8a11-client-side-SamirSadek

github server-side repository-https://github.com/Porgramming-Hero-web-course/b8a11-server-side-SamirSadek




🌐 Live Site: https://online-marketplace-481d3.web.app/

## Used Technology
<div align="center">
    <img src="https://skillicons.dev/icons?i=react,html,css,vscode,github,tailwind,git" /><br>
    <img src="https://skillicons.dev/icons?i=nodejs,javascript,express,firebase,mongodb,jwt" /><br>
</div>


## Features and Functionalities

* **Navigation and Layout:** Consistent Navbar and Footer on all pages, excluding the 404 page.Meaningful footer with website logo, copyright notice, contact information, social media links, and address.

* **Registration and Login:** Login Page with email and password login options.Google Sign-in functionality for user convenience. Link to the Registration Page for new users.Registration Page includes fields for name, email, password, and photo URL.

* **Home Page:** Banner section featuring a carousel with relevant images.Tab-based system for browsing jobs with categories like web development, digital marketing, and graphic design.Each tab displays job cards with information: job title, deadline, price range, short description, and a "Bid now" button.Job data is fetched from a MongoDB database, and users can add job data via the Add Job page.

* **Add Product Page:** A private/protected route where users can add a new product to the database.The form includes fields for image, name, brand name, type, price, short description, rating, and an "Add" button.

* **Job Details Page:** Users are redirected to this page after clicking the "Bid now" button on a job card.Displays job information, including name, deadline, price range, and description.A "Place your bid" form allows users to enter their bidding amount and deadline.User's email (read-only) and job owner's email (read-only) are displayed.The "Bid on the project" button is disabled for the job owner.Data is stored in a MongoDB database when the button is clicked, and a toast notification is shown to the user.Users are then redirected to the My Bids page.


* **Add Jobs:** Users can post job listings on the Add Jobs page.The form includes fields for the employer's email (read-only), job title, deadline, description, category (selectable from available categories), minimum price, maximum price, and an "Add job" button.Data is stored in a MongoDB database when the button is clicked, and a toast notification is displayed.Users are redirected to the My Posted Jobs page.

* **My Posted Jobs Page:** Logged-in users can view their posted jobs on the My Posted Jobs page.Each job card allows users to update or delete the job listing.Updating allows users to modify job details, and a toast notification is displayed upon completion.Deletion requests are confirmed to avoid accidental removal.Users can only update and delete their own job listings.

* **My Bids:** The My Bids page displays bid information that users have added from job details pages.Information includes job title, email, deadline, status, and a "Complete" button (conditionally enabled).Initially, the status is set to "Pending." If a bid is accepted, the status becomes "In Progress," enabling the "Complete" button.Clicking the "Complete" button updates the status to "Complete."

* **Bid Requests:** Job owners can manage bid requests made by users on their posted jobs.The Bid Requests page displays job title, bidder's email, deadline, price, and status.Job owners can accept or reject bid requests.After clicking the "Reject" button, the status changes to "Rejected," and the buttons disappear.A progress bar is displayed for jobs in progress, with optional dynamic updating.

* **404 Page:** A custom 404 page is available, featuring an interesting image, without the header and footer.The page includes a "Back to Home" button, redirecting users to the Home page.

* **Environment Variables:** The project utilizes environment variables to protect sensitive data, such as Firebase config keys and MongoDB credentials.

* **Private Routes:** Several pages are private and require user authentication to access.These private pages include My Bids, Add Job, My Posted Jobs, Bid Requests, and Job Details.


## License

This project is licensed under the MIT License. See the LICENSE file for details.

Feel free to explore, modify, and use this project as a basis for your brand-based website in the "Technology and Electronics" category.
