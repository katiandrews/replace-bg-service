# Replace background service

API replaces color-bg on images to another background image

## Setup and running

- Clone this repo: $ git clone https://github.com/katiandrews/replace-bg-service.git
- Go to downloaded folder: $ cd replace-bg-service
- Install dependencies: $ npm install.
- Start server: $ npm start.
- Now you can send requests to the address: http://localhost:8080

## Usage

### Upload image

- POST /upload, Content-Type: multipart/form-data;
- Success response:
  - Code: 200 OK
  - Content: {
    "id": "dfghrks--h7ghdr"
    }
