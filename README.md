# 원티드 인턴십 프론트엔드 4팀 - 3주차 과제
## 📖 과제 설명
**동료학습**을 통해서 팀에서 생각한 **[차트만들기]** 의 `Best Pratice` 만들기
- `Best Practice`란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.

## 🔗 배포링크
[🔗 배포 링크 이동](https://pre-onboarding-9th-3-4.vercel.app/)

## 🧑‍💻 팀원 소개
<table>
  <tbody>
    <tr>
      <td align="center"><a href="https://github.com/SongNoin"><img src="https://avatars.githubusercontent.com/u/88178866?v=4" width="100px; alt=""/><br /><sub><b>송경환(팀장)</b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/sehyeon4687"><img src="https://avatars.githubusercontent.com/u/104138055?v=4" width="100px;" alt=""/><br /><sub><b>박세현 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/ws8313"><img src="https://avatars.githubusercontent.com/u/87023889?v=4" width="100px;" alt=""/><br /><sub><b>김우성 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/chanwoo00106"><img src="https://avatars.githubusercontent.com/u/57276315?v=4" width="100px;" alt=""/><br /><sub><b>변찬우 </b></sub></a><br /></td>
           <tr/>
      <td align="center"><a href="https://github.com/hyemin33"><img src="https://avatars.githubusercontent.com/u/124856203?v=4" width="100px;" alt=""/><br /><sub><b>조혜민 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/2taesung"><img src="https://avatars.githubusercontent.com/u/66891085?v=4" width="100px;" alt=""/><br /><sub><b>이태성 </b></sub></a><br /></td>
      <td align="center"><a href="https://github.com/seongbin9786"><img src="https://avatars.githubusercontent.com/u/28754907?v=4" width="100px;" alt=""/><br /><sub><b>김성빈 </b></sub></a><br /></td>
    </tr>
  </tbody>
</table>

## 💻 실행방법 
   ```bash
   # 프로젝트 클론
   git clone "https://github.com/wanted-pre-onboarding-fe-team-4/pre-onboarding-9th-3-4.git"
  
  # 프로젝트 폴더 진입
   cd pre-onboarding-9th-3-4
   
  # 모듈 설치 및 실행
   yarn && yarn dev
  ```
  
## 기능 구현

<img width="1797" alt="스크린샷 2023-03-17 오후 10 22 18" src="https://user-images.githubusercontent.com/88178866/225916869-2840d243-a238-406c-8e95-593bae193220.png">


https://user-images.githubusercontent.com/88178866/225917217-b8710779-076c-499c-98ea-e3d59c750909.mov

https://user-images.githubusercontent.com/88178866/225917129-7b2586e0-f739-4837-9c3e-133d4533b985.mov






#### ✅ Assignment 1 
- 시계열 차트 만들기
    - 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
    - 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
    - Area 그래프의 기준값은 `value_area` 값을 이용해주세요
    - Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
    - 차트의 Y축에 대략적인 수치를 표현해주세요

#### ✅ Assignment 2

- 호버 기능 구현
    - 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요

#### ✅ Assignment 3

- 필터링 기능 구현
  - 필터링 기능을 구현해주세요, 필터링은 특정 데이터를 하이라이트 하는 방식으로 구현해주세요
  - 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
  - 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
  - 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요

## 📦 폴더구조
```
📦 src 
├── 📄 App.tsx
├── 📄 main.tsx
├── 📂 api
│   └── 📄 getData.ts
├── 📂 components
│   ├── 📂 Chart
│   │   ├── 📄 index.tsx
│   │   ├── 📄 style.tsx
│   │   └── 📄 tooltip.tsx
│   └── 📂 Filter
│       ├── 📄 index.tsx
│       └── 📄 type.ts
├── 📂 config
│   └── 📄 ChartStyleConfig.ts
├── 📂 types
└── 📂 util
    └── 📄 suspendable.ts

```
## 🤓 Best Practice
각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 `Best Practice` 로 채택해서 프로젝트에 녹였습니다.

### 1. 차트 라이브러리 선정

이번 과제에서는 차트 라이브러리 선정이 가장 중요하다 생각해서 구성원 전부 다른 라이브러리를 선정해 개인구현 해본 뒤 네가지 기준에 따라 하나를 선정하였습니다.
Recahrts 라이브러리를 선정하였는데 그 이유는 요구사항을 모두 구현할 수 있었고, 번들크기가 크지 않아서 선정하게 되었습니다.

|  | 구현 자유도 | 요구사항 적합성 | API 문서 | 번들크기 |
| --- | --- | --- | --- | --- |
| Recharts | 하고싶은 구현 대부분 가능 | 요구사항 모두 구현 가능 | 친절한편은 아니어서 구글링을 해야한다. | 488.18KB |
| chartJS | 상중하 중 중, 대표적으로는 멀티 y축 안됨 | 코드가 깔끔하고 좋았지만 요구사항은 중 정도 | api문서보다 스택오버플로우가 오히려 잘되어있었다. 에러도 스택오버플로우에서 찾았다. | 388.544KB |
| styled-chart | 거의 없는 수준, 라인이나 바 중 하나만 선택할 수 있다. y축 추가 안되고… | 요구사항 중 3번인 필터, 하이라이트 기능이 안된다. 복합차트 구현 안됨 | readme 로 이루어진 문서, 도움이 되지않았고 웹상 정보도 부족하다 | 31.28KB |
| apex | 커스터마이징은 잘 됨, 하지만 바닐라JS 친화적이라 리액트에서는 적합하지 않다 | 가능은 하나 코드가 복잡해지고 어렵다. | 참고할 수 있는게 많지않고 웹상에서 예시를 찾아 봐야한다. | 492.36KB |
| echart | 하고싶은 구현 대부분 가능, 하지만 바닐라 JS에 친화적이었다. | 요구사항 모두 구현 가능 | 정리가 잘 되어있었다 | 2.28MB |

### 2. UI/UX
본 과제에서 사용자에게 가장 적합한 UI 를 고민해 보았을 때 아래와 같이 선정하였습니다.

**년월일 분리**
- 년월일 까지 X축 레이블로 들어가면 가독성이 떨어져 공통인 년월일은 분리하여 배치했습니다.

**토글 필터**
- 사용자가 간단한 방식으로 해당 Id의 차트를 볼 수 있도록 토글 버튼을 적용하였습니다.

**차트 높이 조정**
- 복합차트의 특성 상 차트가 겹치면 가독성이 매우 떨어져 area 차트의 y축 범위를 높게 잡아 두 차트의 고저차이를 주었습니다.

### 3. 객체 데이터 배열 데이터로 정제

- 차트데이터를 배열형식으로 넣어줘야 하기때문에 키-밸류 객체를 배열로 정제해주었습니다.
- 날짜인 키값도 데이터에 필요해서 키가 삽입된 객체를 만들어주었습니다.
- `Object.entries` 를 이용해 적은 수의 코드로 정제해주었습니다.

```tsx
...
const getData = async () => {
  try {
    const response = await axios.get('/mock_data.json');
    const data: IChartObj = response.data.response;

    return Object.entries(data).map(([key, value]) => ({
      date: key.split(' ')[1],
      ...value,
    }));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getData;
```

### 4. 반응형 디자인 적용



https://user-images.githubusercontent.com/88178866/225913437-66feb2a8-ab87-47e4-a2d7-abeb416b4967.mov

### 5. 코드리뷰

지난 2주동안 저희 팀이 적극적인 코드리뷰가 부족했던 점이 있어서 PR 올린 후 30분 이내로 리뷰를 받고 한명이상의 승인을 받아야 머지하도록 변경하였습니다.

덕분에 좀더 활발한 코드리뷰가 이루어졌습니다.

기존의 지켰던 규칙도 꾸준히 진행하였습니다.

- Issue 작성
- Branch, commit 컨벤션
- [PR에 issue 연계](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword)


## 👾 코드 컨벤션
### commit message

| Type | Description |
| --- | --- |
| test | 누락된 테스트 추가 |
| feat | 새로운 기능 추가 |
| fix | 버그 수정 |
| chore | 빌드 프로세스나 보조 도구 변경 |
| docs | 문서 변경 |
| refactor | 버그 수정도, 새로운 기능 추가도 아닌 코드 변경 |
| style | 마크업, 공백, 포맷, 세미콜론 누락 등 스타일 변경 |
| ci | CI 관련 변경 |
| perf | 성능 개선 |

### branch

| 브랜치 이름 | 설명 |
| --- | --- |
| master | 제품으로 출시 가능한 브랜치 |
| feature/개발할 내용 | 기능을 개발하는 브랜치 |
| fix/수정할 내용  | 출시 버전에서 발생한 버그를 수정하는 브랜치 |
