import { useState } from "react";

function App() {

  // 1.state를 생성
  const [toDo, setToDo] = useState(""); 

  const [toDos, setToDos] = useState([]);

  //3. event listener의 함수 생성
  const onChange = (event) => setToDo(event.target.value); 

  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo == ""){
      return;
    }
    // toDo = ""; --> 이렇게 직접적으로 state를 수정하지 않음
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
    
  };
  //console.log(toDos);


  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} // 2.event listener 생성
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;

/*
    ex 1 )
    food에 element를 가져오기 위한 방법
    const food = [1, 2, 3, 4,];

      > [6, food] ==> [6, Array(4)]
        : 배열안에 작성한 임의의 숫자와 배열이 따로 나옴
          (지금 우리가 구하고자하는것은 임의의 숫자를 합한 배열을 구하고자 하는 것으로 알맞지 x)

      >> [6, ...food] ==> [6, 1, 2, 3, 4]
        : ...을 이용해 임의의 숫자와 함께 나오는 배열을 구하기 위한 것


    * toDos.push(); --> 일반적인 javascript 이렇게하면 수정이 불가능함
    * toDo를 수정하고 싶다면, setToDo를 이용해서 수정을 해야함

    setToDos((["hello"]) => ["bye bye", "hello"]);
    setToDos((["bye bye", "hello"]) => ["hello2", ...["bye bye", "hello"]]);
    -> setToDos([] => [toDo, []]) -> setToDos([] => [toDo])

    * setToDos((currentArray) => []);
        위와 동일한 코드 작성 방법
        setToDos (function(currentArray){
          return;
        })
*/
