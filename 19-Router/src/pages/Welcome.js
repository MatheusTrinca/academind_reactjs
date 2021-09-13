import { Route } from 'react-router';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome</h1>
      <Route path="/welcome/new-user">
        <h4>Welcome new user!</h4>
      </Route>
    </section>
  );
};

export default Welcome;
