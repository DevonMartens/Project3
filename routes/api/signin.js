const User = require('models/user.js')
const UserSession = require('models/UserSessions.js')
module.exports = (app) => {
// app.get('/api/counters', (req, res, next) => {
//   Counter.find()
//     .exec()
//     .then((counter) => res.json(counter))
//     .catch((err) => next(err));
// });

// app.post('/api/counters', function (req, res, next) {
//   const counter = new Counter();

// //   counter.save()
// //     .then(() => res.json(counter))
// //     .catch((err) => next(err));
// });

app.post('/api/account/signup', (req, res, next) => {
    const {
        body
    } = req;
    const {
        userName,
        location,
        userType,
        githubLink,
        // email,
        phone,
        password,
        // score, 
        // questionsCorrect, 
        // questionsTotal, 
        languages,
        // date,
        // isDeleted
    } = body;
    let {
        email
    } = body;
    if (!userName) {
        return res.send({
            success: false,
            message: 'Error: User name required. Please be smart'
        });
    }
    if (!location) {
        return res.send({
            success: false,
            message: 'Error: Location cannot be blank. At least the country your living in. No ones needs your home address'
        });
    }
    if (!userType) {
        return res.send({
            success: false,
            message: 'Error: User type cannot be blank. We just need to know why you want to be scored on your ability to code'
        });
    }
    if (!githubLink) {
        return res.send({
            success: false,
            message: 'Error: In order to use this program you must provide your github link.'
        });
    }
    if (!languages) {
        return res.send({
            success: false,
            message: 'Error: Please enter your preffered coding langauges.'
        });
    }
    email = email.toLowerCase();

    User.find({
        email: email
    }, (err, previousUser) => {
        if (err) {
            res.end('Sever error')
        } else if (previousUser.length > 0) {
            res.end('Eroor: this email is in use')
        } else {
            const newUser = new User();
            newUser.userName = userName;
            newUser.location = location;
            newUser.userType = userType;
            newUser.githubLink = githubLink;
            newUser.email = email;
            newUser.phone = phone;
            newUser.password = newUser.generateHash(password);
            newUser.languages = languages;
            newUser.save((err, user) => {})
            if (err) {
                res.end({
                    success: true,
                    message: 'signed up'
                });
       

    });
\
app.post('/api/account/signup', (req, res, next) => {
        const {
            body
        } = req;
        const {
            password
        } = body;
    
        email = email.toLowerCase();

    
        if (err)
            return res.send({
                success: false,
                message: 'Server Error'
            });
    }
    );
 if (users.length != 1)
        return res.send({
            success: false,
            message: 'Error invalid'
        });
}
);

const user = users[0];
if (!user.validPassword(password) {
        return res.send({
            success: false,
            message: 'invalid user'
        });
    }
    // otherwise correct user  
    const userSession = new UserSession(); userSession.userId = user._id; userSession.save(err, doc) => {
        if (err) {
            return res.send({
                success: false,
                message: 'error '
            });
        }
        return res.send({
            success: true,
            message: 'Sucess you can be a software engineer',
            token: doc._id,
        });
    };
    };

  app.post('/api/account/signup', (req, res, next) => { 
    app.post('/api/account/signup', (req, res, next) => { 

        app.post('/api/account/verify, (req, res, next) => { 
            const { query } req;
            const { token } req;
    
UserSession.find({
_id: token,
isDeleted: false,
},  (err, sessions) => {
    return res.send({
        success: false,
        message: 'Error' 
    });
}
if (sessions.length != 1)
return res.send({
    success: false,
    message: 'Error: invalid'
});
} else {
    return res.send({
        success: true,
        message: 'good'
    })
}
            })


});
};

app.post('/api/account/logout', (req, res, next) => { 
    const { query } req;
    const { token } req;

UserSession.findOneAndUpdate({
_id: token,
isDeleted: false,{
$set:{isDeleted:true}
}, null, (err, sessions) => {
return res.send({
success: false,
message: 'Error' 
});
}
if (sessions.length != 1)
return res.send({
success: false,
message: 'Error: invalid'
});
} else {
return res.send({
success: true,
message: 'good'
})
}
    })


});
};
});
};