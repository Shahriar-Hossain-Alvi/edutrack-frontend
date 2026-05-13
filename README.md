# Edutrack
Edutrack, a result management system I built to learn about FastAPI, PostgreSQL, SqlAlchemy and React.
It is not a startup-product not a polished one but it helped me learn a lot. The goal was not to launch a product but to see how FastAPI, React and Docker behave in production.

Here's what genuinely challenged me:

*  **Middleware**: Middleware that actually works. 
    - I built an Audit Log middleware that intercepts create, update and delete requests and saves them to the database. 
    - It also stores error information.
   	- I also built an token injection middleware that takes JWT from HttpOnly cookies and adds it to the authorization header (The OAuth2PasswordBearer requires the token in the header).

*  **Httponly Cookie:** Moving JWT out of localStorage was a mindset shift. Cookies that JavaScript can't touch provide XSS protection by design.

*  **Alembic Migration:** Alembic for database migrations. I used it to track schema changes and apply them to the database. It solved the problem of updating the table without touching the database.

*  **Docker:**  Wired the backend and PostgreSQL into a shared network with one config file. One command, full environment. Killed the "works on my machine" problem immediately.

*  **Cold Starts and Real Latency:** Deploying to Render (free tier) and NeonDB was a reality check. That 2-second delay on first login taught me more about connection pooling and geographic latency than any tutorial ever did. I also built a frontend polling system just to wake the server before users hit it — hacky, but it worked.

*  **Role-Based Access Control via Dependency Injection:** Used dependency injection to give read/write permissions to different types of users eg: Admin, Teacher, Student.
	- **Admins:** 
        * Inserts and updates student and teachers data, 
        * See logs, 
        * Insert marks, 
        * publish bulk results (push result related notification via websokcet and email), 
        * inset and update subjects and assign them to various departments, 
        * assign courses to teachers
    - **Teacher:** 
        * View their assigned subjects, 
        * Insert marks to the subjects they teach, 
        * view results
	- **Student:** 
        * View their course subjects and results. 
        * Challenge published results.

* **Resource Monitoring:** Running everything in Docker let me watch CPU and RAM in real-time. Idle sat around 0.14%, average load hovered between 10–15%. Seeing your own code's baseline cost is oddly humbling.

**Live Link**: https://edutrack-ams.vercel.app
**Backend Repo**: https://github.com/Shahriar-Hossain-Alvi/edutrack-backend
---


# How to run (without docker)
```
npm install
npm run dev
```

# How to run using docker
```
<!-- Build -->
docker compose build

<!-- Run -->
docker compose up
```

# What new did I learn?
- Dockerization: How to containerize a react app using docker
- Debounce Hook: To limit the number of requests to the server and improve search performance