import express from 'express';
const router = express.Router();
import axios from 'axios';
import { IUser } from '../oauthtypes';

// GET /api/:id/repos - gets the user's repos from Github
router.get('/:id/repos', (req, res) => {
  let ghUser = req.user as IUser
  let config = {
    headers: {
      'Authorization': `Bearer ${ghUser.accessToken}`,
      'User-Agent': 'react-oauth-ag'
    }
  }
  axios.get('https://api.github.com/user/repos', config)
    .then((response) => {
      res.json(response.data);
    }).catch((err) => {
      console.log(`🚨`,err)
    })
})

export default router;