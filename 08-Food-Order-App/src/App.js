const { default: Header } = require('./components/Layout/Header');
const { default: Meals } = require('./components/Meals/Meals');

function App() {
  return (
    <>
      <Header />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
