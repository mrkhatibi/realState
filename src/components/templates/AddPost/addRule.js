import styles from "./addpostpage.module.css";



function AddRule({rule , setRule}) {

  const handleChange = (value, index) => {
    const newInput = [...rule];
    newInput[index] = value;
    setRule(newInput);
  };

  const addRulesHandler = () => {
    setRule([...rule, ""]);
  };
  const deleteRuleHandler = (index) => {
    const newrule = rule.filter((_, i) => i !== index);
    setRule(newrule);
  };
  return (
    <div>
      {rule.length && rule.map((item, index) => (
        <div className={styles.addrulebutton} key={index}>
          <input
            value={item}
            onChange={(e) => handleChange(e.target.value, index)}
            type="text"
            placeholder="قوانین"
          />
          {rule.length > 1 ? (
            <div>
              <button className={styles.addbutton}  type="button" onClick={addRulesHandler}>
                +
              </button>
              <button className={styles.addbutton}  type="button" onClick={() => deleteRuleHandler(index)}>
                -
              </button>
            </div>
          ) : (
            <button className={styles.addbutton}  type="button" onClick={addRulesHandler}>
              +
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default AddRule;
