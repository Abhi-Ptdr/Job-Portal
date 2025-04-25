# News Portal

The News Portal is a full-stack web application designed to connect job seekers and recruiters. It provides a platform for students to search and apply for jobs, while recruiters can post job openings and manage applicants.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Folder Structure](#folder-structure)
4. [Installation](#installation)
5. [Usage](#usage)
6. [API Endpoints](#api-endpoints)
7. [Contributing](#contributing)
8. [License](#license)
9. [Contact](#contact)

---

## Features

### For Students:
- **Browse Jobs**: Search for jobs by title, description, location, or type.
- **Apply for Jobs**: Submit applications for job postings.
- **Profile Management**: Update personal details, skills, and upload resumes.
- **View Applied Jobs**: Track the status of job applications.

### For Recruiters:
- **Post Jobs**: Create job postings with detailed descriptions.
- **Manage Applicants**: View and shortlist applicants for job postings.
- **Company Management**: Register and update company details.

### General:
- **Authentication**: Secure login and signup for both students and recruiters.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Real-Time Updates**: Changes in job postings and applications are reflected instantly.

---

## Technologies Used

### Frontend:
- **React**
- **Redux**
- **Tailwind CSS**
- **Vite**

### Backend:
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **Cloudinary**

---

## Folder Structure

### Backend (`/backend`):
- controllers/
- middlewares/
- models/
- routes/
- utils/
- index.js

### Frontend (`/frontend`):
- public/
- src/
  - components/
  - hooks/
  - redux/
  - utils/
  - App.jsx
  - main.jsx
  - index.css

---

## Installation

### Prerequisites:
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)

### Steps:
```bash
git clone https://github.com/your-username/news-portal.git
cd news-portal

# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### Configure Environment Variables

Create a `.env` file in the `backend` folder with the following:

```
PORT=8000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Start the Development Servers

```bash
# Backend
cd backend
npm start

# Frontend
cd ../frontend
npm run dev
```

Then open the app at `http://localhost:5173`.

---

## Usage

### For Students:
- Sign up as a student.
- Browse jobs and apply.
- Track application statuses.

### For Recruiters:
- Sign up and register your company.
- Post job openings.
- Manage applicants.

---

## API Endpoints

### User Routes:
- `POST /api/v1/user/register`
- `POST /api/v1/user/login`
- `POST /api/v1/user/profile/update`
- `GET /api/v1/user/logout`

### Job Routes:
- `POST /api/v1/job/post`
- `GET /api/v1/job/get`
- `GET /api/v1/job/get/:id`
- `GET /api/v1/job/getadminjobs`

### Company Routes:
- `POST /api/v1/company/register`
- `GET /api/v1/company/get`
- `GET /api/v1/company/get/:id`
- `PUT /api/v1/company/update/:id`

### Application Routes:
- `GET /api/v1/application/apply/:id`
- `GET /api/v1/application/get`
- `GET /api/v1/application/:id/applicants`
- `POST /api/v1/application/status/:id/update`

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For inquiries or feedback, reach out to [abhipatidar253@gmail.com]
