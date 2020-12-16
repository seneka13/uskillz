import React, { useEffect } from "react";

import styles from "./secondary.module.scss";
import goBack from "../../assets/SkillzImages/goBackBtn.svg";
import { useHistory } from "react-router-dom";
import Layout from "../../components/Layout";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const history = useHistory();
  return (
    <>
      <button className={styles.goBack} onClick={() => history.goBack()}>
        <img src={goBack} alt="go back" />
      </button>
      <div>
        <header className={styles.privacyHeader}>
          <h1>Terms of Service</h1>
        </header>
        <div className={styles.privacyContent}>
          <Layout>
            <ol>
              <li>
                <h3>1. Terms</h3>
                <p>
                  By accessing the website at <a href="http://www.uskillz.io">http://www.uskillz.io</a>, you are
                  agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that
                  you are responsible for compliance with any applicable local laws. If you do not agree with any of
                  these terms, you are prohibited from using or accessing this site. The materials contained in this
                  website are protected by applicable copyright and trademark law.
                </p>
              </li>
              <li>
                <h3>2. Use Licence</h3>
                <ol>
                  <li>
                    <ol>
                      <li> 1. Permission is granted to temporarily download one copy of the materials (information or
                      software) on uskillz ltd's website for personal, non-commercial transitory viewing only. This is
                      the grant of a licence, not a transfer of title, and under this licence you may not:</li>
                      <li>
                        2. use the materials for any commercial purpose, or for any public display (commercial or
                        non-commercial);
                      </li>
                      <li>
                        3. attempt to decompile or reverse engineer any software contained on uskillz ltd's website;
                      </li>
                      <li>4. remove any copyright or other proprietary notations from the materials; or</li>
                      <li>
                        5. transfer the materials to another person or "mirror" the materials on any other server.
                      </li>
                    </ol>
                  </li>
                  <li>
                    <br />
                    <p>
                      This licence shall automatically terminate if you violate any of these restrictions and may be
                      terminated by uskillz ltd at any time. Upon terminating your viewing of these materials or upon
                      the termination of this licence, you must destroy any downloaded materials in your possession
                      whether in electronic or printed format.This licence shall automatically terminate if you violate
                      any of these restrictions and may be terminated by uskillz ltd at any time. Upon terminating your
                      viewing of these materials or upon the termination of this licence, you must destroy any
                      downloaded materials in your possession whether in electronic or printed format.
                    </p>
                  </li>
                </ol>
              </li>
              <li>
                <h3>3. Disclaimer</h3>
                <ol>
                  <li>
                    1. The materials on uskillz ltd's website are provided on an 'as is' basis. uskillz ltd makes no
                    warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
                    without limitation, implied warranties or conditions of merchantability, fitness for a particular
                    purpose, or non-infringement of intellectual property or other violation of rights.
                  </li>
                  <li>
                    2. Further, uskillz ltd does not warrant or make any representations concerning the accuracy, likely
                    results, or reliability of the use of the materials on its website or otherwise relating to such
                    materials or on any sites linked to this site.
                  </li>
                </ol>
              </li>
              <li>
                <h3>4. Limitations</h3>
                <p>
                  In no event shall uskillz ltd or its suppliers be liable for any damages (including, without
                  limitation, damages for loss of data or profit, or due to business interruption) arising out of the
                  use or inability to use the materials on uskillz ltd's website, even if uskillz ltd or a uskillz ltd
                  authorised representative has been notified orally or in writing of the possibility of such damage.
                  Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability
                  for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </li>
              <li>
                <h3>5. Accuracy of materials</h3>
                <p>
                  The materials appearing on uskillz ltd's website could include technical, typographical, or
                  photographic errors. uskillz ltd does not warrant that any of the materials on its website are
                  accurate, complete or current. uskillz ltd may make changes to the materials contained on its website
                  at any time without notice. However uskillz ltd does not make any commitment to update the materials.
                </p>
              </li>
              <li>
                <h3>6. Links</h3>
                <p>
                  uskillz ltd has not reviewed all of the sites linked to its website and is not responsible for the
                  contents of any such linked site. The inclusion of any link does not imply endorsement by uskillz ltd
                  of the site. Use of any such linked website is at the user's own risk.
                </p>
              </li>
              <li>
                <h3>7. Modifications</h3>
                <p>
                  uskillz ltd may revise these terms of service for its website at any time without notice. By using
                  this website you are agreeing to be bound by the then current version of these terms of service.
                </p>
              </li>
              <li>
                <h3>8. Governing Law</h3>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws of the United
                  Kingdom and you irrevocably submit to the exclusive jurisdiction of the courts in that State or
                  location.
                </p>
              </li>
            </ol>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default Terms;
