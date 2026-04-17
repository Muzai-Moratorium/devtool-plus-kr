import type { TranslationMap } from "./en";

export const ko: TranslationMap = {
	webview: {
		searchPlaceholder: "예: UUID Generator",
		emptyStateMessage: "도구 탐색기에서 도구를 선택하세요",
		recentTools: "최근 사용한 도구",
		about: "DevTool+ 정보",
		pinned: "고정됨",
	},
	categories: {
		"Encode / Decode": "인코딩 / 디코딩",
		"UI Design": "디자인",
		Data: "데이터 포맷",
		Text: "텍스트 유틸리티",
		Utility: "개발자 유틸리티",
		Cryptography: "암호화",
		Productivity: "생산성",
	},
	tools: {
		"base64-encoder": {
			label: "Base64 인코더 / 디코더",
			description:
				"Base64는 텍스트만 처리하는 시스템 간 데이터 전송을 위해 이진 데이터를 64개의 문자(A-Z, a-z, 0-9, +, /)를 사용하여 텍스트 형식으로 변환하는 인코딩 방식입니다.",
			encode: "인코드",
			decode: "디코드",
			downloadFile: "파일 다운로드",
			downloadPrefix: "다운로드",
		},
		"json-editor": {
			label: "JSON 에디터",
			description:
				"JSON 데이터를 검증하고 포맷을 정리(Pretty-print)하거나 압축(Minify) 편집합니다.",
			placeholder: "여기에 JSON 데이터를 입력하거나 붙여넣으세요.",
			format: "포맷 정리",
			minify: "포매팅 제거",
		},
		"uuid-generator": {
			label: "UUID 생성기",
			description:
				"범용 고유 식별자(UUID, GUID)를 생성합니다. v4 버전을 지원합니다.",
			generate: "생성하기",
			copy: "복사",
			version: "버전",
			placeholder: "생성된 결과가 여기에 표시됩니다.",
		},
		"url-encoder": {
			label: "URL 인코더 / 디코더",
			description:
				"URL 인코딩은 URL에 포함될 수 없는 문자(예: 공백, 한글)를 % 기호를 사용한 특수 문자로 변환하는 과정입니다.",
			encode: "인코드",
			decode: "디코드",
			placeholder: "URL을 입력하세요",
		},
		"url-parser": {
			label: "URL 파서",
			description:
				"URL 구성 요소(프로토콜, 도메인, 경로, 쿼리 파라미터 등)를 분석하고 상세 정보를 추출합니다.",
			params: "파라미터",
			detail: "상세 정보",
		},
		"ascii-encoder": {
			label: "ASCII 바이너리 / 헥사",
			description:
				"텍스트와 이진 데이터를 ASCII, 이진수(Binary), 십육진수(Hex) 형식으로 상호 변환합니다.",
			hex: "헥사(Hex)",
			binary: "바이너리(Binary)",
		},
		"unicode-inspector": {
			label: "유니코드 분석기",
			description:
				"텍스트의 유니코드 코드 포인트, 인코딩 정보 및 문자 상세 명세를 조사합니다.",
			encode: "인코드",
			decode: "디코드",
		},
		"escape-html-entities": {
			label: "HTML 엔티티 변환",
			description:
				"<, >, & 등의 특수 문자를 HTML 엔티티로 변환하거나 복원하여 코드 주입을 방지하고 올바른 렌더링을 보장합니다.",
			escape: "변환(Escape)",
			unescape: "복원(Unescape)",
		},
		"color-convertor": {
			label: "컬러 변환기",
			description:
				"HEX, RGB, HSL, CMYK 등 다양한 색상 포맷 간 변환을 지원하며 컬러 피커와 직접 편집 기능을 제공합니다.",
		},
		"color-palette": {
			label: "컬러 팔레트 생성기",
			description:
				"기준 색상을 바탕으로 조화로운 컬러 팔레트(보색, 유사색 등)를 자동으로 생성합니다.",
		},
		"gradient-maker": {
			label: "그라데이션 제작기",
			description:
				"CSS 선형(Linear) 및 방사형(Radial) 그라데이션 코드를 시각적으로 디자인하고 생성합니다.",
		},
		"cubic-bezier": {
			label: "큐빅 베지어 곡선",
			description:
				"CSS 애니메이션의 타이밍 함수(easing)를 시각적으로 편집하고 미리 봅니다.",
		},
		"contrast-checker": {
			label: "대비 체크 (접근성)",
			description:
				"텍스트와 배경색 간의 대비율을 계산하여 웹 접근성(WCAG) 준수 여부를 확인합니다.",
		},
		"color-mixer": {
			label: "컬러 믹서",
			description:
				"여러 색상을 혼합하여 새로운 색상을 만들고 색조, 채도, 명도 변화를 확인합니다.",
		},
		"data-format-convertor": {
			label: "데이터 포맷 변환기",
			description:
				"JSON, YAML, XML, TOML 등 다양한 데이터 형식 간 상호 변환을 지원합니다.",
		},
		"yaml-editor": {
			label: "YAML 에디터",
			description:
				"YAML 데이터의 구조적 무결성을 검증하고 가독성 있게 포맷을 정리합니다.",
			format: "포맷 정리",
			minify: "압축(Minify)",
		},
		"html-xml-editor": {
			label: "HTML / XML 에디터",
			description:
				"HTML 및 XML 문서의 문법 오류를 검사하고 구조를 정리(Pretty-print)하여 가독성을 높입니다.",
			format: "포맷 정리",
			minify: "압축(Minify)",
		},
		"datetime-convertor": {
			label: "날짜/시간 변환기",
			description:
				"유닉스 타임스탬프, ISO 8601, 일반 텍스트 등 다양한 날짜 및 시간 형식 간 상호 변환을 지원합니다.",
		},
		"diff-checker": {
			label: "텍스트 비교 (Diff)",
			description:
				"두 텍스트 간의 차이점을 분석하여 추가, 삭제, 수정된 내용을 시각적으로 비교합니다.",
		},
		"markdown-table-builder": {
			label: "마크다운 표 생성기",
			description:
				"마크다운 문서용 표를 시각적으로 작성하고 행/열을 손쉽게 편집합니다.",
		},
		"lorem-ipsum": {
			label: "로렘 입숨 생성기",
			description:
				"디자인 시안용 임시 텍스트(더미 텍스트)를 단락이나 단어 단위로 무작위 생성합니다.",
		},
		"slug-generator": {
			label: "슬러그 생성기",
			description:
				"제목이나 텍스트를 URL에 적합한 슬러그(Slug) 형태로 변환하여 SEO에 최적화된 링크를 만듭니다.",
		},
		"qr-code-generator": {
			label: "QR 코드 생성기",
			description:
				"URL이나 텍스트를 담은 QR 코드를 생성하고 이미지로 저장합니다.",
		},
		"http-status-code": {
			label: "HTTP 상태 코드",
			description: "200, 404, 500 등 HTTP 응답 상태 코드에 대한 상세 명세와 의미를 조회합니다.",
			categories: {
				informational: "1xx - 정보 제공",
				success: "2xx - 성공",
				redirection: "3xx - 리다이렉션",
				clientError: "4xx - 클라이언트 오류",
				serverError: "5xx - 서버 오류"
			},
			codes: {
				"100": { "name": "Continue (계속)", "description": "서버가 요청 헤더를 수신했으며 클라이언트가 요청 본문을 보내야 함을 나타냅니다." },
				"101": { "name": "Switching Protocols (프로토콜 전환)", "description": "클라이언트의 요청대로 서버가 프로토콜을 전환하고 있음을 나타냅니다." },
				"102": { "name": "Processing (처리 중)", "description": "서버가 요청을 수신하여 처리 중이지만 아직 응답이 완료되지 않았음을 나타냅니다." },
				"103": { "name": "Early Hints (사전 힌트)", "description": "최종 응답 헤더를 보내기 전에 클라이언트에게 몇 가지 응답 헤더를 미리 알려주는 데 사용됩니다." },
				"200": { "name": "OK (성공)", "description": "요청이 성공적으로 수행되었습니다." },
				"201": { "name": "Created (생성됨)", "description": "요청이 성공적으로 처리되어 새로운 리소스가 생성되었습니다." },
				"202": { "name": "Accepted (접수됨)", "description": "요청이 수신되었으나 처리가 완료되지 않았습니다." },
				"203": { "name": "Non-Authoritative Information (신뢰할 수 없는 정보)", "description": "원본 서버의 데이터와 정확히 일치하지 않는 메타데이터가 반환되었습니다." },
				"204": { "name": "No Content (콘텐츠 없음)", "description": "요청을 성공적으로 처리했으나 반환할 콘텐츠가 없습니다." },
				"205": { "name": "Reset Content (콘텐츠 초기화)", "description": "요청을 성공적으로 처리했으나 콘텐츠를 반환하지 않으며, 사용자가 화면을 초기화할 것을 권장합니다." },
				"206": { "name": "Partial Content (일부 콘텐츠)", "description": "클라이언트가 보낸 범위 헤더에 따라 서버가 리소스의 일부분만 전달하고 있습니다." },
				"207": { "name": "Multi-Status (멀티 상태)", "description": "응답 본문이 XML 메시지이며 여러 개의 응답 코드를 포함하고 있음을 나타냅니다." },
				"208": { "name": "Already Reported (이미 보고됨)", "description": "DAV 바인딩의 멤버들이 이미 이전 응답에서 열거되었음을 나타냅니다." },
				"226": { "name": "IM Used (IM 사용됨)", "description": "서버가 리소스에 대한 요청을 완료했으며, 결과는 현재 인스턴스에 적용된 하나 이상의 조작 결과입니다." },
				"300": { "name": "Multiple Choices (여러 선택지)", "description": "요청에 대해 두 개 이상의 응답이 가능합니다. 사용자는 그중 하나를 선택해야 합니다." },
				"301": { "name": "Moved Permanently (영구 이동)", "description": "요청한 리소스의 URL이 영구적으로 변경되었습니다. 새로운 주소는 응답 헤더에 명시됩니다." },
				"302": { "name": "Found (임시 이동)", "description": "요청한 리소스의 주소가 임시로 변경되었습니다. 나중에 주소가 다시 바뀔 수 있습니다." },
				"303": { "name": "See Other (기타 참조)", "description": "클라이언트가 요청한 리소스를 다른 URI에서 GET 방식으로 가져오도록 유도합니다." },
				"304": { "name": "Not Modified (수정되지 않음)", "description": "캐싱 목적으로 사용됩니다. 리소스가 수정되지 않았으므로 캐시된 버전을 계속 사용해도 됨을 알립니다." },
				"307": { "name": "Temporary Redirect (임시 리다이렉트)", "description": "이전 요청과 동일한 메서드를 사용하여 리소스를 다른 URI에서 가져오도록 유도합니다." },
				"308": { "name": "Permanent Redirect (영구 리다이렉트)", "description": "리소스가 영구적으로 다른 URI에 위치함을 나타냅니다." },
				"400": { "name": "Bad Request (잘못된 요청)", "description": "클라이언트의 요청 구문이 잘못되어 서버가 처리할 수 없습니다." },
				"401": { "name": "Unauthorized (권한 없음)", "description": "인증이 필요하거나 인증에 실패했습니다." },
				"402": { "name": "Payment Required (결제 필요)", "description": "향후 사용을 위해 예약된 코드입니다. 본래 디지털 결제 시스템을 위해 고안되었습니다." },
				"403": { "name": "Forbidden (거부됨)", "description": "클라이언트가 콘텐츠에 접근할 권리나 권한이 없습니다. 서버가 요청된 리소스를 주는 것을 거부하고 있습니다." },
				"404": { "name": "Not Found (찾을 수 없음)", "description": "서버가 요청받은 리소스를 찾을 수 없습니다." },
				"405": { "name": "Method Not Allowed (허용되지 않는 메서드)", "description": "요청 메서드가 서버에 알려져 있지만 대상 리소스에서 지원하지 않습니다." },
				"406": { "name": "Not Acceptable (허용되지 않음)", "description": "요청 헤더에 정의된 조건에 맞는 응답을 생성할 수 없습니다." },
				"407": { "name": "Proxy Authentication Required (프록시 인증 필요)", "description": "프록시 서버를 통한 인증이 필요함을 나타냅니다." },
				"408": { "name": "Request Timeout (요청 시간 초과)", "description": "서버가 클라이언트의 요청을 기다리다 시간이 초과되었습니다." },
				"409": { "name": "Conflict (충돌)", "description": "요청이 서버의 현재 상태와 충돌합니다." },
				"410": { "name": "Gone (사라짐)", "description": "요청한 리소스가 더 이상 서버에 존재하지 않으며 영구적으로 삭제되었습니다." },
				"411": { "name": "Length Required (길이 필요)", "description": "Content-Length 헤더가 정의되지 않아 서버가 요청을 거부했습니다." },
				"412": { "name": "Precondition Failed (사전 조건 실패)", "description": "요청 헤더의 사전 조건이 서버와 일치하지 않습니다." },
				"413": { "name": "Payload Too Large (페이로드 너무 큼)", "description": "요청 본문이 서버가 정의한 제한보다 큽니다." },
				"414": { "name": "URI Too Long (URI 너무 긺)", "description": "클라이언트가 요청한 URI가 너무 길어서 서버가 처리하지 않습니다." },
				"415": { "name": "Unsupported Media Type (지원되지 않는 미디어 타입)", "description": "요청된 데이터의 미디어 형식을 서버가 지원하지 않습니다." },
				"416": { "name": "Range Not Satisfiable (범위 만족할 수 없음)", "description": "요청의 Range 헤더가 가용한 범위를 벗어났습니다." },
				"417": { "name": "Expectation Failed (기대 실패)", "description": "Expect 헤더에 지정된 기대 사항을 서버가 충족할 수 없습니다." },
				"418": { "name": "I'm a teapot (나는 찻주전자)", "description": "서버가 찻주전자로 커피를 끓이는 것을 거부합니다. (HTCPCP 만우절 농담)" },
				"421": { "name": "Misdirected Request (잘못된 방향의 요청)", "description": "요청이 응답을 생성할 수 없는 서버로 전달되었습니다." },
				"422": { "name": "Unprocessable Entity (처리할 수 없는 엔티티)", "description": "요청 구문은 맞지만 의미상 오류로 인해 처리할 수 없습니다." },
				"423": { "name": "Locked (잠김)", "description": "접근하려는 리소스가 잠겨 있습니다." },
				"424": { "name": "Failed Dependency (의존성 실패)", "description": "이전 요청이 실패하여 현재 요청도 실패했습니다." },
				"425": { "name": "Too Early (너무 빠름)", "description": "서버가 재전송 공격의 위험이 있는 요청을 처리하지 않으려 합니다." },
				"426": { "name": "Upgrade Required (업그레이드 필요)", "description": "서버가 현재 프로토콜을 거부하며 프로토콜 업그레이드가 필요함을 알립니다." },
				"428": { "name": "Precondition Required (사전 조건 필요)", "description": "서버가 요청에 조건부 헤더를 포함할 것을 요구합니다." },
				"429": { "name": "Too Many Requests (너무 많은 요청)", "description": "정해진 시간 동안 너무 많은 요청을 보냈습니다 (속도 제한)." },
				"431": { "name": "Request Header Fields Too Large (요청 헤더 필드 너무 큼)", "description": "요청 헤더의 크기가 너무 커서 서버가 처리하지 않습니다." },
				"451": { "name": "Unavailable For Legal Reasons (법적 이유로 불가)", "description": "정부 검열 등 법적인 이유로 제공할 수 없는 리소스를 요청했습니다." },
				"500": { "name": "Internal Server Error (서버 내부 오류)", "description": "서버 내부에서 처리할 수 없는 예외적인 상황이 발생했습니다." },
				"501": { "name": "Not Implemented (구현되지 않음)", "description": "서버가 요청 메서드를 지원하지 않거나 처리할 능력이 없습니다." },
				"502": { "name": "Bad Gateway (배드 게이트웨이)", "description": "게이트웨이나 프록시 서버가 상위 서버로부터 잘못된 응답을 받았습니다." },
				"503": { "name": "Service Unavailable (서비스 가용 불가)", "description": "서버가 일시적으로 요청을 처리할 수 없습니다 (대체로 점검 중이거나 과부하)." },
				"504": { "name": "Gateway Timeout (게이트웨이 시간 초과)", "description": "게이트웨이나 프록시 서버가 상위 서버로부터 제시간에 응답을 받지 못했습니다." },
				"505": { "name": "HTTP Version Not Supported (지원되지 않는 HTTP 버전)", "description": "요청에 사용된 HTTP 버전을 서버가 지원하지 않습니다." },
				"506": { "name": "Variant Also Negotiates (배리언트 협상 오류)", "description": "서버 내부 구성 오류로 인해 리소스 협상이 잘못되었습니다." },
				"507": { "name": "Insufficient Storage (용량 부족)", "description": "요청을 처리하는 데 필요한 저장 용량이 부족합니다." },
				"508": { "name": "Loop Detected (루프 탐지)", "description": "요청 처리 중 무한 루프가 탐지되었습니다." },
				"510": { "name": "Not Extended (확장 필요)", "description": "요청을 처리하기 위해 추가적인 확장이 필요합니다." },
				"511": { "name": "Network Authentication Required (네트워크 인증 필요)", "description": "클라이언트가 네트워크 접근 권한을 얻기 위해 인증이 필요함을 나타냅니다." }
			},
		},
		"data-unit-convertor": {
			label: "데이터 단위 변환기",
			description:
				"Byte, KB, MB, GB, TB 등 디지털 데이터 용량 단위 간 상호 변환을 지원합니다.",
			binary: "2진수 기준",
			decimal: "10진수 기준",
		},
		"unix-path-convertor": {
			label: "경로 변환기 (UNIX/Win)",
			description:
				"슬래시(/)와 백슬래시(\\) 등 UNIX와 Windows 간의 파일 경로 형식을 상호 변환합니다.",
		},
		"number-base-convertor": {
			label: "진법 변환기",
			description:
				"10진수, 2진수, 8진수, 16진수 간의 숫자를 자유롭게 변환합니다.",
		},
		"token-generator": {
			label: "토큰 생성기",
			description:
				"API 키, 세션 식별자 등에 사용할 수 있는 무작위 보안 토큰을 생성합니다.",
		},
		"password-generator": {
			label: "비밀번호 생성기",
			description:
				"길이와 문자 조합을 설정하여 강력한 보안 비밀번호를 생성합니다.",
		},
		"jwt-inspector": {
			label: "JWT 분석기",
			description:
				"JSON Web Token의 헤더와 페이로드를 디코딩하여 내부 데이터를 확인합니다.",
		},
		"aes-encryption": {
			label: "AES 암호화 / 복호화",
			description:
				"대칭키 알고리즘(AES)을 사용하여 데이터를 안전하게 암호화하거나 복호화합니다.",
			encrypt: "암호화",
			decrypt: "복호화",
		},
		"sha-hashing": {
			label: "SHA 해시 생성기",
			description:
				"SHA-256, SHA-512 등을 사용하여 데이터의 무결성을 확인하기 위한 보안 해시를 생성합니다.",
		},
		"rsa-key-generator": {
			label: "RSA 키 생성기",
			description:
				"비대칭 암호화 및 전자서명에 필요한 RSA 공개키와 개인키 쌍을 생성합니다.",
		},
		"rsa-encryption": {
			label: "RSA 암호화 / 복호화",
			description:
				"RSA 비대칭 암호화를 사용하여 공개키로 암호화하고 개인키로 복호화합니다.",
			encrypt: "암호화",
			decrypt: "복호화",
		},
		"signature-verifier": {
			label: "전자서명 서명 / 검증",
			description:
				"데이터의 진위 여부를 확인하기 위해 전자서명을 생성하거나 검증합니다.",
			sign: "서명하기",
			verify: "검증하기",
		},
	},
};
