import React from "react";
import { NavLink } from "react-router-dom";

const Users = () => {
  const users = [
    { name: "Olivia", image: "/user1.jpeg", slug: "olivia,user1.jpeg" },
    { name: "Emma", image: "/user2.jpeg", slug: "emma,user2.jpeg" },
    { name: "Liam", image: "/user3.jpeg", slug: "liam,user3.jpeg" },
    { name: "Jake", image: "/user4.jpeg", slug: "jake,user4.jpeg" },
    { name: "Noah", image: "/user5.jpeg", slug: "noah,user5.jpeg" },
    { name: "Ava", image: "/user6.jpeg", slug: "ava,user6.jpeg" },
    { name: "Ethan", image: "/user7.jpeg", slug: "ethan,user7.jpeg" },
    { name: "Sophia", image: "/user8.jpeg", slug: "sophia,user8.jpeg" },
  ];

  return (
    <>
      <div className="mt-10 relative flex flex-col justify-start gap-4">
        {/* Text */}
        <div className="text z-20 flex flex-col justify-center items-start gap-4 px-5 sm:px-10 lg:px-16">
          <h2
            className="title text-[#282828] 
        text-5xl sm:text-7xl md:text-8xl lg:text-[12rem]
        font-bold">
            THE
          </h2>

          <h2
            className="title text-[#282828] 
        text-5xl sm:text-7xl md:text-8xl lg:text-[12rem]
        font-bold -mt-2 sm:-mt-6">
            LISTENERS
          </h2>
        </div>

        <div className="grid px-5 sm:px-10 lg:px-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 place-content-center my-10">
          {users.map((user) => {
            return (
              <NavLink key={user.slug} to={`/users/${user.slug}`}>
                <div className="card flex flex-col justify-center items-start gap-2">
                  <div className="img w-48 h-48 lg:h-64 lg:w-64 rounded-md">
                    <img
                      className="object-cover w-full h-full rounded-md"
                      src={user.image}
                      alt=""
                    />
                  </div>
                  <h3 className="font-bold ">{user.name}</h3>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Users;
