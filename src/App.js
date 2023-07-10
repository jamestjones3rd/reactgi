import './App.css';
import React from "react";


// Very Easy
// class App extends React.Component {
// render() {
// return (
// <div>
// <h1>Employee's information</h1>
// <p>Name:James</p>
// <p>Number:444444444</p>
// <p>Date of Birth: 04/44/2044/p>
// </div>
// );
// }
// }






// Easy/Medium
// class App extends React.Component {
// constructor(props) {
// super(props);


// this.state = {
// person: {
// name: " James",
// number: "444444444",
// DOB: "04/44/2044",
// },
// };
// }
// render() {
// return <IndividualsInfo person={this.state.person} />;
// }
// }


// class IndividualsInfo extends React.component {
// render() {
// const { person } = this.props;


// return (
// <div>
// <h1>Employee's information</h1>
// <p>Name:{person.name}</p>
// <p>Number:{person.number}</p>
// <p>Date of Birth: {person.DOB}</p>
// </div>
// );
// }
// }




// Hard


class App extends React.Component {
constructor(props) {
super(props);
this.state = {
people: [
{
name: 'James',
number: '4444444444',
DOB: '04/44/2044'
},
{
name: 'Goatsiel',
number: '4444444444',
DOB: '07/27/2002'
},
{
  name: 'James',
  number: '4444444444',
  DOB: '04/44/2044'
},
{
  name: 'James',
  number: '4444444444',
  DOB: '04/44/2044'
}
]
};
}


render() {
const { people } = this.state;
const employeeData = [];


for (let i = 0; i < people.length; i++) {
const person = people[i];
employeeData.push(
<div key={i}>
<h2>Name: {person.name}</h2>
<p>Number: {person.number}</p>
<p>Date of Birth: {person.DOB}</p>
</div>
);
}


return (
<div class="background">
<h1>Employee's information</h1>
{employeeData}
</div>
);
}
}




export default App;
