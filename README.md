<p align="center">
  <img src="media/devtool-plus-logo.png" alt="DevTool+ Logo" width="60" />
</p>

---

<h1 align="center">
DevTool+ 한국어.ver
</h1>

<p align="center">
  <b>[Localization Project]</b><br/>
  This project is a localized version based on the original <a href="https://github.com/fuzionix/devtool-plus">fuzionix/devtool-plus</a>.<br/>
  본 프로젝트는 원본 <a href="https://github.com/fuzionix/devtool-plus">fuzionix/devtool-plus</a>를 기반으로 한국어 현지화를 진행한 버전입니다.
</p>

<p align="center">
  <a href="#korean">한국어</a> | <a href="#english">English</a>
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=JiHoonKim.devtool-plus-kr">
    <img src="https://img.shields.io/badge/VS%20Code-DevTool%2B_KR-3799fb?style=flat-square&labelColor=1f1f1f" alt="VS Code Extension" />
  </a>
  <a href="https://open-vsx.org/extension/JiHoonKim/devtool-plus-kr">
    <img src="https://img.shields.io/badge/OpenVSX-DevTool%2B_KR-6537fb?style=flat-square&labelColor=1f1f1f" alt="Open VSX" />
  </a>
  <a href="https://github.com/Muzai-Moratorium/devtool-plus-kr/releases">
    <img src="https://img.shields.io/github/v/release/Muzai-Moratorium/devtool-plus-kr?style=flat-square&color=fb8237&labelColor=1f1f1f" alt="Latest Release" />
  </a>
  <a href="https://github.com/Muzai-Moratorium/devtool-plus-kr">
    <img src="https://img.shields.io/github/stars/Muzai-Moratorium/devtool-plus-kr?style=flat-square&color=fff&labelColor=1f1f1f" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/Muzai-Moratorium/devtool-plus-kr/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square&color=d4fb37&labelColor=1f1f1f" alt="MIT License" />
  </a>
</p>

<br/>

<p align="center">
  <img src="https://raw.githubusercontent.com/fuzionix/devtool-plus/refs/heads/main/media/devtool-plus-demo.gif" alt="Demo" width="840" />
</p>

<a name="korean"></a>
## 🌏 한국어

### 소개

**DevTool+** (DevTool Plus)는 일반적인 개발자용 I/O 도구를 에디터 내에서 즉시 사용할 수 있게 해주는 확장 프로그램입니다. **무료**이며, **광고나 추적 스크립트가 일절 포함되어 있지 않습니다.**

모든 도구는 로컬 머신에서 실행되며, **외부 네트워크 요청을 전혀 발생시키지 않습니다.** 따라서 민감한 개인정보나 프로젝트 데이터를 다루기에도 매우 안전합니다. 개발 워크플로우에 도구들을 직접 통합함으로써 외부 사이트에 의존하지 않고 더 빠르고 집중력 있게 개발 작업을 수행할 수 있도록 돕습니다.

### 주요 기능

- [🔒 **보안**] - 모든 도구가 에디터 내부의 로컬 환경에서 실행됩니다. 데이터가 외부 서버로 전송되지 않아 프라이버시가 완벽하게 보호되며 오프라인에서도 사용 가능합니다.
- [🧰 **에디터 통합**] - 에디터 워크플로우에 직접 임베딩되어 있습니다. 코딩 환경을 벗어나지 않고 사이드 패널에서 바로 도구를 활용하세요.
- [🛠️ **다양한 도구 세트**] - 데이터, 인코딩, 디자인, 텍스트, 암호화 등 다양한 카테고리에 걸쳐 35개 이상의 도구를 제공하며 지속적으로 확장 중입니다.
- [📔 **네이티브 UI 제공**] - Lit 프레임워크 기반의 세련된 UI 컴포넌트(코드 에디터, Diff 뷰어 등)를 제공하여 에디터 테마와 자연스럽게 어우러집니다.
- [⚡ **실시간 업데이트**] - 입력과 동시에 결과가 갱신되어 즉각적인 피드백을 제공합니다.
- [💻 **고성능**] - 가벼운 웹 컴포넌트 라이브러리인 Lit으로 구축되어 빠른 렌더링과 최소한의 자원 소모를 보장합니다.
- [📌 **도구 핀 고정**] - 자주 사용하는 도구를 상단에 배치하여 효율적으로 관리할 수 있습니다.
- [🔍 **도구 검색**] - 이름, 카테고리, 태그를 통해 필요한 도구를 빠르게 찾으세요.

### 설치 방법

<p align="center">
  에디터의 확장 프로그램 마켓플레이스에서 "<b>DevTool+ KR</b>"를 검색하거나 아래 링크를 통해 설치할 수 있습니다.
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=JiHoonKim.devtool-plus-kr">Visual Studio Code</a>
  <span>|</span>
  <a href="https://open-vsx.org/extension/JiHoonKim/devtool-plus-kr">Cursor</a>
  <span>|</span>
  <a href="https://open-vsx.org/extension/JiHoonKim/devtool-plus-kr">Windsurf</a>
</p>

```sh
code --install-extension JiHoonKim.devtool-plus-kr
```

### 도구 목록

<table align="center">
  <tr>
    <th>도구 이름</th>
    <th>버전</th>
    <th>에디터 연동</th>
    <th>진행 상태</th>
  </tr>
  <tr>
    <th colspan="4">[인코딩 / 디코딩]</th>
  </tr>
  <tr>
    <td>베이스64 인코더 / 디코더</td>
    <td align="center">1.0.2</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>URL 인코더 / 디코더</td>
    <td align="center">1.0.1</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>URL 파서</td>
    <td align="center">1.1.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>ASCII / 2진수 / 16진수</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>유니코드 검사기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>HTML 엔티티 이스케이프</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">🆕</td>
  </tr>

  <tr>
    <th colspan="4">[UI / UX 디자인]</th>
  </tr>
  <tr>
    <td>색상 변환기</td>
    <td align="center">1.2.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>색상 팔레트 생성기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>그라데이션 메이커</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Cubic Bezier 애니메이션</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>대비 검사기 (WCAG)</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>색상 믹서</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>

  <tr>
    <th colspan="4">[데이터 조작]</th>
  </tr>
  <tr>
    <td>UUID 생성기</td>
    <td align="center">1.1.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>데이터 형식 변환기</td>
    <td align="center">1.2.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>JSON 에디터</td>
    <td align="center">1.1.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>YAML 에디터</td>
    <td align="center">1.1.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>HTML / XML 에디터</td>
    <td align="center">1.1.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>날짜/시간 변환기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>

  <tr>
    <th colspan="4">[텍스트 유틸리티]</th>
  </tr>
  <tr>
    <td>텍스트 비교기 (Diff Check)</td>
    <td align="center">1.1.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>마크다운 표 생성기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>로렘 입숨 생성기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">🆕</td>
  </tr>
  <tr>
    <td>슬러그 생성기 (Slug)</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>

  <tr>
    <th colspan="4">[개발자 유틸리티]</th>
  </tr>
  <tr>
    <td>QR 코드 생성기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>HTTP 상태 코드 조회</td>
    <td align="center">1.0.1</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>데이터 단위 변환기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>단락 경로 변환기 (UNIX/Win)</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>진법 변환기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>

  <tr>
    <th colspan="4">[암호화]</th>
  </tr>
  <tr>
    <td>토큰 생성기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>비밀번호 생성기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>JWT 분석기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>AES 암호화 / 복호화</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>SHA 해시 생성기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>RSA 키 쌍 생성기</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>RSA 암호화 / 복호화</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>전자서명 생성 / 검증</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td colspan="4" align="right">✅ = 출시됨 | 🚧 = 개발 중 | 🆕 = 신규 추가</td>
  </tr>
</table>

### 자주 묻는 질문 (FAQ)

**이 확장은 텔레메트리나 사용 데이터를 수집하나요?**
아니요. DevTool+는 철저한 프라이버시 원칙에 따라 구축되었습니다. 추적 스크립트, 텔레메트리 및 외부 API 호출이 전혀 없습니다.

**이 확장이 에디터 속도를 느리게 만드나요?**
DevTool+는 가벼운 웹 컴포넌트 라이브러리인 **Lit**을 사용하여 구축되었습니다. 확장 프로그램과 뷰는 사이드 패널이나 도구를 실제로 열었을 때만 메모리에 로드되어 에디터의 성능에 영향을 주지 않습니다.

**에디터 테마와 잘 맞나요?**
네. DevTool+는 네이티브 UI CSS 변수를 사용합니다. 현재 사용 중인 테마에 맞게 색상, 테두리, 타이포그래피가 자동으로 조정됩니다.

---

<a name="english"></a>
## 🌐 English

### Introduction

**DevTool+**, (DevTool Plus) is a code editor extension that provides common developer I/O tools directly into your editor — It's **free**, **no ads**, and **no tracking**.

The extension keeping everything inside code editor and running entirely on your local machine. There are **no network requests involved**, making it safe to use even with private or production data. By integrating these tools directly into the development workflow, DevTool+ helps developers work faster, stay focused, and avoid relying on external websites for everyday tasks.

### Features

- [🔒 **Security**] - All tools run locally in code editor — no data is sent to external servers, ensuring privacy and offline usability.
- [🧰 **Integration with Editor**] - Directly embedded into code editor workflow; Use tools in the side panel without leaving your coding environment.
- [🛠️ **Diverse Toolset**] - Over 35 tools across categories like Data, Encoding, Design, Text, and Cryptography. (Will keep expanding)
- [📔 **Native UI Language**] - Have native-like UI components (e.g., code editors, diff viewers) powered by Lit for a polished, theme-aware interface.
- [⚡ **Real-Time Update**] - Tools I/O update instantly as you type, providing immediate feedback and results.
- [💻 **Performance**] - Built with Lit for fast, efficient rendering and minimal resource usage.
- [📌 **Pinned Tools**] - Pin your favorite tools for quick access and better organization.
- [🔍 **Searchable Tools**] - Quickly find tools by name, category, or tags.

### Installation

<p align="center">
  Directly search for "<b>DevTool+ KR</b>" in your code editor's extension marketplace. Or install through
</p>

<p align="center">
  <a href="https://marketplace.visualstudio.com/items?itemName=JiHoonKim.devtool-plus-kr">Visual Studio Code</a>
  <span>|</span>
  <a href="https://open-vsx.org/extension/JiHoonKim/devtool-plus-kr">Cursor</a>
  <span>|</span>
  <a href="https://open-vsx.org/extension/JiHoonKim/devtool-plus-kr">Windsurf</a>
</p>

```sh
code --install-extension JiHoonKim.devtool-plus-kr
```

### Tool List

<table align="center">
  <tr>
    <th>Tool</th>
    <th>Version</th>
    <th>Editor</th>
    <th>Progress</th>
  </tr>
  <tr>
    <th colspan="4">[Encode / Decode]</th>
  </tr>
  <tr>
    <td>Base64 Encoder / Decoder</td>
    <td align="center">1.0.2</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>URL Encoder / Decoder</td>
    <td align="center">1.0.1</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>URL Parser</td>
    <td align="center">1.1.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>ASCII Binary / Hex</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Unicode Inspector</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Escape HTML Entities</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">🆕</td>
  </tr>

  <tr>
    <th colspan="4">[UI / UX Design]</th>
  </tr>
  <tr>
    <td>Color Convertor</td>
    <td align="center">1.2.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Color Palette Generator</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Gradient Maker</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Cubic Bezier</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Contrast Checker</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Color Mixer</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>

  <tr>
    <th colspan="4">[Data Manipulation]</th>
  </tr>
  <tr>
    <td>UUID Generator</td>
    <td align="center">1.1.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Data Format Convertor</td>
    <td align="center">1.2.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>JSON Editor</td>
    <td align="center">1.1.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>YAML Editor</td>
    <td align="center">1.1.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>HTML / XML Editor</td>
    <td align="center">1.1.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Datetime Convertor</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>

  <tr>
    <th colspan="4">[Text]</th>
  </tr>
  <tr>
    <td>Difference Checker</td>
    <td align="center">1.1.0</td>
    <td align="center">✅</td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Markdown Table Builder</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Lorem Ipsum Generator</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">🆕</td>
  </tr>
  <tr>
    <td>Slug Generator</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>

  <tr>
    <th colspan="4">[Utility]</th>
  </tr>
  <tr>
    <td>QR Code Generator</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>HTTP Status Code</td>
    <td align="center">1.0.1</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Data Unit Converter</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>UNIX / Windows Path Convertor</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Number Base Convertor</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>

  <tr>
    <th colspan="4">[Cryptography]</th>
  </tr>
  <tr>
    <td>Token Generator</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Password Generator</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>JWT Inspector</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>AES Encryption / Decryption</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>SHA Hashing</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>RSA Key Generator</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>RSA Encryption / Decryption</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td>Signature Signer / Verifier</td>
    <td align="center">1.0.0</td>
    <td align="center"></td>
    <td align="center">✅</td>
  </tr>
  <tr>
    <td colspan="4" align="right">✅ = Released | 🚧 = In Progress | 🆕 = New</td>
  </tr>
</table>

### FAQ

**Does this extension collect any telemetry or usage data?**
No. DevTool+ is built on the principle of absolute privacy. There are no tracking scripts, no telemetry, and no external API calls.

**Will installing this extension slow down code editor?**
DevTool+ is built using **Lit**, a lightweight web component library. The extension and its views are only loaded into memory when you actually open the side panel or a tool, ensuring your editor remains fast and responsive.

**Does it match my code editor's theme?**
Yes. DevTool+ uses native UI CSS variables. It will automatically adapt its colors, borders, and typography to match whatever theme you are currently using.

### License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.

---
