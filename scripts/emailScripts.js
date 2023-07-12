const userRegistration = (user) => {
  return {
    subject: "Welcome to Movie Nights",
    html: `
    <div>
    <h5> Hello, ${user.name}</h5>
    <br/>
    You have registered successfully with email <b> ${user.email} </b>   
    <br/>
    Your userId required at the time of login will be  <b> ${user.userId} </b>
    <br/>
    <hr/>
   Endless Entertainment Anytime. Anywhere!
   Thanks & Regards 
   <h3> Movie Nights </h3>  <br/>
    <img src="https://i.ibb.co/dg0sZyH/MBA5.png"/>
    </div>
    `,
  };
};

const userLoggedIn = (user) => {};

const paymentSucces = (user) => {};

const newMovieAdded = (user, movie, theatre) => {};

const theatreDeleted = (user, theatre) => {};

module.exports = {
  userRegistration,
  userLoggedIn,
  paymentSucces,
  newMovieAdded,
  theatreDeleted,
};
