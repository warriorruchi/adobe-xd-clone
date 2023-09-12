# My Responsive ReactJS Project with API Integration

This ReactJS project is designed to be responsive on various devices and integrates with an external API for form submissions. It includes client-side validation for email input fields.
![Screenshot 2023-09-12 153645](https://github.com/warriorruchi/adobe-xd-clone/assets/120272171/1cc7b609-4641-4e97-8caf-ec20dd08fe30)

## Responsive Design

This project has been tested and optimized for responsiveness on the following devices and resolutions:

- Mobile View (480p)
- 720p
- 1080p
- iPad (2732x2048)
- MacBook (1440x823)

## API Integration

The project uses the following API for form submissions:

- API Link: [API Link](http://3.228.97.110:9000/api)
- Request Method: POST

### Form Validation

1. **Empty Form Submission**: Empty form submission is not allowed. It is validated at the front-end to ensure that all required fields are filled before making the API request.

2. **Email Validation**: Email validation is performed at the front-end to check the email format. Invalid email addresses will trigger a validation error.

3. **API Response Handling**: When the email ends with "@ez.works," an error will be returned in the API response. This error message will be displayed inside the corresponding form field.

4. **Successful Form Submission**: Upon successful form submission, the API will return a 200 response status, and the text "Form Submitted" will be displayed in the text field.

## **Tech stacks used :**
To create this clone following Tech stack is used by contributors.  
<br>
<img src="https://img.shields.io/badge/reactjs-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/>

## Installation and Setup Instructions
Clone down this repository using this <a href="https://github.com/warriorruchi/adobe-xd-clone">link</a> 
<hr/>

## Getting Started
To run this project locally, follow these steps:
1.**Install project dependencies**:npm install
2.**Start the development server**:npm start
