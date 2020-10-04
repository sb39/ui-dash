import React from 'react';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

const StepProgress = (props) => {
  return (
    <div className="stepsP">
      <StepProgressBar
        startingStep={0}
        steps={[
          {
            label: 'Pending (College)',
            name: 'step 1',
          },
          {
            label: 'Pending (Company)',
            name: 'step 2',
          },
          {
            label: 'Shortlisted (Company)',
            name: 'step 3',
          },
          {
            label: 'Hired',
            name: 'step 4',
          },
          {
            label: 'Rejected',
            name: 'step 5',
          },
        ]}
      />
    </div>
  );
};

export default StepProgress;
