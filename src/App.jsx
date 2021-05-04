import styles from "./App.module.scss";
import { PrimaryButton } from "./components/buttons/Buttons";
import Card from "./components/card/Card";
import { companies } from "./components/companies.mocks";
import { jobs } from "./mocks/jobs.mock";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.hero}>
        <h1>Juniors make IT work.</h1>
        <h6>Hire and invest in highly skilled juniors now.</h6>
        <PrimaryButton>Post Offer Now</PrimaryButton>
      </div>
      <section className={styles.jobs}>
        <div className={styles.title}>
          <h1>Newest Job Offers</h1>
          <a href="/">View all job offers ➜</a>
        </div>
        <div className={styles.cards}>
          {jobs.map((job) => (
            <>
              <Card {...job} />
              <span className={styles.divider}></span>
            </>
          ))}
        </div>
      </section>
      <section className={styles.featured}>
        <div className={styles.title}>
          <h1>Featured Companies</h1>
        </div>
        <div className={styles.companies}>
          {companies.map(({ Icon, name }) => (
            <div className={styles.company}>
              <div className={styles.icon}>
                <Icon />
              </div>
              <p>{name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
