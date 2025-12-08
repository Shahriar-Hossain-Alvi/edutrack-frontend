📁 Frontend Folder Structure
src/
├── app/
│   ├── routes/
│   │   ├── AdminRoutes.jsx
│   │   ├── TeacherRoutes.jsx
│   │   ├── StudentRoutes.jsx
│   │   └── PublicRoutes.jsx
│   │
│   ├── layouts/
│   │   ├── AdminLayout.jsx
│   │   ├── TeacherLayout.jsx
│   │   ├── StudentLayout.jsx
│   │   └── PublicLayout.jsx
│
├── pages/
│   ├── admin/
│   │   ├── Dashboard.jsx
│   │   ├── Departments.jsx
│   │   ├── Subjects.jsx
│   │   ├── SubjectOfferings.jsx
│   │   ├── Users.jsx
│   │   ├── CreateUser.jsx
│   │   ├── Marks.jsx
│   │   └── Results.jsx
│   │
│   ├── teacher/
│   │   ├── Dashboard.jsx
│   │   ├── MySubjects.jsx
│   │   ├── Marks.jsx
│   │   └── Results.jsx
│   │
│   ├── student/
│   │   ├── Dashboard.jsx
│   │   ├── Subjects.jsx
│   │   └── Results.jsx
│   │
│   ├── auth/
│   │   └── SignIn.jsx
│   │
│   └── public/
│       ├── Notice.jsx
│       ├── Faculties.jsx
│       └── Contact.jsx
│
├── components/
│   ├── ui/
│   │   ├── Modal.jsx
│   │   ├── Table.jsx
│   │   ├── Button.jsx
│   │   └── Input.jsx
│   │
│   ├── filters/
│   │   ├── DepartmentFilter.jsx
│   │   ├── SessionFilter.jsx
│   │   └── SemesterFilter.jsx
│
├── hooks/
│   ├── useAuth.jsx
│   ├── useRole.jsx
│   └── usePagination.jsx
│
├── services/
│   ├── api.js
│   ├── auth.service.js
│   ├── user.service.js
│   └── result.service.js
│
├── utils/
│   ├── constants.js
│   ├── roleMap.js
│   └── pdfGenerator.js
│
└── main.jsx
