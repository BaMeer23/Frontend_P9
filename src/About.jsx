import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.intro}>
          A glimpse into my journey, aspirations, and skills in the world of technology and creativity
        </p>
      </div>
      <div style={styles.content}>
        <section style={styles.section}>
          <h2 style={styles.subtitle}>Introduction</h2>
          <p style={styles.paragraph}>
            I am currently pursuing a Bachelor of Science in Computer Science (BSCS), specializing in programming, data structures, and software development. Now in my second year, I am equipping myself with a balance of theoretical and practical knowledge in the field of computing. My dream is to become a skilled game developer, merging technology and creativity to craft engaging digital experiences.
            I was born on <strong>June 23, 2004</strong>, and I take pride in celebrating this special day with my family and friends. My zodiac sign is Cancer, reflecting my nurturing and intuitive nature.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Health</h2>
          <p style={styles.paragraph}>
            Maintaining physical fitness is a journey I am committed to. While I currently have a below-average fitness level, I strive to improve through mindful practices. I also manage a condition involving weak lungs, which requires extra care in managing stamina and avoiding strenuous activities. These challenges motivate me to prioritize health and well-being.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Languages</h2>
          <p style={styles.paragraph}>
            As a multilingual individual, I have an average proficiency in:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}><strong>Filipino</strong>: My native language.</li>
            <li style={styles.listItem}><strong>English</strong>: Essential for academic and professional settings.</li>
            <li style={styles.listItem}><strong>Bicol</strong>: A cherished regional language from my roots.</li>
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subtitle}>Skills</h2>
          <p style={styles.paragraph}>
            My skillset includes:
          </p>
          <ul style={styles.list}>
            <li style={styles.listItem}>Basic proficiency in computer science and technology.</li>
            <li style={styles.listItem}>A creative mindset with an eye for innovation.</li>
            <li style={styles.listItem}>Strong observational skills, aiding in analytical thinking.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(180deg, #000, #333)',
    color: '#fff',
    minHeight: '100vh',
    fontFamily: "'Roboto', sans-serif",
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  title: {
    fontSize: '3.5em',
    fontWeight: '700',
    color: '#f5f5f5',
    textShadow: '0 4px 6px rgba(0, 0, 0, 0.7)',
  },
  intro: {
    fontSize: '1.2em',
    color: '#dcdcdc',
    marginTop: '10px',
    maxWidth: '600px',
    textAlign: 'center',
  },
  content: {
    maxWidth: '900px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  section: {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  },
  subtitle: {
    fontSize: '2em',
    fontWeight: '600',
    color: '#66aaff',
    marginBottom: '15px',
  },
  paragraph: {
    fontSize: '1.1em',
    lineHeight: '1.8',
    color: '#dcdcdc',
    textAlign: 'justify',
  },
  list: {
    marginTop: '10px',
    paddingLeft: '20px',
  },
  listItem: {
    fontSize: '1.1em',
    lineHeight: '1.6',
    color: '#ccc',
    marginBottom: '5px',
    textAlign: 'justify',
  },
};

export default About;
