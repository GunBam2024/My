import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EmptyPage from "./component/EmptyPage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>

          <Route path="/day/:day">
            <Day />
          </Route>

          <Route path="/create_word">
            <CreateWord/>
          </Route>

          <Route path="/create_day">
            <CreateDay/>
          </Route>

          <Route>
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

/**
 * REST API
 * 
 * Create : POST 
 * Read : GET
 * Update : PUT
 * Delete : DELETE
 * 
 * 서버통신 연결 연습 Json 활용 npm
 * 설치 :
 * npm install -g json-server
 * 
 * 실행 :
 * json-sever --watch (*경로*)./src/db/data.json --port 3001
 * ** port 는 기본적으로 3000이기때문에 3001 이상에 포트 적어줄것.
 */