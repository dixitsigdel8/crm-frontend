import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Entry } from "./pages/entry/Entry.page";
import { AddNewTicket } from "./pages/new-ticket/AddNewTicket";

function App() {
  return (
    <div className="App">
      {/*  <Entry /> */}
      <DefaultLayout>
        {/*  <Dashboard /> */}
        <AddNewTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
