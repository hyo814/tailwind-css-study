# Tailwind CSS (1차 정리)

공식 문서 : https://tailwindcss.com/docs/installation/using-vite

https://www.creative-tim.com/twcomponents/cheatsheet

https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss

[[필독]_Tailwind_CSS_잘_하기_위한_필독_사항_&_핵심이론.pdf](%ED%95%84%EB%8F%85_Tailwind_CSS_%EC%9E%98_%ED%95%98%EA%B8%B0_%EC%9C%84%ED%95%9C_%ED%95%84%EB%8F%85_%EC%82%AC%ED%95%AD__%ED%95%B5%EC%8B%AC%EC%9D%B4%EB%A1%A0.pdf)

### 0. Tailwind CSS IntelliSense 설정 (VS Code)

Tailwind CSS를 VS Code에서 효율적으로 사용하려면, 공식 확장 프로그램인 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)를 설치. 이 확장 프로그램은 자동 완성, 문법 강조, 클래스 추천 기능을 제공.

### 1. Tailwind CSS 장단점

### **장점**

| 항목 | 설명 |
| --- | --- |
| **빠른 UI 구성** | CSS 클래스만으로 바로 스타일 지정 가능 → 별도 CSS 작성 없이 빠르게 화면 구성 가능 |
| **일관된 디자인 유지** | 디자인 시스템(폰트, 컬러, 여백 등)이 설정되어 있어 일관된 UI 유지에 유리 |
| **컴포넌트화와 궁합 좋음** | React, Vue 등의 컴포넌트 기반 프레임워크와 잘 어울림 |
| **클래스 이름 고민 없음** | BEM처럼 이름을 지을 필요 없이 역할에 맞는 유틸리티 클래스 사용 |
| **불필요한 CSS 제거 가능** | `purge` 기능으로 사용하지 않는 클래스는 빌드시 제거 → 결과물 용량 작음 |
| **반응형 쉽게 처리** | `sm:`, `md:` 등의 접두사로 반응형 레이아웃 작성 간편 |
| **커스터마이징 쉬움** | `tailwind.config.js`로 테마, 컬러, 브레이크포인트 등 자유롭게 설정 가능 |

### **단점**

| 항목 | 설명 |
| --- | --- |
| **HTML이 지저분해짐** | 클래스가 너무 많아져서 마크업이 길어지고 가독성이 떨어질 수 있음 |
| **초반 러닝커브** | 처음에는 `mt-4`, `text-gray-500` 같은 클래스 의미를 익히는 데 시간이 걸림 |
| **디자인 시스템 이해 필요** | 커스터마이징이나 팀 협업 시, Tailwind의 디자인 토큰 구조를 이해해야 함 |
| **기존 CSS 지식 활용 제한** | 유틸리티 클래스만 쓰다 보면 SCSS, BEM 같은 구조적 CSS 작성이 줄어듬 |
| **로직과 스타일이 뒤섞임** | JSX에 너무 많은 클래스가 들어가면 코드 관리가 어려워질 수 있음 |
| **스타일 재사용 어려움** | 똑같은 스타일을 여러 곳에서 쓰려면 클래스 복붙이 많아지고, 중복 발생 가능 |

---

## 2. rem 단위 & 비율 단위

Tailwind CSS는 기본적으로 `rem` 단위를 사용. 이는 루트 요소의 폰트 크기를 기준으로 하며, 일반적으로 1rem은 16px입니다. 이러한 단위 사용은 반응형 디자인에 유리.

| Tailwind 단위 | 실제 px |
| --- | --- |
| `mt-1` | 4px (0.25rem) |
| `mt-2` | 8px (0.5rem) |
| `w-1/2` | 50% |

```html
<div class="mt-4 w-1/2 p-2">박스</div>

```

---

## 3. 색상 체계 ([https://tailwindcss.com/docs/colors](https://tailwindcss.com/docs/colors))

Tailwind CSS는 색상을 이름과 숫자 조합으로 관리

- 22종 색상(`blue`, `gray`, `rose`, 등)
- 명도: `50` ~ `950`
- 커스텀: `bg-[#123456]`

```html
<p class="text-red-600 bg-yellow-100">강조 텍스트</p>

```

---

## 4. 방향별 클래스 네임

- `pt-4`: 위쪽 padding
- `px-6`: 좌우 padding
- `mx-4`: 좌우 margin

```html
<div class="px-6 py-2 mt-4">여백 처리</div>

```

---

## 5. 글자 서식 & 색상

- `text-xl`, `font-bold`, `italic`, `truncate`
- `line-clamp-2`, `tracking-wide`, `leading-6`

```html
<p class="text-lg font-semibold tracking-wide line-clamp-2">
  너무 긴 문장은 이렇게 잘립니다.
</p>

```

---

## 6. 보더(Border)

- `border`, `border-2`, `rounded-lg`
- `border-blue-500`, `rounded-t-lg`, `border-dashed`

```html
<div class="border border-gray-300 rounded-md p-4">카드</div>

```

---

## 7. 간격, 크기, 여백

- `p-*`, `m-*`: 패딩, 마진
- `w-[300px]`, `h-full`, `size-[100px]`: 크기
- `min-w-*`, `max-h-*`: 제약

```html
<div class="p-4 w-[200px] h-[100px]">사이즈</div>

```

---

## 8. 배경색 & 이미지

- `bg-*`, `bg-gradient-to-r`, `bg-[url()]`
- `bg-cover`, `bg-no-repeat`, `bg-center`

```html
<div class="bg-gradient-to-r from-pink-400 to-yellow-300 text-white p-4">
  그라디언트 배경
</div>

```

---

## 9. 레이아웃 & 위치

- `relative`, `absolute`, `top-0`, `left-[50%]`
- `z-10`, `invisible`, `aspect-video`

```html
<div class="relative">
  <div class="absolute top-2 left-2">떠 있는 요소</div>
</div>

```

---

## 10. 그림자(Shadow)

- `shadow`, `shadow-md`, `shadow-inner`
- 커스텀: `shadow-[rgba(0,0,0,0.2)]`

```html
<div class="shadow-lg p-4">그림자 있는 박스</div>

```

---

## 11. 트랜스폼 / 변형

- `scale-110`, `rotate-[45deg]`, `translate-x-[10px]`

```html
<div class="hover:scale-105 rotate-2 transition-all duration-300">
  마우스 올리면 변형
</div>

```

---

## 12. 플렉스 (Flex)

Flexbox는 "부모 요소에 display: flex를 선언"하고, 자식 요소의 **가로/세로 배치, 정렬, 간격**을 쉽게 조절하는 방식.

**기본 방향은 가로(row)**이고, 반응형 구현에도 가장 많이 쓰임.

### 🔹 실무에서 자주 사용하는 Flex 용도
- `flex` : 자식 요소의 성장(shrink/grow) 비율 한 번에 설정
- `flex-direction` : 주축 방향 설정 (기본 가로)
- `flex-wrap` : 넘치는 자식 요소 줄바꿈
- `justify-content` : 주축 정렬 (가로 정렬)
- `align-items` : 교차축 정렬 (세로 정렬)
- `gap` : 자식 요소 간 간격

```html
<div class="flex justify-between items-center p-4 bg-gray-100">
  <div class="w-1/4">왼쪽</div>
  <div class="w-1/2 text-center">중앙</div>
  <div class="w-1/4 text-right">오른쪽</div>
</div>
```

| 속성 | 설명 |
| --- | --- |
| `flex`, `flex-col` | 기본 방향 지정 |
| `justify-*` | 가로 정렬 |
| `items-*` | 세로 정렬 |
| `gap-*` | 자식 간격 |
| `flex-1`, `basis-1/2` | 자식 크기 지정 |

---

## 13. 그리드 (Grid)

Grid는 "2차원 배치"가 가능.

Flex는 한 방향(가로 or 세로)이지만, Grid는 **행과 열을 동시에 정의** 해서 **복잡한 레이아웃도 간단하게 구현.**

### 🔹 실무에서 자주 사용하는 Grid 용도
- `grid-template-columns` (`grid-cols-*`) : 열 구조 정의
- `grid-template-rows` : 행 구조 정의
- `gap` : 셀 간 간격
- `grid-column`, `col-span-*` : 열 병합
- `grid-row`, `row-span-*` : 행 병합
- `grid-auto-flow` : 자동 배치 방향 지정

```html
<div class="grid grid-cols-3 gap-4 p-4">
  <div class="col-span-2 bg-blue-200">2칸</div>
  <div class="bg-yellow-200">1칸</div>
  <div class="col-span-3 bg-green-200">전체 너비</div>
</div>
```

| 속성 | 설명 |
| --- | --- |
| `grid-cols-*` | 열 개수 |
| `gap-*` | 간격 |
| `col-span-*` | 열 병합 |
| `row-span-*` | 행 병합 |

---

## 14. 자식/자손 선택자

Tailwind는 기본적으로 `CSS selector`를 지원하지 않지만, **[&] 문법**을 통해 특정 조건의 자식, 자손을 지정 가능.

```html
<div class="[&>p]:text-blue-600 [&>p:hover]:underline">
  <p>자식 텍스트</p>
</div>

```

- `[&>태그]:스타일`: 자식에만 적용
- `[&>*]:text-sm`: 모든 자식 적용
- `[&:nth-child(odd)]`: 조건 선택

---

## 15. 가상 클래스 (hover, focus, group, peer)

```html
<a class="group">
  <h3 class="group-hover:text-pink-500">타이틀</h3>
  <p class="hidden group-hover:block">설명</p>
</a>

<input class="peer border" />
<p class="hidden peer-focus:block text-red-500">필수 입력</p>

```

| 상태 | 예시 |
| --- | --- |
| `hover:` | 마우스 올림 |
| `focus:` | 포커스 상태 |
| `active:` | 클릭 상태 |
| `group-*` | 부모에 적용 |
| `peer-*` | 형제에 적용 |

---

## 16. 반응형 레이아웃 ⇒ “ 모바일 퍼스트”

```html
<div class="flex flex-col md:flex-row gap-4">
  <div class="w-full md:w-1/2 bg-gray-100">왼쪽</div>
  <div class="w-full md:w-1/2 bg-gray-200">오른쪽</div>
</div>

```

| 접두사 | 최소 너비 |
| --- | --- |
| `sm:` | 640px |
| `md:` | 768px |
| `lg:` | 1024px |
| `xl:` | 1280px |
- 기본은 모바일
- 상위 해상도에서 덮어쓰기

---

## 17. `@apply` 예제 — 반복 스타일 재사용

### 상황

로그인 버튼, 회원가입 버튼 등에서 자주 쓰는 스타일을 공통 클래스로 정리하고 싶을 때.

### CSS (예: `src/styles/components.css`)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.btn {
  @apply px-4 py-2 rounded-lg text-white font-semibold;
}

.btn-primary {
  @apply btn bg-blue-600 hover:bg-blue-700;
}

.btn-secondary {
  @apply btn bg-gray-500 hover:bg-gray-600;
}

```

### 사용 예시 (JSX)

```jsx
<button className="btn-primary">로그인</button>
<button className="btn-secondary">회원가입</button>

```

---

## 18. `tailwind.config.js` 커스터마이징

### 상황

디자인 시스템에서 사용하는 고정 색상, 폰트, 간격 등을 Tailwind에 반영.

### tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F6FEB",
        secondary: "#64748B",
        "gray-soft": "#F1F5F9"
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
        display: ["Montserrat", "sans-serif"],
      },
      spacing: {
        "72": "18rem",
        "84": "21rem",
        "96": "24rem"
      },
    },
  },
  plugins: [],
}

```

### 사용 예시 (JSX)

```jsx
<h1 className="text-primary font-display text-2xl">제목</h1>
<div className="bg-gray-soft p-6 w-96">커스텀 spacing 사용</div>

```


## 19. Position 유틸리티 심화

```html
<div class="sticky top-0 bg-white z-50">스크롤 시 고정되는 헤더</div>
<div class="fixed bottom-4 right-4">고정된 플로팅 버튼</div>
```

| 속성 | 설명 |
| --- | --- |
| `sticky`, `fixed` | 스크롤 위치에 따른 고정 |
| `inset-0`, `top-1/2`, `right-[10px]` | 위치 제어 |

---

## 20. 모션 / 트랜지션 / 애니메이션

```html
<div class="transition-all duration-300 ease-in-out hover:scale-105">
  부드러운 호버 효과
</div>
```

| 속성 | 설명 |
| --- | --- |
| `transition-*`, `duration-*` | 전환 효과 |
| `ease-in`, `ease-out`, `ease-in-out` | 가속도 설정 |
| `animate-bounce`, `animate-spin` | 기본 애니메이션 클래스 |

---

## 21. 숨김 처리와 접근성

```html
<span class="sr-only">스크린 리더 전용 텍스트</span>
<div class="hidden md:block">모바일에선 숨김</div>
```

| 속성 | 설명 |
| --- | --- |
| `hidden` | 요소 감춤 |
| `sr-only` | 시각적으로 숨기고 스크린 리더에만 보임 |
| `aria-*`, `role` | 접근성 속성 |

---

### 22. 다크모드 처리

```html
<div class="bg-white text-black dark:bg-black dark:text-white">
  라이트/다크 모드에 따라 바뀌는 배경
</div>
```

| 속성 | 설명 |
| --- | --- |
| `dark:` | 다크 모드 대응 클래스 |
| 설정 방식 | `media` / `class` / `selector` 등 tailwind.config 설정 필요 |

---

### 23. 콘테이너 클래스

```html
<div class="container mx-auto px-4">가운데 정렬된 박스</div>
```

| 속성 | 설명 |
| --- | --- |
| `container` | 반응형 max-width 자동 설정 |
| `mx-auto`, `px-*` | 가운데 정렬, 내부 여백 설정 |

---

### 24. 유틸리티 우선 순위 제어 (!important)

```html
<div class="!text-red-500">강제로 스타일 우선 적용</div>
```

| 속성 | 설명 |
| --- | --- |
| `!` 접두사 | 우선순위를 강제로 올림 (Tailwind 내부 !important 처리) |

---
