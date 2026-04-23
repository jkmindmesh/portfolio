import React from 'react';

const ExperiencesPage = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#2c3e50' }}>Experiences</h1>

      {/* Current Role Overview Section */}
      <section style={{ margin: '20px 0' }}>
        <h2>Current Role Overview</h2>
        <p>
          As a Kumon Floor Manager, I play a vital role in managing day-to-day operations and ensuring the delivery of quality educational services to students. My responsibilities include supervising staff, developing student learning plans, and facilitating parent communication.
        </p>
      </section>

      {/* Key Responsibilities Section */}
      <section style={{ margin: '20px 0' }}>
        <h2>Key Responsibilities</h2>
        <ul>
          <li>Supervising and training staff members</li>
          <li>Developing and monitoring student learning plans</li>
          <li>Facilitating communication between parents and instructors</li>
          <li>Monitoring student progress and implementing necessary adjustments</li>
        </ul>
      </section>

      {/* Skills Breakdown Section */}
      <section style={{ margin: '20px 0' }}>
        <h2>Skills Breakdown by Category</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ border: '1px solid #3498db', padding: '10px', borderRadius: '5px', width: '30%' }}>
            <h3>Management</h3>
            <ul>
              <li>Leadership</li>
              <li>Conflict Resolution</li>
              <li>Team Building</li>
            </ul>
          </div>
          <div style={{ border: '1px solid #3498db', padding: '10px', borderRadius: '5px', width: '30%' }}>
            <h3>Communication</h3>
            <ul>
              <li>Public Speaking</li>
              <li>Parent Engagement</li>
              <li>Feedback Handling</li>
            </ul>
          </div>
          <div style={{ border: '1px solid #3498db', padding: '10px', borderRadius: '5px', width: '30%' }}>
            <h3>Operational</h3>
            <ul>
              <li>Data Analysis</li>
              <li>Logistics Coordination</li>
              <li>Process Improvement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* A Typical Day at Kumon Section */}
      <section style={{ margin: '20px 0' }}>
        <h2>A Typical Day at Kumon</h2>
        <details>
          <summary>Click to expand</summary>
          <p>
            My day typically starts early in the morning, where I prepare the center for the day’s activities. I hold a quick meeting with instructors to outline daily objectives, followed by overseeing student assessments and helping with any operational challenges that arise throughout the day.
          </p>
        </details>
      </section>

      {/* Why This Experience Matters Section */}
      <section style={{ margin: '20px 0' }}>
        <h2>Why This Experience Matters</h2>
        <p>
          This role has strengthened my management skills and deepened my understanding of educational methodologies. It has taught me the importance of adaptability and effective communication in driving success in an educational setting.
        </p>
      </section>

      {/* Statistics Dashboard Section */}
      <section style={{ margin: '20px 0' }}>
        <h2>Statistics Dashboard</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ padding: '10px', border: '1px solid #27ae60', borderRadius: '5px', width: '30%' }}>
            <h3>Students Enrolled</h3>
            <p>350</p>
          </div>
          <div style={{ padding: '10px', border: '1px solid #27ae60', borderRadius: '5px', width: '30%' }}>
            <h3>Pass Rate</h3>
            <p>95%</p>
          </div>
          <div style={{ padding: '10px', border: '1px solid #27ae60', borderRadius: '5px', width: '30%' }}>
            <h3>Retention Rate</h3>
            <p>88%</p>
          </div>
        </div>
      </section>

      {/* Technical Skills Applied Section */}
      <section style={{ margin: '20px 0' }}>
        <h2>Technical Skills Applied</h2>
        <p>
          In this role, I have utilized skills in data analysis, project management software, and educational technologies to streamline operations and improve student outcomes.
        </p>
      </section>
    </div>
  );
};

export default ExperiencesPage;
