## DailyCommitChecker
React를 사용해보는게 목적인 프로젝트로  
사용자간 한 주간의 커밋 log를 볼 수 있도록 하는 웹 페이지

https://hmu332233.github.io/DailyCommitChecker/

### 개발 환경
- **nodejs**
```bash
$ apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_6.x | bash -
$ apt-get install -y nodejs
```
- **webpack, webpack-dev-server**
```bash
$ npm install -g webpack webpack-dev-server
```
- **react**
```bash
$ npm install --save react react-dom
```
- **개발 의존 모듈 설치**
  - 첫째줄(babel): es6 + jsx 문법을 사용할 수 있게 해줌
  - 둘째줄:개발 도중 서버가 해당 컴포넌트만 업데이트하도록 해줌
```bash
$ npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
$ npm install --save-dev react-hot-loader webpack webpack-dev-server
```

### webpack 설정
- `webpack.config.js` 파일 생성 
  - [webpack.config.js](/project/webpack.config.js) 참고
  - `entry` 파일부터 시작하여 모든 require된 아이들은 재귀적으로 파고들어가 한 곳으로 모아준다. 배열도 가능
  - 이렇게 합친 파일들을 `output` 설정대로 모아 저장한다.
  - `devServer` : 개발서버 셋팅
    - `hot`: 수정될때마다 리로딩하겠다
    - `inline`: hot 리로딩에 필요한 webpack devServer를 bundle에 같이 넣는 것
    - `host`: 서버를 리슨할 주소
    - `port`: port
    - `contentBase`: index파일의 위치
  - `module`
    - loader를 통해 es2015, react형식을 일반 js형식으로 변환한다.
    - html, css 등 여러 loader가 많음
    

### 부가 설치
- **immutability-helper**
```
$ npm install --save react-addons-update
```

### 개발용 서버 실행
```
$ webpack-dev-server
```

### 빌드
```
$ webpack
```

