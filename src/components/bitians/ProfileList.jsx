import ProfileCard from "./profileCard";

function ProfileList({ bitians }) {
  return (
    <div className="flex flex-col mt-2 overflow-hidden">
      {bitians.map((bitian) => (
        <ProfileCard key={bitian.email} info={bitian} />
      ))}
    </div>
  );
}

export default ProfileList;
