import React, { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { adminToggleInput } from "../../../services/adminToggle";
import { changeUsersTeam } from "../../../store/actions";
import styles from "./org.module.scss";

const AdminToggleBtn = ({ toggleBtn, setToggleBtn, isAdmin, url }) => {
  const dispatch = useDispatch();
  const labelToggle = useRef(null);
  const changeTeam = (url, team) => dispatch(changeUsersTeam(url, team));

  useEffect(() => {
    adminToggleInput(labelToggle.current, (input, toggleDiv, divYes, divNo) => {
      input.checked = isAdmin;
      if (!input.checked) {
        toggleDiv.style.marginLeft = "50%";
        divYes.style.color = "#5d5d5d";
        divNo.style.color = "white";
      } else {
        toggleDiv.style.marginLeft = "0%";
        divYes.style.color = "white";
        divNo.style.color = "#5d5d5d";
      }
      input.addEventListener("change", () => {
        if (!input.checked) {
          toggleDiv.style.marginLeft = "50%";
          divYes.style.color = "#5d5d5d";
          divNo.style.color = "white";
          changeTeam(url, { dashboard_admin: false });
        } else {
          toggleDiv.style.marginLeft = "0%";
          divYes.style.color = "white";
          divNo.style.color = "#5d5d5d";
          changeTeam(url, { dashboard_admin: true });
        }
      });
    });
  }, [labelToggle]);

  return (
    <>
      <label ref={labelToggle} className={styles.labelCheck}>
        <div id="toggleDiv" className={styles.toggleDiv}></div>
        <div id="Yes" className={styles.currentStateYes}>
          Yes
        </div>
        <div id="No" className={styles.currentStateNo}>
          No
        </div>
        <input type="checkbox" />
      </label>
    </>
  );
};

export default AdminToggleBtn;
