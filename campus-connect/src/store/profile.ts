export type Profile = {
  name: string;
  indexNumber: string;
  programme: string;
  level: string;
  bio: string;
};

let profile: Profile = {
  name: "Ama Boateng",
  indexNumber: "10987654",
  programme: "Computer Science",
  level: "200",
  bio: "Student at Campus Connect",
};

export function getProfile() {
  return profile;
}

export function saveProfile(nextProfile: Profile) {
  profile = nextProfile;
}
