const express = require('express');
const router = express.Router();

// ROUTE 1: Get all Notes using : GET "/api/notes/fetchallnotes". No login required
router.get('/fetchallnotes', (req, res)=>{
    
    res.json([])
} )

module.exports = router