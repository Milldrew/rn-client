interface SignUpPayload {
  userId: String;
  voterId: String;
  legistlativeDistrict: String;
  congressionalDistrict: String;
  firstName: String;
  lastName: String;
}

interface Candidate {
  isCandidate: Boolean;
  electionName: String;
  supporterUserIds: String[];
}

interface SocialMediaUrls {
  facebook: String;
  instagram: String;
  twitter: String;
  youTube: String;
  tikTok: String;
}
interface User extends SignUpPayload {
  aboutMe: String;
  profileImageUrl: String;
  candidateInfo: Candidate;
  socialMediaUrls: SocialMediaUrls;
}
export { User, SignUpPayload, Candidate, SocialMediaUrls };
