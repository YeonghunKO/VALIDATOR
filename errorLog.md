1. dom tree에서 node를 선택할 수 없었던 이유

- validator안에서 domStorage에 있는 요소를 사용하던 상태였다. 그리고 validator는 header를 만들때 이미 사용되었다. 즉, validator가 call되면서 안에 있는 domStorage까지 call되었기 때문에 dom을 log해도 null이 나왔던것!
  그래서 checkuserinfo에 관한 모든 함수를 userInfor.js에 넣고 main.js밑에 실행시켜줬음.

2. click 이벤트가 등록되는 요소가 형제요소라면 첫번째 형제에만 등록됨

- form_control에 click 등록했었는데 다른데 클릭해도 안되던것이 username을 클릭하니 됨.

3. closest는 위쪽으로(부모쪽으로) 올라가면서 찾는다. 아래쪽으로는 내려가지 않는다.
