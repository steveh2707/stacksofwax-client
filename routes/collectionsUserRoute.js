const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/users/:userid', (req, res) => {
  let u_id = req.params.userid;
  let ep = `http://localhost:4000/users/${u_id}`

  axios.get(ep).then((response) => {
    let responseData = response.data;

    if (!responseData.success) return res.redirect('/error')

    let data = responseData.data
    let user = responseData.user
    res.render('userCollections', { data, user })

  }).catch(error => {
    let message = error.message
    res.render('error', { message })
  })
})


module.exports = router;