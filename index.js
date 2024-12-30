require('dotenv').config()
const express = require('express')//common js and module js


const app = express()//app is very powerfull variable

const port = 3000//virtual port bhi hote hai ,as defined by the 16-bit field in the TCP and UDP headers. 2^(16)=65,536 range (0-65,535) for the network itself
const githubdata={
  "login": "shailendravermaa",
  "id": 192806096,
  "node_id": "U_kgDOC3380A",
  "avatar_url": "https://avatars.githubusercontent.com/u/192806096?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/shailendravermaa",
  "html_url": "https://github.com/shailendravermaa",
  "followers_url": "https://api.github.com/users/shailendravermaa/followers",
  "following_url": "https://api.github.com/users/shailendravermaa/following{/other_user}",
  "gists_url": "https://api.github.com/users/shailendravermaa/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/shailendravermaa/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/shailendravermaa/subscriptions",
  "organizations_url": "https://api.github.com/users/shailendravermaa/orgs",
  "repos_url": "https://api.github.com/users/shailendravermaa/repos",
  "events_url": "https://api.github.com/users/shailendravermaa/events{/privacy}",
  "received_events_url": "https://api.github.com/users/shailendravermaa/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 1,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-12-25T16:03:09Z",
  "updated_at": "2024-12-25T16:16:20Z"
}
//made a server for which 
app.get('/', (req, res) => {//home route par 
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{// slash par listen karta hai ans slash twitter par respond 
    res.send('hiteshdotcom')
})

// app.get('/login',(err,req,res,next)=>{//this is all four parameter
//     res.send(' <h1>please login </h1>')
// })
app.get('/login',(req,res)=>{//this is all four parameter
  res.send(' <h1>please login </h1>')
})
app.get('/youtube',(req,res)=>{//app give the power to send 
    res.send('<h2>chai aur code</h2>')
})
  //listen jo port me hai //we have made a server that listen on / , /twitter ,/login, /youtube
app.listen(process.env.PORT, () => {//we are listing to the 3000 port 
  console.log(`Example app listening on port ${process.env.PORT}`)
})
app.get('/github',(req,res)=>{
  res.json(githubdata);
})