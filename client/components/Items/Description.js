import classes from '../../css/Description.module.css'

const Description = () => {
  return (
    <section className={classes.desc}>
      <h1> ReactEats - SPA for ordering food online </h1>
      <p>
       Reactive application, smooth transitions, no waiting times for the users!
      </p>
      <p>
        Crafted with all technologies I know when it comes to React solely (Redux, Routers, MongoDB-Linked Authentication, Action Creators, Custom Hooks and more!)
      </p>
    </section>
  );
};

export default Description;
