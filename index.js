const express = require('express');
const cors = require('cors');
const connectDB = require('./config');
const projectRoutes = require('./routes/projectRoutes');
const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

connectDB();

// app.use(cors());
// app.options('*', cors()); // Enable preflight across-the-board for all routes
// app.use(cors({
//   origin: 'https://saurabh-works.vercel.app', // Allow requests from this origin
//   methods: ["POST", "GET", "DELETE", "PUT"],
//   credentials: true
// }));

app.use(cors({
  origin: '*', // Temporarily allow all origins
  methods: ["POST", "GET", "DELETE", "PUT"],
  credentials: true
}));

app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/login', userRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res)=>{
  res.json("You can deploy now...")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
