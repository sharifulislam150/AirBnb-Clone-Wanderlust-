Here is a clean, professional **README.md** you can paste directly into your GitHub repo.
I included:
✔ Full project overview
✔ All features
✔ Tech stack
✔ Known issues (search not working)
✔ Deployment info
✔ How to run locally
✔ Future improvements

---

# **Wanderlust – Airbnb Clone 🏡**

Wanderlust is a full-stack Airbnb-style web application where users can browse, create, edit, and manage property listings.
It is built using modern web technologies and follows MVC architecture.
The app is fully deployed and live:
👉 **Live Demo:** [https://wanderlust-wiw9.onrender.com/listings](https://wanderlust-wiw9.onrender.com/listings)

---

## 🚀 **Features**

### 🔍 **Listing Features**

* View all available listings
* Create new listings
* Edit and update existing listings
* Delete listings
* Upload images for each listing
* View detailed information for each listing
* Responsive UI for mobile and desktop

### 👤 **User Authentication**

* Secure user signup
* User login / logout
* Password hashing using bcrypt
* Session management

### 🗺️ **Map & Location**

* Integrated map for listing locations (Leaflet / Mapbox depending on your implementation)
* Shows property location on a map
* Interactive map markers

### 🔎 **Search** *(In Progress)*

* Search bar added
* **Currently not working — I am working on fixing it**
* Soon users will be able to search listings by:

  * Location
  * Title
  * Price range

### 🧩 **Other Functionalities**

* Flash messages for all CRUD actions
* Error handling middleware
* Authorization checks (only owner can edit/delete listing)
* Image hosting with Cloudinary
* MVC folder structure

---

## 🛠️ **Tech Stack**

### **Frontend**

* HTML5, CSS3
* EJS templating engine
* Bootstrap / Custom CSS

### **Backend**

* Node.js
* Express.js
* Express Router & Middleware
* Mongoose

### **Database**

* MongoDB (Atlas)

### **Authentication**

* Passport.js
* Express-Session
* bcrypt for password hashing

### **Cloud Services**

* Cloudinary (Image storage)
* Render (Deployment)

---

## 📁 **Project Structure**

```
Wanderlust/
│── models/
│── routes/
│── controllers/
│── public/
│── views/
│── utils/
│── app.js
│── package.json
│── README.md
```

---

## 💻 **Run Locally**

### **1. Clone the repository**

```
git clone https://github.com/sharifulislam150/AirBnb-Clone-Wanderlust-.git
cd AirBnb-Clone-Wanderlust-
```

### **2. Install dependencies**

```
npm install
```

### **3. Add Environment Variables**

Create a `.env` file:

```
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
MAP_API_KEY=your_map_api_key
MONGO_URL=your_mongodb_uri
SECRET=your_session_secret
```

### **4. Run the app**

```
node app.js
```

Open in browser:
👉 [http://localhost:8080](http://localhost:8080)

---

## 🐞 **Known Issues**

* ❗ **Search bar is not working yet (in progress)**

  * Working on search logic + query filters
* Some pages may load slowly on Render due to free-tier cold starts

---

## 📌 **Future Improvements**

* Full-featured search system
* Wishlist / Favorites
* User profile page
* Reviews & Ratings
* Filtering by category, price, amenities
* Multiple image upload
* Improved UI with Tailwind or React (optional future upgrade)

---

## ❤️ **Contributing**

Pull requests are welcome!
If you find bugs or have suggestions, feel free to open an issue.

---

## 📧 **Contact**

If you want help or collaboration:
**Shariful Islam**
GitHub: [https://github.com/sharifulislam150](https://github.com/sharifulislam150)
facebook: https://www.facebook.com/shariful.islam.25162/

---

If you want, I can also:
✅ Create badges (Node, Express, MongoDB, Render etc.)
✅ Format the README with images/screenshots
✅ Improve the English or add more professional wording
Just tell me!
