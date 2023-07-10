import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function createCard(contact) {
  //yaha pe contact ka matlab array nahi hai ,iska matalb hai contact[0] or contact[1] or contact[2]
  return (
    <Card
      hello={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(createCard)}
      {/* curly bracket me isliye rakha hai taki iskoo js file samjha jaye */}
      {/* yah ape map loop ka kaam karega matlab pahle contacts[0] ko call krega fir contacts[1] ko fir contacts[2] ko  ,pr 4:10 to 4:50 ke bich me kuchh bola hai video me dekho */}

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
