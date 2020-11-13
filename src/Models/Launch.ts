
type Rocket = {
  rocket_name: String
}

type Links = {
  video_link: String
}

interface Launch {
  launch_date_utc: Date,
  launch_success: Boolean,
  rocket: Rocket,
  links: Links,
  details: String
}

export default Launch;