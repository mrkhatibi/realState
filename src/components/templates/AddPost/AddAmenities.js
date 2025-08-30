import styles from "./addpostpage.module.css";



function AddAmenities({amenities , setAmenities}) {

  const handleChange = (value, index) => {
    const newInput = [...amenities];
    newInput[index] = value;
    setAmenities(newInput);
  };

  const addamenitiessHandler = () => {
    setAmenities([...amenities, ""]);
  };
  const deleteamenitiesHandler = (index) => {
    const newamenities = amenities.filter((_, i) => i !== index);
    setAmenities(newamenities);
  };
  return (
    <div>
      {amenities.map((item, index) => (
        <div className={styles.addamenitiesbutton} key={index}>
          <input
            value={item}
            onChange={(e) => handleChange(e.target.value, index)}
            type="text"
            placeholder="امکانات"
          />
          {amenities.length > 1 ? (
            <div>
              <button className={styles.addbutton} type="button" onClick={addamenitiessHandler}>
                +
              </button>
              <button className={styles.addbutton} type="button" onClick={() => deleteamenitiesHandler(index)}>
                -
              </button>
            </div>
          ) : (
            <button className={styles.addbutton}  type="button" onClick={addamenitiessHandler}>
              +
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AddAmenities;
