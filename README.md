# noah-modal

# 🌳 모달 라이브러리 만들기

`noah-modal` 라이브러리는 우아한테크코스 5기의 레벨2 미션 요구사항 중 하나로 기존 미션에서 사용하던 모달을 분리하여 npm으로 배포하고, 그 라이브러리를 직접 import해서 사용하는 것이 목표입니다.

<br/>
<br/>

# 🗒️ 목차

[🚀 설치](#🚀-설치)  
[📚 사용법](#📚-사용법)  
[🎥 위의 예시 보기](#🎥-위의-예시-보기)  
[👨‍💻 만든이](#👨‍💻-만든이)

<br/>
<br/>

# 🚀 설치

`npm` 또는 `yarn`을 사용하여 설치할 수 있습니다.

```
$ npm install noah-modal
$ yarn add noah-modal
```

<br/>
<br/>

# 📚 사용법

`noah-modal`은 `ModalProvider`와 `useModal`를 사용하여 모달을 등록하고 모달을 열고 닫을 수 있습니다.

<br/>
<br/>

## 1️. ModalProvider로 모달 등록하기

다음과 같이 `src/index.tsx`에 `ModalProvider`를 등록하세요.

```tsx
// NoahModal.tsx

const NoahModal = () => {
  return <div>노아 모달입니다.</div>;
};

export default NoahModal;
```

```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ModalProvider } from 'noah-modal'; // noah-modal 불러오기

import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ModalProvider
      modals={[
        {
          title: 'noah modal',
          component: <NoahModal />,
          name: 'myModal',
          delayMsTime: 500,
        },
      ]}
    >
      <App />
    </ModalProvider>
  </React.StrictMode>
);
```

`ModalProvider`는 `modal`을 매개변수로 받습니다. `modal`은 배열이며 앱에 등록하고자 하는 모달을 요소로 가집니다. 각 요소는 다음과 같은 속성을 가집니다.

|         key         |      value type      | 필수인가요? |  기본값  |                                            설명                                             |
| :-----------------: | :------------------: | :---------: | :------: | :-----------------------------------------------------------------------------------------: |
|        title        |        string        |     yes     |    -     |                                     모달의 제목입니다.                                      |
|      component      |     JSX.Element      |     yes     |    -     |                                    모달 내 컨텐츠입니다.                                    |
|        name         |        string        |     yes     |    -     |              모달 이름입니다. 해당 값은 모달을 열고 닫을 때 사용되는 값입니다.              |
| isAbleBackdropClick |       boolean        |     no      |   true   |          모달 밖 배경을 클릭했을 때, 모달을 닫을지 닫지 않을지에 대한 여부입니다.           |
|     delayMsTime     |        number        |     no      |    0     | 모달이 열고 닫을 때 걸리는 시간(ms)입니다. 해당 값을 설정하면 애니메이션 효과가 나타납니다. |
|      position       | "middle" or "bottom" |     no      | "bottom" |                                   모달의 위치를 정합니다.                                   |

<br/>
<br/>

## 2. useModal의 Modal로 모달 위치 정하기

보통 하나의 앱에서 하나의 모달이 존재합니다. 때문에 `ModalProvider`보단 하위 컴포넌트에 그리고 다른 컴포넌트들 보단 상위 컴포넌트에 `Modal`의 위치를 정하는 것을 권장합니다.

다음은 전역적으로 필요한 것들을 설정하는 곳인 `App.tsx`에 `Modal`의 위치를 정한 예시입니다.

```tsx
import { useModal } from 'noah-modal'; // noah-modal 불러오기
import { Outlet } from 'react-router-dom';
import GlobalStyle, { GlobalLayout } from 'styles/globalStyle';

function App() {
  const { Modal } = useModal(); // useModal 훅을 통해 랜더링을 할 Modal 가져오기

  return (
    <>
      <GlobalStyle />
      <GlobalLayout>
        <Outlet />
        {Modal && <Modal />}
      </GlobalLayout>
    </>
  );
}

export default App;
```

<br/>
<br/>

## 3️. useModal의 openModal로 모달 열기

`openModal` 함수를 통해 모달을 열 수 있습니다. 매개변수로는 앞서 등록한 모달의 `name`을 전달합니다.

```tsx
import { useModal } from 'noah-modal';

function Home() {
  const { openModal } = useModal();

  const handleClickButton = () => {
    openModal('noahModal'); // 모달 열기
  };
  return (
    <div>
      <button onClick={handleClickButton}>노아 모달 열기</button>
    </div>
  );
}

export default Home;
```

<br/>
<br/>

## 4️. useModal의 closeModal로 모달 닫기

`closeModal` 함수를 통해 모달을 닫을 수 있습니다. `openModal` 과 마찬가지로 매개변수로 `name`을 전달합니다.

```tsx
// NoahModal.tsx
import { useModal } from 'noah-modal';

function NoahModal() {
  const { closeModal } = useModal();

  return (
    <div>
      <div>노아 모달입니다.</div>
      <button onClick={() => closeModal('noahModal')}>모달 닫기</button>
    </div>
  );
}

export default NoahModal;
```

<br/>
<br/>

# 🎥 위의 예시 보기

다음은 `노아 모달`이 열고 닫는 모습을 나타낸 영상입니다.

![모달 시연 영상](https://cdn.discordapp.com/attachments/1078222159966638143/1104693662635528232/--2023-05-07--5.54.14.gif)

<br/>
<br/>

# 👨‍💻 만든이

<table>
  <tr>
    <td align="center" width="120px">
      <a href="https://github.com/shackstack" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/57981252?v=4" alt="노아(김홍동) 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/nlom0218" target="_blank">
        노아(김홍동)
      </a>
    </td>
  </tr>
</table>
