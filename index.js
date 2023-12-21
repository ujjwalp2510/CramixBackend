import express from "express";
import connectToMongo from "./db.js";
import dashboardRouter from './routes/dashboard.js';
import mainRouter from "./routes/main.js";
import cookieParser from "cookie-parser";
import signupRouter from './routes/signup.js';
import loginRouter from './routes/login.js';
import cors from "cors";
import otpverificationRouter from "./routes/otpverification.js";
import discussionsRouter from "./routes/discussions.js";
import { Server } from "socket.io";
import passwordchangeRouter from "./routes/passwordchange.js";
import modybRouter from "./routes/modyb.js";
import 'dotenv/config.js';
const app = express();
const port = 80;

connectToMongo();
app.use(express.json());
app.use(cors({ credentials: true, origin: process.env.FRONTEND_HOST }));
app.use(cookieParser());
app.use('/api/signup', signupRouter);
app.use('/api/login', loginRouter);
app.use('/api/main', mainRouter)
app.use('/api/dashboard', dashboardRouter);
app.use('/api/otpverification', otpverificationRouter);
app.use('/api/discussions', discussionsRouter);
app.use('/api/passwordchange', passwordchangeRouter);
app.use('/api/modyb', modybRouter);
app.get('/', async(req, res)=>{
    res.send(200);
    console.log("Welcome to Cramix Backend");
});

const server = app.listen(port, ()=>{
    console.log(`Server running at http://127.0.0.1:${port}`)
});

const io = new Server(server, {
  cors: {
    origin: "*",
  },
  methods:["GET", "POST"],
  pingTimeout: 60000,
});

io.on("connection", (socket) => {
  socket.on("setup", (user) => {
    socket.join(user._id);
    socket.emit("connected");
  });

  socket.on("newMessage", (newMessage) => {
      socket.emit("messageReceived", newMessage);
      io.emit("messageReceived", newMessage);
    });
});
