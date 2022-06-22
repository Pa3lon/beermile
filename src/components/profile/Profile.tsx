import React, { useEffect, useState } from "react";
import { getPersons } from "../../utils";
import { IProfile } from "./ProfileCreate";

const Profile = () => {
  const [profiles, setProfiles] = useState<IProfile[]>([]);

  useEffect(() => {
    getPersons().then((res) => {
      setProfiles(res.data);
    });
  }, []);

  return (
    <div>
      <div>Profile</div>
    </div>
  );
};

export default Profile;
