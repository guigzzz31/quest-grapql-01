import React from 'react';
import { useQuery } from '@apollo/client';
import Launch from './Models/Launch';
import GET_LAUNCH from './Controllers/launch';

function GetLaunches() {
  const { loading, error, data } = useQuery(GET_LAUNCH);
  console.log("data", data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launches.map(({ launch_date_utc, launch_success, rocket, links, details }: Launch) => (
    <div className="bg-white rounded shadow border p-6 w-64">
      <div>
        Date: {launch_date_utc}
      </div>
      <div>
        {launch_success ? "Launch Success: Yes" : "Launch Success: No"}
      </div>
      <div>
        Rocket: {rocket.rocket_name}
      </div>
      <div>
        links: {links.video_link}
      </div>
      <div>
        Details: {details}
      </div>
    </div>
  ))
}

export default GetLaunches;