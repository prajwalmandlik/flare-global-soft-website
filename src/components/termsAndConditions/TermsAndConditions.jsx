import React from "react";
import "./termsAndConditions.css";
import HeroSection from "../heroForOthersection/HeroSection";

const TermsAndConditions = () => {
  return (
    <div id="Terms-and-condition" className="">
      <HeroSection name={"Terms & Condition"} />

      <section className="section cantainer terms">
        <div className="terms-containt">
          <div className="term-container">
            <div className="term-title">Terms and Condition</div>
            <div className="term-info">
              These terms and conditions are entered into by and between Flare
              global soft and the client as of the date of electronic
              acceptance. The Agreement governs Client's use of the Service
              Provider's services.
              <ol>
                <li>
                  <strong>Services: </strong>
                  Service Provider agrees to perform the Services in accordance
                  with the specifications provided by Client. Service Provider
                  will make reasonable efforts to meet the agreed-upon
                  deadlines, but Service Provider cannot guarantee any specific
                  deadline or result.
                </li>
                <li>
                  <strong>Payment: </strong>
                  Client agrees to pay Service Provider the fee as set forth in
                  the invoice. Payment shall be made in full upon completion of
                  the Services or as otherwise agreed upon in writing by the
                  parties. All fees are non-refundable.
                </li>
                <li>
                  <strong>Intellectual Property: </strong>
                  Client retains ownership of all intellectual property rights
                  in any content provided by the Client for the Services.
                  Service Provider retains ownership of any custom code,
                  software or applications created in the process of providing
                  the Services. Client may use the custom code, software or
                  applications only for the purpose of operating the website or
                  application created in connection with the Services.
                </li>
                <li>
                  <strong>Confidentiality: </strong>
                  Service Provider and Client shall keep confidential all
                  information received from the other party in connection with
                  the Services, including but not limited to any proprietary or
                  confidential business or technical information.
                </li>
                <li>
                  <strong>Limitation of Liability: </strong>
                  Service Provider will not be liable for any indirect,
                  incidental, consequential, special or punitive damages,
                  including, without limitation, loss of profits, revenue or
                  data, arising out of or in connection with the Services,
                  whether or not Service Provider has been advised of the
                  possibility of such damages. In no event shall Service
                  Provider's liability exceed the amount paid by the Client to
                  Service Provider for the Services.
                </li>
                <li>
                  <strong>Warranty: </strong>
                  Service Provider warrants that the Services will be performed
                  in a workmanlike manner and in accordance with industry
                  standards. Client's sole remedy for any breach of this
                  warranty shall be the correction of the Services at no
                  additional charge.
                </li>
                <li>
                  <strong>Termination: </strong>
                  Termination Either party may terminate this Agreement upon
                  written notice if the other party breaches any material term
                  or condition of this Agreement and fails to cure such breach
                  within 30 days of written notice.
                </li>
                <li>
                  <strong>Governing Law and Jurisdiction : </strong>
                  This Agreement shall be governed by and construed in
                  accordance with the laws of India. Any legal action or
                  proceeding arising out of or in connection with this Agreement
                  shall be brought exclusively in the courts of Nashik.
                </li>
                <li>
                  <strong>Entire Agreement: </strong>
                  This Agreement constitutes the entire agreement between the
                  parties with respect to the subject matter hereof and
                  supersedes all prior negotiations, understandings, and
                  agreements between the parties, whether written or oral.
                </li>
              </ol>
              By accepting these terms and conditions, Client agrees to be bound
              by the terms of this Agreement.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
