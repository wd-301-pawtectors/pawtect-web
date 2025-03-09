🐾 **Pawtect Web Application**

🌍 **Project Overview**

Pawtect is a web-based platform dedicated to supporting the Angeles City Veterinary Office Dog Pound and Animal Shelter.

It provides a seamless, user-friendly experience to:
- Adopt pets by browsing available animals.
- Volunteer for rescue efforts, fostering, or outreach programs.
- Report stray or abused animals in need of help.
- Donate to support animal welfare.

🎯 **Advocacy & Mission**

Pawtect aims to empower communities to take action in protecting animals. By integrating technology with advocacy, we simplify the adoption process, encourage volunteering, and enhance animal welfare efforts.

🛠️ **Tech Stack & Frameworks**

**Frontend:** Angular (TypeScript, HTML, SCSS)
- Component-Based Architecture for scalability & maintainability
- Angular Material for UI components & responsiveness
- SCSS Preprocessor for styling & theme customization
- Angular Routing for seamless SPA navigation

**Backend:** Node.js + Express + MongoDB
- Express.js for REST API development
- MongoDB Atlas as the database for storing animals
- Mongoose ORM for efficient data management
- CORS & Body-Parser for API requests

🔹 **UI/UX Design Principles**
- Typography: Poppins (Headings), Figtree (Body Text) for modern readability
- Card-Based & Containerized Design for better content organization

🎨 **Color Palette**
- Primary: #C3E3FF (Onahau - Calm & Trustworthy)
- Accent: #FFDFC3 (Negroni - Warm & Compassionate)

🌐 **Key Features & Pages**

**Frontend (Angular)**

🏠 **Home Page (/)**
- Introduction to Pawtect’s advocacy
- Preview of adoptable animals
- CTA buttons for volunteering & donations

📖 **About Us (/about)**
- Organization mission, vision, and advocacy
- Details on partners & ongoing initiatives

🐶 **Our Pack (/our-pack)**
- Gallery of adoptable animals
- Search & filter options (by type, size, age)
- Clicking an animal opens a modal pop-up with full details

🐾 **Be a Pawtector (/pawtector)**
- Volunteer Signup Form (outreach, fostering, events)
- Report an Animal Form (stray/abuse reports)
- General Contact Form (inquiries)

🔹 **Navigation & Layout**
- Navbar Component: Persistent top navigation bar
- Footer Component: Includes contact info & social media links

📂 **Project Setup & Installation**

**Frontend Setup (Angular)**

1️⃣ **Install Angular CLI (if not installed)**
    ```sh
    npm install -g @angular/cli
    ```

2️⃣ **Clone the Repository**
    ```sh
    git clone https://github.com/wd-301-pawtectors/pawtect-web
    cd pawtect-web/frontend
    ```

3️⃣ **Install Dependencies**
    ```sh
    npm install
    ```

4️⃣ **Run the Application**
    ```sh
    ng serve --open
    ```
    ✅ The frontend will be available at http://localhost:4200/.

📡 **Pawtect Backend API**

The Pawtect Backend API serves as the data provider for the "Our Pack" page, fetching animal profiles from a MongoDB Atlas database.

📂 **Backend Project Structure**
```
pawtect-backend-api
├── src
│   ├── controllers
│   │   └── animalsController.js
│   ├── models
│   │   └── animalModel.js
│   ├── routes
│   │   └── animalsRoutes.js
│   ├── app.js
│   └── server.js
├── package.json
├── .env
└── README.md
```

🔹 **Backend Setup (Node.js + Express + MongoDB)**

1️⃣ **Clone the Backend Repository**
    ```sh
    git clone https://github.com/wd-301-pawtectors/pawtect-backend
    cd pawtect-backend
    ```

2️⃣ **Install Dependencies**
    ```sh
    npm install
    ```

3️⃣ **Configure Environment Variables**
    Create a `.env` file in the root directory:
    ```
    MONGODB_URI=<your_mongodb_connection_string>
    PORT=5000
    ```

4️⃣ **Run the Backend Server**
    ```sh
    npm start
    ```
    ✅ The API will be available at http://localhost:5000/api/animals.

📡 **API Documentation**

**Animals API (/api/animals)**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /api/animals | Fetch all animals |
| GET    | /api/animals?type=Dog&size=Large | Filter by type & size |
| GET    | /api/animals?search=golden | Search by name or breed |

✅ **Example API Response**
```json
[
  {
    "id": "650a6e1d5c3b4a1f7e6c2f99",
    "name": "Buddy",
    "type": "Dog",
    "breed": "Labrador",
    "age": 3,
    "size": "Large",
    "imageUrl": "assets/images/buddy.jpg"
  },
  {
    "id": "650a6e1d5c3b4a1f7e6c2f98",
    "name": "Milo",
    "type": "Cat",
    "breed": "Persian",
    "age": 2,
    "size": "Small",
    "imageUrl": "assets/images/milo.jpg"
  }
]
```

👥 **Meet the Team**

🎨 **UI/UX Designer:**
- Macapagal, Paul Justine M.

💻 **Front-End Developers:**
- Francisco, Brent Axel S.
- Sison, Franchesca R.

🛠️ **Back-End Developers:**
- Reyes, John Benedict P.
- Briones, Alyanna Cyrelle Kumi D.

🚀 **Lead Developer, Full-Stack Developer:**
- Navarro, Marcel Angelo N.

📜 **License**
This project is licensed under the MIT License.

🐾 **Built with love for animals!** Together, let’s create a world where every stray finds a home. 🏡💙