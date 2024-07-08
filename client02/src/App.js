import logo from './logo.svg';
import './App.css';

// function App(){}:하나의 태그를 구성해서 리턴해주는 함수
// App() 함수는 index.js 에서 import되고,
// index.js의 내용은 public 폴더의 index.html중 id가 root인 div태그에 내용을 삽입해준다.
// 아래 함수의 return내부 내용이 index.html에 표시될 예정이며, 내용의 변경은 저장즉시 반영된다.


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
