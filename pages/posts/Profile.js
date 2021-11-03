import Image from "next/image";

const Profile = () => (
  <Image
    src="/images/profile.jpg" // 프로필 사진 경로
    height={200}
    width={300}
    alt="ginger"
  />
);

export default Profile;
