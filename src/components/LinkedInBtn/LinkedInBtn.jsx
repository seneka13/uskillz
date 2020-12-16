import React from 'react'
import styles from './linkedin.module.scss'


const LinkedInBtn = () => {
    return (
      <button className={styles.loginBtn}>
            <a href={`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77cos3pqdaoj9n&redirect_uri=${process.env.REACT_APP_LINKEDIN_REDIRECT_URI}&scope=r_liteprofile,r_emailaddress`}>Login with LinkedIn</a>
        </button>
    )
}

export default LinkedInBtn
