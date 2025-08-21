# Web Scraper Portal (React + Django)

A ReactJS application with OAuth 2.0 authentication and a Python-Django backend for web scraping.  
The app allows users to log in securely (Google OAuth), scrape data from a public website, and display it in a clean, responsive UI.  

---

## 🚀 Features
- **OAuth 2.0 Authentication** – Secure login using Google.  
- **Web Scraping** – Fetch data (e.g., news/product/weather) using BeautifulSoup/Requests.  
- **ReactJS Frontend** – User-friendly interface with responsive design.  
- **Python-Django Backend** – REST API to handle scraping logic.  
- **Real-Time Refresh (Optional)** – Fetch fresh data with a single click.  

---

## 🛠️ Tech Stack
- **Frontend**: ReactJS, Axios, React Router, OAuth plugin (e.g., `@react-oauth/google`)  
- **Backend**: Django, Django REST Framework  
- **Scraping**: BeautifulSoup, Requests (or Scrapy)  
- **Authentication**: Google OAuth 2.0  

---

## 📂 Project Structure
web-scraper-project/
│── backend/ # Django backend (scraping + API)
│── frontend/ # React frontend (UI + OAuth)
│── .gitignore


##  Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Sanchit33333/web-scraper-project.git
cd web-scraper-project

2. Backend Setup (Django)
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Backend will run at: http://127.0.0.1:8000/

3. Frontend Setup (React)
cd frontend
npm install
npm start


Frontend will run at: http://localhost:3000/



4. OAuth Setup (Google)

Go to Google Cloud Console
.

Create OAuth 2.0 Client ID (Web Application). client ID = 76234263817-dpe73h388fmdqq43qd9hc1n35ad3jam9.apps.googleusercontent.com

Add http://localhost:3000 as an authorized redirect URI.

Copy your Client ID and replace in frontend/src/App.js.




5.Example Data Display

News headlines

Product details

Weather info

(Scraping site can be updated in backend code.)


6.📌 Deliverables

✅ GitHub Repo Link:
https://github.com/Sanchit33333/web-scraper-project
https://sanchit33333.github.io/web-scraper-project/


✅ README.md (this file)

✅ Google Client ID ( if required) client ID = 76234263817-dpe73h388fmdqq43qd9hc1n35ad3jam9.apps.googleusercontent.com

