import React from "react";

const Profile = ({ data,setData }) => {
  const { name, email, age } = data;
  return (
    <div>
      <div>
        <label htmlFor="name "> Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) =>
            setData((prev) => {
              return { ...prev, name: e.target.value };
            })
          }
        />
      </div>
      <div>
        <label htmlFor="age "> Age: </label>
        <input
          type="text"
          id="name"
          value={age}
          onChange={(e) =>
            setData((prev) => {
              return { ...prev, age: e.target.value };
            })
          }
        />
      </div>
      <div>
        <label htmlFor="email "> Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) =>
            setData((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
      </div>
    </div>
  );
};

export default Profile;
