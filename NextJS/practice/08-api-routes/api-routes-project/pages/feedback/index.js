import { Fragment, useState } from "react";

import { buildFeedbackPath, extractFeedback } from "../api/feedback/index";

function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  const loadFeedbackHandler = (id) => {
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback));
  };

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text}{" "}
            <button onClick={loadFeedbackHandler.bind(null, feedback.id)}>
              Show Detail
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: { feedbackItems: data },
  };
}

export default FeedbackPage;
