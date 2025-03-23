# 🐾 Pawtect Web Application

## 🌍 Project Overview

Pawtect is a web-based platform dedicated to supporting the Angeles City Veterinary Office Dog Pound and Animal Shelter. It provides a seamless, user-friendly experience to:

- Adopt pets by browsing available animals.
- Volunteer for rescue efforts, fostering, or outreach programs.
- Report stray or abused animals in need of help.
- Donate to support animal welfare.

## 🎯 Advocacy & Mission

Pawtect aims to empower communities to take action in protecting animals. By integrating technology with advocacy, we simplify the adoption process, encourage volunteering, and enhance animal welfare efforts.

## 🙏 Acknowledgements

The project setup/boilerplate was developed by **Marcel Angelo Navarro**. His contributions have been indispensable in laying the foundation for Pawtect Web Application, including version control management via Git and GitHub, and project deployments for both backend and frontend.

### 🚀 Major Phases in the Project Setup

#### Phase 1: Initial Setup

- **Repository Creation:** Set up the GitHub repository for version control.
- **Boilerplate Code:** Establish the initial project structure and boilerplate code for both frontend and backend.

#### Phase 2: Frontend Development

- **Component Design:** Develop reusable Angular components.
- **UI/UX Implementation:** Integrate Angular Material and SCSS for styling.
- **Routing:** Set up Angular routing for navigation between pages.

#### Phase 3: Backend Development

- **API Design:** Define RESTful API endpoints using Node.js and Express.
- **Database Integration:** Connect to MongoDB Atlas and set up Mongoose schemas.
- **Middleware Configuration:** Implement CORS and Body-Parser for handling API requests.

#### Phase 4: Testing & Deployment

- **Unit Testing:** Write unit tests for both frontend and backend components.
- **Integration Testing:** Ensure seamless integration between frontend and backend.

#### Phase 5: Documentation & Maintenance

- **Documentation:** Create comprehensive documentation for setup, usage, and API endpoints.

## 🛠️ Tech Stack & Frameworks

### Frontend

- **Framework:** Angular v19.2.1 (TypeScript, HTML, SCSS)
- **Architecture:** Component-Based for scalability & maintainability
- **UI Components:** Angular Material for responsiveness
- **Styling:** SCSS Preprocessor for theme customization
- **Navigation:** Angular Routing for seamless SPA navigation

### Backend

- **Framework:** Node.js + Express
- **Database:** MongoDB Atlas
- **Middleware:** CORS & Body-Parser for API requests
- **Testing:** Supertest for API testing

## 🔹 UI/UX Design Principles

- **Typography:** Poppins (Headings), Figtree (Body Text) for modern readability
- **Design:** Card-Based & Containerized for better content organization

## 🎨 Color Palette

- **Primary:** #C3E3FF (Onahau - Calm & Trustworthy)
- **Accent:** #FFDFC3 (Negroni - Warm & Compassionate)

## 🌐 Key Features & Pages

### Frontend (Angular)

#### 🏠 Home Page (/)

- Introduction to Pawtect’s advocacy
- Preview of adoptable animals
- CTA buttons for volunteering & donations

#### 📖 About Us (/about)

- Organization mission, vision, and advocacy
- Details on partners & ongoing initiatives

#### 🐶 Our Pack (/our-pack)

- Gallery of adoptable animals
- Search & filter options (by type, size, age)
- Modal pop-up with full details on clicking an animal

#### 🐾 Be a Pawtector (/pawtector)

- Volunteer Signup Form (outreach, fostering, events)
- Report an Animal Form (stray/abuse reports)
- General Contact Form (inquiries)

### 🔹 Navigation & Layout

- **Navbar Component:** Persistent top navigation bar
- **Footer Component:** Includes contact info & social media links

## 📂 Project Setup & Installation

### Frontend Setup (Angular)

1. **Install Angular CLI (if not installed)**

   ```sh
   npm install -g @angular/cli@19.2.1
   ```

2. **Clone the Repository**

   ```sh
   git clone https://github.com/wd-301-pawtectors/pawtect-web
   cd pawtect-web/frontend
   ```

3. **Install Dependencies**

   ```sh
   npm install
   ```

4. **Run the Application**
   ```sh
   ng serve --open
   ```
   The frontend will be available at [http://localhost:4200/](http://localhost:4200/).

### Backend Setup (Node.js + Express + MongoDB)

1. **Clone the Backend Repository**

   ```sh
   git clone https://github.com/wd-301-pawtectors/pawtect-web (if not yet cloned)
   cd pawtect-backend
   ```

2. **Install Dependencies**

   ```sh
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory:

   ```sh
   MONGODB_URI=<your_mongodb_connection_string>
   PORT=3000
   ```

4. **Run the Backend Server**
   ```sh
   npm start
   ```
   The API will be available at [http://localhost:3000/api/animals](http://localhost:3000/api/animals).
   The backend is now live through Render at [https://pawtect-web-backend.onrender.com](https://pawtect-web-backend.onrender.com).

## 📡 API Documentation

### Animals API (/api/animals)

| Method | Endpoint                   | Description                   |
| ------ | -------------------------- | ----------------------------- |
| GET    | /api/animals               | Fetch all animals             |
| GET    | /api/animals/search-filter | Search and filter animals     |
| GET    | /api/animals/:id           | Fetch a specific animal by ID |

### Sample API Response

```json
[
  {
    "_id": "67dd1b0267639e6ed5b57d1c",
    "name": "Buddy",
    "type": "Dog",
    "breed": "Golden Retriever",
    "gender": "Male",
    "age": 3,
    "size": "Medium",
    "weight": "5KG",
    "description": "A friendly and affectionate dog who loves morning walks and lounging in the sun. He enjoys chasing after tennis balls but is just as happy curling up next to his favorite people for some quiet time.",
    "imageURL": "our-pack-buddy-dog.webp"
  },
  {
    "_id": "67dd1ee12820f7cbc5d748b4",
    "name": "Whiskers",
    "type": "Cat",
    "breed": "Domestic Shorthair",
    "gender": "Male",
    "age": 2,
    "size": "Medium",
    "weight": "4KG",
    "description": "A laid-back and observant cat who enjoys watching the world from a high perch. He spends his day lounging in sunbeams and occasionally batting at moving objects with mild interest.",
    "imageURL": "our-pack-whiskers-cat.webp"
  }
]
```

## 👥 Meet the Team

### 🎨 UI/UX Designer:

- Alyanna Cyrelle Kumi D. Briones
- Franchesca R. Sison

### 💻 Front-End Developers:

- Alyanna Cyrelle Kumi D. Briones
- John Benedict P. Reyes
- Brent Axel S. Francisco
- Franchesca R. Sison
- Paul Justine M. Macapagal

### 🚀 Project Manager, Lead Developer, Full-Stack Developer:

- Marcel Angelo N. Navarro

## 📜 License

This project is licensed under the MIT License.

---

🐾 **Built with love for animals!** Together, let’s create a world where every stray finds a home. 🏡💙
