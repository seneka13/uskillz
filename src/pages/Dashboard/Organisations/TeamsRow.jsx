import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { object } from "prop-types";
import cross from "../../../assets/SkillzImages/cross.svg";
import linkArrow from "../../../assets/SkillzImages/linkarrow.svg";
import PrimaryBtn from "../../../components/PrimaryBtn";
import { deleteUsersTeam } from "../../../store/actions";
import styles from "./org.module.scss";

const TeamsRow = ({ teamRow }) => {
  const [isShow, setIsShow] = useState(false);
  const dispatch = useDispatch();
  const deleteTeam = (url) => dispatch(deleteUsersTeam(url));

  return (
    <>
      <tr key={teamRow.id}>
        <td>
          <div className={styles.tdContent}>{teamRow.name}</div>
        </td>
        <td>
          <div className={styles.tdContent}>{teamRow.users && teamRow.users.length}</div>
        </td>
        <td>
          <div className={styles.tdContent}>
            <PrimaryBtn
              icon={
                <img src={linkArrow} alt="dropdown" className={isShow ? styles.dropDownShow : styles.dropDownClose} />
              }
              onClick={() => setIsShow(!isShow)}
            />
          </div>
        </td>
        <td>
          <div className={styles.tdContent}>
            <PrimaryBtn icon={<img src={cross} alt="delete" onClick={() => deleteTeam(teamRow.team_delete)} />} />
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <ul className={styles.childsContainerShow}>
            {teamRow.users.map((item) => {
              return (
                <li key={item.id} className={isShow ? styles.itemShow : styles.itemHide}>
                  <div className={styles.verticalLine} />
                  {item.full_name}
                </li>
              );
            })}
          </ul>
        </td>
      </tr>
    </>
  );
};

TeamsRow.propTypes = {
  teamRow: object,
};

export default TeamsRow;
