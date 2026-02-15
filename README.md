# Contact Form Project

A modern contact form application with a Node.js backend and responsive vanilla JavaScript frontend.

## Features

- ✨ Modern, responsive UI with gradient design
- ✅ Form validation (client & server-side)
- 🔄 Loading states and user feedback
- 🎨 Smooth animations and transitions
- 🛡️ Email validation
- ⚡ Error handling

## Project Structure

```
contact-form-project/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   └── index.html
├── .gitignore
└── README.md
```

## Setup

### Backend

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
node server.js
```

The server will run on `http://localhost:3000`

### Frontend

Open `frontend/index.html` in your browser.

## Usage

1. Fill in the contact form with your name, email, and message
2. Click "Send Message"
3. See loading state while submitting
4. Receive success/error feedback

## Technologies

- **Backend**: Node.js, Express, CORS
- **Frontend**: HTML, CSS, JavaScript
- **Validation**: Email regex, required fields
