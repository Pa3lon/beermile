import React, { useEffect, useState } from "react";
import { getPersons } from "../../utils";
import { IProfile } from "./ProfileCreate";

const Profile = () => {
  const [profiles, setProfiles] = useState<IProfile[]>([]);

  useEffect(() => {
    getPersons().then((res) => {
      setProfiles(res.data);
      console.log();
    });
  }, []);

  return (
    <div className="flex justify-center md:pt-32 pt-12">
      <ul>
        {profiles.map((profile, index) => (
          <div key={index}>
            <p>{profile.name}</p>
            <p>{profile.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
