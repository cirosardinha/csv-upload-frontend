# CSV Upload Frontend

A responsive Angular application for uploading and displaying CSV files.

## Features

- Upload CSV files
- Display uploaded data in a responsive table
- Mobile-friendly design
- Real-time feedback with toast notifications

## Technologies Used

- **Angular 17+**
- **Tailwind CSS**
- **TypeScript**
- **RxJS**
- **ngx-toastr** for notifications


## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v14 or later)
- **npm** (v6 or later)
- Backend API set up and running (see [Backend Setup](#backend-setup)).

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/cirosardinha/csv-upload-frontend.git
   cd csv-upload-frontend
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```

4. Open your browser and navigate to [http://localhost:4200](http://localhost:4200).

### Environment Configuration

The application uses environment files for configuration:

- **`src/environments/environment.ts`** - Development environment.

Update these files to match your API endpoints.

## Backend Setup

This application requires a backend server running at [http://localhost:3333](http://localhost:3333).  
Ensure the backend is set up and running before using this application. The backend should handle uploads and process CSV files. 

*For detailed instructions, refer to the corresponding backend repository.*

