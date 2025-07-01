# ConnectSphere 🌐

**ConnectSphere** is a full-stack social networking platform built using the MERN (MongoDB, Express, React, Node.js) stack.  
It enables developers to create profiles, share experiences, and connect with others.

> 🛠️ Customized from the open-source DevConnector project to explore full-stack development, MongoDB Atlas integration, and authentication workflows.

---

### 🚀 Features

- User registration & JWT-based login
- Create/edit developer profile
- Add work experience and education
- Post status updates and interact with others
- Private dashboard with persistent user data

---

### 🧰 Tech Stack

| Layer        | Tech                                   |
|--------------|----------------------------------------|
| Frontend     | React, Redux, React Router, Axios      |
| Backend      | Node.js, Express.js                    |
| Database     | MongoDB Atlas                          |
| Auth         | JSON Web Tokens (JWT) + bcrypt         |
| Dev Tools    | VS Code, Postman, Git, GitHub          |
| Deployment   | (Optional) Render, Vercel              |

---

### 🔧 Running Locally

```bash
# Clone the repo
git clone https://github.com/yourusername/connectsphere.git
cd connectsphere

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install

# Go back to root and run both servers
cd ..
$env:NODE_OPTIONS="--openssl-legacy-provider"
npm run dev
