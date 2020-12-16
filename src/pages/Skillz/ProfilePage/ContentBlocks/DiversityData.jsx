import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import PrimaryBtn from "../../../../components/PrimaryBtn";
import PrimaryInput from "../../../../components/PrimaryInput";
import PrimarySelect from "../../../../components/PrimarySelect";
import { ethnicChoices, genderChoices, sexualChoices } from "../../../../services/profileSelectArr";
import { changeField, getUserData, updateProfile } from "../../../../store/actions";
import editPen from "../../../../assets/SkillzImages/edit.svg";
import styles from "./account.module.scss";

const DiversityData = () => {
  const dispatch = useDispatch();
  const changeFieldValue = (formField, value) => dispatch(changeField("diversityData", formField, value));
  const update = (url, data) => dispatch(updateProfile(url, data));
  const [formDisable, setFormDisable] = useState(true);
  const [formValid, setFormValid] = useState("");

  const { user, gender, ethnicity, sexual, birthday } = useSelector((state) => ({
    user: state.authReducers.user,
    gender: state.fieldsReducers.diversityData.gender,
    ethnicity: state.fieldsReducers.diversityData.ethnicity,
    sexual: state.fieldsReducers.diversityData.sexual,
    birthday: state.fieldsReducers.diversityData.birthday,
  }));

  const handleSend = (e) => {
    e.preventDefault();
    if (gender && ethnicity && sexual && birthday) {
      const data = {
        gender: gender.id,
        ethnicity: ethnicity.id,
        sexuality: sexual.id,
        date_of_birth: birthday,
      };
      update(user.update_profile, data);
      setFormDisable(!formDisable);
    } else {
      setFormValid("You need to fill in all fields");
    }
  };

  useEffect(() => {
    user &&
      user.gender &&
      changeFieldValue("gender", {
        id: user.gender,
        name: user.gender_display,
      });
    user &&
      user.ethnicity &&
      changeFieldValue("ethnicity", {
        id: user.ethnicity,
        name: user.ethnicity_display,
      });
    user &&
      user.sexuality &&
      changeFieldValue("sexual", {
        id: user.sexuality,
        name: user.sexuality_display,
      });
    user && user.date_of_birth && changeFieldValue("birthday", user.date_of_birth);
  }, [user]);

  useEffect(() => {
    const alert = setTimeout(() => setFormValid(""), 3500);
    return () => clearTimeout(alert);
  }, [formValid]);

  return (
    <div className={styles.blocks}>
      <h3>Diversity Data</h3>
      {formDisable && (
        <PrimaryBtn
          className={styles.editBtn}
          icon={<img src={editPen} alt="edit" />}
          onClick={() => setFormDisable(!formDisable)}
        />
      )}
      {!formDisable && <PrimaryBtn className={styles.saveBtn} text={"Save"} onClick={handleSend} />}
      <h5>Why are we asking for this?</h5>
      <p>
        We are committed to driving diversity and inclusion, through providing resources and support. By letting us know
        your Gender, Ethnicity, Sexuality and Age, we can identify and help specific minority groups, to lead to a more
        diverse and inclusive future workforce.
      </p>
      <PrimarySelect
        placeholder={gender.name ? gender.name : "Select Gender"}
        className={styles.select}
        selectList={genderChoices}
        onClick={(value) => changeFieldValue("gender", value)}
        labelText={"Gender"}
        disable={formDisable}
      />
      <PrimarySelect
        placeholder={ethnicity.name ? ethnicity.name : "Select Ethnicity"}
        className={styles.select}
        selectList={ethnicChoices}
        onClick={(value) => changeFieldValue("ethnicity", value)}
        labelText={"Ethnicity"}
        disable={formDisable}
      />
      <PrimarySelect
        placeholder={sexual.name ? sexual.name : "Select Sexual Orientation"}
        className={styles.select}
        selectList={sexualChoices}
        onClick={(value) => changeFieldValue("sexual", value)}
        labelText={"Sexual Orientation"}
        disable={formDisable}
      />
      <PrimaryInput
        type="date"
        name="birthday"
        autoComplete="off"
        value={birthday}
        className={styles.inputField}
        onChange={(value) => changeFieldValue("birthday", value)}
        labelText={"Date of Birth"}
        disable={formDisable}
      />
    </div>
  );
};

export default DiversityData;
