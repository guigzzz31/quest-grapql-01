import { gql } from '@apollo/client';

const GET_LAUNCH = gql`
{
  launches(limit: 5) {
    launch_date_utc
    launch_success
    rocket {
      rocket_name
    }
    links {
      video_link
    }
    details
  }
}
`;
export default GET_LAUNCH