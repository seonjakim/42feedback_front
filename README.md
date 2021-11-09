# 프로젝트 소개

정부 출범 개발자 양성소인 42서울에서는 정말 다양한 프로젝트를 진행하고 있습니다. 그만큼 free rider들도 발생하겠죠?! 프로젝트가 성공적으로 끝마치려면 프로젝트가 끝날 때까지 팀원들끼리 건설적인 피드백을 주고 받으면서 함께 성장하는 과정이 필요합니다. 여기서 어떻게 해야 주기적으로 건설적인 피드백을 주고 받을 수 있을까라는 고민에서 이 프로젝트가 시작되었습니다.

# 기술스택

## Next.js

42서울은 slack을 통해서 정말 많은 정보가 공유되고 있는데요. 매번 slack 검색을 통해서 내가 필요한 사이트(42와 관련된 사이트들)를 찾아 접속하는 것에 불편함을 느끼고 있었습니다. 프로젝트를 매주 진행하는 사람은 없을테고 프로젝트 피드백과 관련된 사이트 주소를 개인이 저장해두는 일이 적다고 생각했습니다. 그럴수록 구글 검색만으로도 42FEEDBACK 사이트를 검색할 수 있어야 사용자가 사용하기 편할 것이라고 생각하여 SEO에 더 적합한 Next.js를 선택하였습니다.

## Styled-component

작은 프로젝트는 하나의 CSS 파일에 style을 관리해도 무리가 없지만 당장의 버전 0의 구현은 작지만 설계를 크게 가져갈 계획인 해당 프로젝트의 경우 CSS와 JS 파일이 복잡해질 수 있다고 생각했습니다. 관련된 CSS를 JS와 함께 관리하는 것이 해당 프로젝트를 인수인계할 때에도 편리할 것이라 판단하여 styled-component를 적용하였습니다.

# 기술

## 검색어 자동완성

```javascript
const subString = (cadetId, input) =>
  input && cadetId.toLowerCase().substring(0, input.length) === input

const targetCadetArray = (cadets, input) =>
  cadets.filter((cadet) => subString(cadet.login, input) === true)

const autoCompleteList = targetCadetArray(cadets, input)
```

- subString : 비교할 정보를 입력된 검색어의 길이만큼 잘라서 비교하는 함수
- targetCadetArray : 학생 리스트를 input 길이만큼만 잘라서 input과 같은지 비교 후 같은 리스트들만 배열로 리턴하는 함수

이렇게 두 개의 함수를 이용하여 input의 길이만큼 정보를 잘라서 비교하여 같은 정보들만 배열형식으로 리턴하는 함수를 만들었다. 구글에서는 아마 구문 분석과정이 들어갈 것 같지만 주소 검색이나 정해진 자료에서 검색어 자동완성을 만들 경우 해당 함수 2개로 커버할 수 있다.
