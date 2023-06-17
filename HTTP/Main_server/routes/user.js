import express from "express";

const router = express.Router();

var users = [
    {
        "Name": 'e.g.',
        "Disk": 0,
        "data": {
            "dat1": 1,
            "dat2": "hi"
        }
    }
]

router.get('/', (req, res) => {
    console.log(`[LOG / THREAT]: action detected, ACTION TYPE: Get`);
    res.send("Access denied, Please use the post method instede")
});

router.post('/', (req, res) => {
    var user = req.body
    var usersname = []
    var disks = []
    for (var i  = 0; i < users.length; i++) {
        usersname.push(users[i].Name)
        disks.push(users[i].Disk)
    }
    if (usersname.includes(user.Name) && disks.includes(user.Disk)) {
        console.log(`[LOG / THREAT]: action detected, ACTION TYPE: Post, user: ${user.Name}, Disk: ${user.Disk} , Extra info: ACTION: Update`)

        for (var i = 0; i < users.length; i++) {
            if (usersname[i] === user.Name && disks[i] === user.Disk) {
                users[i] = user
                res.send(`User with username '${user.Name}' was updated to the database!`)
            }
        }
    }else{
        console.log(`[LOG / THREAT]: action detected, ACTION TYPE: Post, user: ${user.Name}, Disk: ${user.Disk} , Extra info: ACTION: added to database`)
        users.push(user)
        res.send(`User with username '${user.Name}' was added to the database!`);
    }
    
});


export default router;