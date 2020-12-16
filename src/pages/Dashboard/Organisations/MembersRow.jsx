import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { object } from "prop-types";
import cross from "../../../assets/SkillzImages/cross.svg";
import linkArrow from "../../../assets/SkillzImages/linkarrow.svg";
import PrimaryBtn from "../../../components/PrimaryBtn";
import { deleteUsersTeam, changeUsersTeam } from "../../../store/actions";
import styles from "./org.module.scss";
import PrimarySelect from "../../../components/PrimarySelect";
import AdminToggleBtn from "./AdminToggleBtn";

const MembersRow = ({ membersRow, selectChild }) => {
  const dispatch = useDispatch();
  const deleteTeam = (url) => dispatch(deleteUsersTeam(url));
  const changeTeam = (url, team) => dispatch(changeUsersTeam(url, team));
  const [toggleBtn, setToggleBtn] = useState("");
  const [selectedTeam, setSelectedTeam] = useState("");

  const handleSelect = (value) => {
    setSelectedTeam(value);
    changeTeam(membersRow.change_user, { team: value.id });
  };

  const handleDelete = () => {
    changeTeam(membersRow.change_user, { dashboard_admin: false });
    deleteTeam(membersRow.change_user);
  };

  return (
    <tr key={membersRow.id}>
      <td>
        <div className={styles.tdContent}>{membersRow.user ? membersRow.user : "admin"}</div>
      </td>
      <td>
        <div className={styles.tdContent}>
          <div className={styles.selectForm}>
            <PrimarySelect
              className={styles.select}
              placeholder={
                membersRow.team_name && !selectedTeam.name
                  ? membersRow.team_name
                  : selectedTeam.name
                  ? selectedTeam.name
                  : "Not Selected"
              }
              selectList={selectChild}
              onClick={(value) => handleSelect(value)}
            />
          </div>
        </div>
      </td>
      <td>
        <div className={styles.tdContent}>
          <AdminToggleBtn
            toggleBtn={toggleBtn}
            setToggleBtn={setToggleBtn}
            isAdmin={membersRow.dashboard_admin}
            url={membersRow.change_user}
          />
        </div>
      </td>
      <td>
        <div className={styles.tdContent}>
          <PrimaryBtn icon={<img src={cross} alt="delete" onClick={handleDelete} />} />
        </div>
      </td>
    </tr>
  );
};

MembersRow.propTypes = {
  memberRow: object,
};

export default MembersRow;
