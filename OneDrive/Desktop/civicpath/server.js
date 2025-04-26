// Required Modules
const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./dbConnect');
const userRoutes = require('./routes/userRoutes');
const problemRoutes = require('./routes/problemRoutes');
const User = require('./models/User');
const Problem = require('./models/problem');
const PendingProblem = require('./models/pendingProblem');
const ResolvedProblem = require('./models/resolvedProblem');

const cron = require('node-cron');
const ip = require('ip');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Middleware
app.use(bodyParser.json());
app.use(require('cors')());
app.set('io', io);

// Connect to MongoDB
connectDB();
require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);

// Test Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the API! Use /api/users or /api/problems to access the routes.');
});

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/problems', problemRoutes);

// Socket.IO Integration
io.on('connection', (socket) => {
    console.log('User connected.');
    socket.on('disconnect', () => {
        console.log('User disconnected.');
    });
});

// Combined Cron Job for Moving Problems
cron.schedule('* * * * *', async () => { // Runs every minute
    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
    console.log("Running cron job to manage problems.");

    try {
        const problems = await Problem.find();

        for (const problem of problems) {
            if (problem.neighborVotes >= 2) {
                // Move to ResolvedProblem
                const resolvedProblem = new ResolvedProblem({
                    problemID: problem._id,
                    description: problem.description
                });
                await resolvedProblem.save();
                await Problem.findByIdAndDelete(problem._id);
                console.log(`Moved problem ${problem._id} to ResolvedProblems.`);
            } else {
                // Check if the problem is older than 2 minutes
                const reportedAt = new Date(problem.reportedAt);
                if (new Date() - reportedAt > 2 * 60 * 1000) {
                    // Move to PendingProblem
                    const pendingProblem = new PendingProblem({
                        problemID: problem._id,
                        description: problem.description
                    });
                    await pendingProblem.save();
                   
                    console.log(`Moved problem ${problem._id} to PendingProblems.`);
                }
            }
        }

        io.emit('problemUpdate', { message: "Problem management completed." });
    } catch (error) {
        console.error("Error in cron job for problem management:", error);
    }
});

// Start the Server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    const localUrl = "http://localhost:${PORT}";
    const networkUrl = "http://${ip.address()}:${PORT}";
    console.log(`Server running locally at ${localUrl}`);
    console.log(`Server accessible on the network at ${networkUrl}`);
});