// module.exports = (app) => {
//     // app.get('/api/counters', (req, res, next) => {
//     //   Counter.find()
//     //     .exec()
//     //     .then((counter) => res.json(counter))
//     //     .catch((err) => next(err));
//     // });
  
//     // app.post('/api/counters', function (req, res, next) {
//     //   const counter = new Counter();
  
//     // //   counter.save()
//     // //     .then(() => res.json(counter))
//     // //     .catch((err) => next(err));
//     // });

//     app.post('/api/account/signup' (req, res, next ) => {
//         const { body } = req;
// const {
// userName, 
// location,
// userType,
// githubLink,
// email,
// phone,
// passoword,
// score, 
// questionsCorrect, 
// questionsTotal, 
// languages, 
// date,
// isDeleted
//     } = body;
//     if(!userName){
//         res.end({
// success: false,
// message: 'Error: User name required. Please be smart'
//         });
//     }
//     if(!location){
//         res.end({
// success: false,
// message: 'Error: Location cannot be blank. At least the country your living in. No ones needs your home address' 
// });
// }

// };