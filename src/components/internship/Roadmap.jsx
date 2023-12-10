import React from "react";
import "./roadmap.css";

const Roadmap = () => {
  return (
    <section className="qulification section ">
      <div className="title">
        <h2 className="section_title ">Blueprints Of Internship Program </h2>
        <span className="section_subtitle ">Your journey in this with us </span>
      </div>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div
            className={"qualification__content qualification__content-active"}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Apply for an Internship
                </h3>
                <span className="qualification__subtitle">
                  Submit your application and showcase your passion for
                  technology
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Get an Offer</h3>
                <span className="qualification__subtitle">
                  Successfully navigate the selection process and receive an
                  internship offer.
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Get Internship Batch</h3>
                <span className="qualification__subtitle">
                  Join your designated internship batch and meet fellow interns.
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Task Allocation:</h3>
                <span className="qualification__subtitle">
                  Receive hands-on tasks aligned with your learning goals and
                  project objectives.
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Complete Task Before the Deadline and Code Review after
                  Completion:
                </h3>
                <span className="qualification__subtitle">
                  - Work diligently to complete assigned tasks before deadlines.
                  <br />- Engage in a thorough code review process to ensure
                  quality and learning.
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Feedback from Mentor:</h3>
                <span className="qualification__subtitle">
                  - Receive constructive feedback from experienced mentors.{" "}
                  <br />- Use feedback to refine skills and enhance performance.
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Get Internship Completion Certificate:
                </h3>
                <span className="qualification__subtitle">
                  - Successfully complete the internship program. <br /> -
                  Receive a well-deserved Internship Completion Certificate,
                  recognizing your achievements and acquired skills.
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
