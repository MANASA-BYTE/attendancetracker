const express = require('express');
const multer = require('multer');
const cron = require('node-cron');
const path = require('path');
const fs = require('fs');
const Problem = require('../models/problem');
const PendingProblem = require('../models/pendingProblem');
const User = require('../models/User');
const ResolvedProblem = require('../models/resolvedProblem');

const router = express.Router();

// Multer Configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    },
});
const upload = multer({ storage });

// Middleware to ensure uploads/ directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Report Progress Route
router.post('/progress', upload.single('proofImage'), async (req, res) => {
    const { problemID, userEmail, voteStatus } = req.body;
    const proofImage = req.file ? req.file.path : ''; // Uploaded image path

    // Validate input fields
    if (!problemID || !userEmail || !voteStatus) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const validVoteStatuses = ['resolved', 'pending'];
    if (!validVoteStatuses.includes(voteStatus)) {
        return res.status(400).json({ error: 'Invalid vote status.' });
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ error: 'User not found.' });
        }

        // Find the problem by ID
        const problem = await Problem.findById(problemID);
        if (!problem) {
            return res.status(404).json({ error: 'Problem not found.' });
        }

        // Add the user's vote if not already in the confirmedUsers array
        if (!problem.confirmedUsers.includes(user.username)) {
            problem.confirmedUsers.push(user.username);
        }

        // Update problem fields
        if (proofImage) problem.proofImage = proofImage;
        problem.voteStatus = voteStatus;

        // Check if at least 2 unique users voted "resolved"
        const resolvedVotesCount = problem.confirmedUsers.length;
        if (resolvedVotesCount >= 2 && voteStatus === 'resolved') {
            // Move the problem to resolved problems collection
            const resolvedProblem = new ResolvedProblem({
                problemID: problem._id,
                description: problem.description,
                //proofImage: problem.proofImage,
            });

            await resolvedProblem.save(); // Save to ResolvedProblem collection
            await Problem.findByIdAndDelete(problemID); // Remove problem from active collection

            // Emit real-time update
            req.app.get('io').emit('problemUpdate', {
                message: 'Problem resolved by neighbors.',
                id: problemID,
            });
        } else {
            await problem.save(); // Save updates
        }

        res.status(200).json({
            message: 'Progress updated successfully!',
            confirmedUsers: problem.confirmedUsers,
        });

    } catch (error) {
        console.error('Error in progress reporting:', error.message);
        res.status(500).json({ error: 'Server error. ERROR Please try again later.' });
    }
});


module.exports = router;
// Report Problem Route
router.post('/report', upload.single('image'), async (req, res) => {
    const { description, location } = req.body;
    const imagePath = req.file ? req.file.path : null;

    if (!description || !location) {
        return res.status(400).json({ success: false, error: 'Description and location are required.' });
    }

    try {
        const parsedLocation = typeof location === 'string' ? JSON.parse(location) : location;

        const problem = new Problem({
            description,
            location: parsedLocation,
            image: imagePath,
        });

        await problem.save();

        res.status(201).json({
            success: true,
            message: 'Problem reported successfully!',
            data: problem,
        });
    } catch (error) {
        console.error('Error reporting the problem:', error.stack);
        res.status(500).json({ error: 'Server error while reporting the problem.' });
    }
});

// Vote Route
router.post('/vote/:id', async (req, res) => {
    const problemId = req.params.id;

    try {
        const problem = await Problem.findById(problemId);
        if (!problem) {
            return res.status(404).send('Problem not found.');
        }

        problem.neighborVotes += 1;
        await problem.save();

        req.app.get('io').emit('voteUpdate', { problemId, votes: problem.neighborVotes });

        res.send('Vote recorded successfully.');
    } catch (error) {
        console.error('Error recording vote:', error.stack);
        res.status(500).send('Internal Server Error');
    }
});

// Fetch All Pending Problems
router.get('/resolvedProblems', async (req, res) => {
    try {
        const resolvedProblems = await ResolvedProblem.find();
        console.log('Resolved Problems Fetched:', resolvedProblems); // Debug log
        res.json(resolvedProblems);
    } catch (error) {
        console.error('Error fetching resolved problems:', error);
        res.status(500).json({ error: 'Failed to fetch resolved problems.' });
    }
});


// Fetch All Resolved Problems
// problemRoutes.js
router.get('/pendingProblems', async (req, res) => {
    try {
        const pendingProblems = await PendingProblem.find();
        console.log('Pending Problems:', pendingProblems);  // Debug log
        res.json(pendingProblems);
    } catch (error) {
        console.error('Error fetching pending problems:', error);
        res.status(500).json({ error: 'Failed to fetch pending problems.' });
    }
});

module.exports = router;