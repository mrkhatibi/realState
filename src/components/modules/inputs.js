import styles from "./inputs.module.css"

function Inputs({ name, faname, type, setProfileData, profileData }) {
  return (
    <>
      <h3>{faname}</h3>
      <input
      className={styles[name]}
        type={type}
        placeholder={faname}
        value={profileData[name]}
        onChange={(e) => setProfileData({...profileData , [name] : e.target.value})}
      />
    </>
  );
}

export default Inputs;
