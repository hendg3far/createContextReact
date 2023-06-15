import BookContextProvider from "./BookContext";
import BookList from "./bookList";


function App() {
  return (
    <div className="App">
      <BookContextProvider>
          <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
