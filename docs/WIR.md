# Info.

## css.map 파일??

크롬 개발자 도구를 보면 적용된 스타일이 어디에 있는지 css 파일 내에 line을 표시해주는데, css.map 파일은 sass 파일 내에서의 line을 표시해준다.

## sass 설치

vsc extension에서 live sass compiler을 검색 후 설치해준다.

---

# Grammer

## scss

### variable

```scss
$main-color: #468;
$main-font-size: 15px;

.background {
  background-color: $main-color;
}
```

### nesting

- nesting은 두 단계를 넘어 중첩하지 않는다.

```scss
.main-bg {
  width: 100px;
  h4 {
    font-size: 15px;
  }
  button {
    color: red;
  }
}
```

### @extend

- 중복되는 코드를 깔끔하게 관리할 수 있다.

```scss
.btn {
  font-size: 16px;
  padding: 10px;
  background: grey;
}

.btn-green {
  @extend .btn;
  background: green;
}
```

### @mixin

```scss
@mixin 버튼기본디자인($구멍) {
  font-size: 16px;
  padding: 10px;
  background: $구멍;
}

.btn-green {
  @include 버튼기본디자인(#229f72);
}

.btn-white {
  @include 버튼기본디자인(#fff);
}
```

### @use

- @use를 사용해서 파일을 import할 수 있다.
- 이 때, reset.scss와 같은 파일도 reset.css로 컴파일이 되는데, 파일명 앞에 '\_'을 붙여주면 자동 컴파일을 하지 않는다.
- 다른 파일에 있는 변수를 가져다 쓸 때는 아래와 같이 쓴다.

```scss
reset.$main-color;
reset.some-mixin();
```

### css파일 경로 수정하는 법

https://stackoverflow.com/questions/51696892/how-to-setup-output-path-to-compiled-css-files-using-vscode-live-sass-compiler
