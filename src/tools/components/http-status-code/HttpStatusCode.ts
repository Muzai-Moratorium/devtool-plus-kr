import { html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { BaseTool } from '../../base/BaseTool';
import { t } from '../../../utils/i18n-web';

interface StatusCode {
    code: string;
    name: string;
    description: string;
}

interface StatusCodeCategory {
    id: string;
    title: string;
    codes: StatusCode[];
    color: string;
}

@customElement('http-status-code')
export class HttpStatusCode extends BaseTool {
    @state() private expandedItems: Set<string> = new Set();

    private statusCategories: StatusCodeCategory[] = [
        {
            id: "informational",
            title: "1xx - 정보 제공",
            color: "var(--vscode-charts-blue)",
            codes: [
                { code: '100', name: 'Continue (계속)', description: '서버가 요청 헤더를 수신했으며 클라이언트가 요청 본문을 보내야 함을 나타냅니다.' },
                { code: '101', name: 'Switching Protocols (프로토콜 전환)', description: '클라이언트의 요청대로 서버가 프로토콜을 전환하고 있음을 나타냅니다.' },
                { code: '102', name: 'Processing (처리 중)', description: '서버가 요청을 수신하여 처리 중이지만 아직 응답이 완료되지 않았음을 나타냅니다.' },
                { code: '103', name: 'Early Hints (사전 힌트)', description: '최종 응답 헤더를 보내기 전에 클라이언트에게 몇 가지 응답 헤더를 미리 알려주는 데 사용됩니다.' },
            ]
        },
        {
            id: "success",
            title: "2xx - 성공",
            color: "var(--vscode-charts-green)",
            codes: [
                { code: '200', name: 'OK (성공)', description: '요청이 성공적으로 수행되었습니다.' },
                { code: '201', name: 'Created (생성됨)', description: '요청이 성공적으로 처리되어 새로운 리소스가 생성되었습니다.' },
                { code: '202', name: 'Accepted (접수됨)', description: '요청이 수신되었으나 처리가 완료되지 않았습니다.' },
                { code: '203', name: 'Non-Authoritative Information (신뢰할 수 없는 정보)', description: '원본 서버의 데이터와 정확히 일치하지 않는 메타데이터가 반환되었습니다.' },
                { code: '204', name: 'No Content (콘텐츠 없음)', description: '요청을 성공적으로 처리했으나 반환할 콘텐츠가 없습니다.' },
                { code: '205', name: 'Reset Content (콘텐츠 초기화)', description: '요청을 성공적으로 처리했으나 콘텐츠를 반환하지 않으며, 사용자가 화면을 초기화할 것을 권장합니다.' },
                { code: '206', name: 'Partial Content (일부 콘텐츠)', description: '클라이언트가 보낸 범위 헤더에 따라 서버가 리소스의 일부분만 전달하고 있습니다.' },
                { code: '207', name: 'Multi-Status (멀티 상태)', description: '응답 본문이 XML 메시지이며 여러 개의 응답 코드를 포함하고 있음을 나타냅니다.' },
                { code: '208', name: 'Already Reported (이미 보고됨)', description: 'DAV 바인딩의 멤버들이 이미 이전 응답에서 열거되었음을 나타냅니다.' },
                { code: '226', name: 'IM Used (IM 사용됨)', description: '서버가 리소스에 대한 요청을 완료했으며, 결과는 현재 인스턴스에 적용된 하나 이상의 조작 결과입니다.' },
            ]
        },
        {
            id: "redirection",
            title: "3xx - 리다이렉션",
            color: "var(--vscode-charts-yellow)",
            codes: [
                { code: '300', name: 'Multiple Choices (여러 선택지)', description: '요청에 대해 두 개 이상의 응답이 가능합니다. 사용자는 그중 하나를 선택해야 합니다.' },
                { code: '301', name: 'Moved Permanently (영구 이동)', description: '요청한 리소스의 URL이 영구적으로 변경되었습니다. 새로운 주소는 응답 헤더에 명시됩니다.' },
                { code: '302', name: 'Found (임시 이동)', description: '요청한 리소스의 주소가 임시로 변경되었습니다. 나중에 주소가 다시 바뀔 수 있습니다.' },
                { code: '303', name: 'See Other (기타 참조)', description: '클라이언트가 요청한 리소스를 다른 URI에서 GET 방식으로 가져오도록 유도합니다.' },
                { code: '304', name: 'Not Modified (수정되지 않음)', description: '캐싱 목적으로 사용됩니다. 리소스가 수정되지 않았으므로 캐시된 버전을 계속 사용해도 됨을 알립니다.' },
                { code: '307', name: 'Temporary Redirect (임시 리다이렉트)', description: '이전 요청과 동일한 메서드를 사용하여 리소스를 다른 URI에서 가져오도록 유도합니다.' },
                { code: '308', name: 'Permanent Redirect (영구 리다이렉트)', description: '리소스가 영구적으로 다른 URI에 위치함을 나타냅니다.' },
            ]
        },
        {
            id: "clientError",
            title: "4xx - 클라이언트 오류",
            color: "var(--vscode-charts-orange)",
            codes: [
                { code: '400', name: 'Bad Request (잘못된 요청)', description: '클라이언트의 요청 구문이 잘못되어 서버가 처리할 수 없습니다.' },
                { code: '401', name: 'Unauthorized (권한 없음)', description: '인증이 필요하거나 인증에 실패했습니다.' },
                { code: '402', name: 'Payment Required (결제 필요)', description: '향후 사용을 위해 예약된 코드입니다. 본래 디지털 결제 시스템을 위해 고안되었습니다.' },
                { code: '403', name: 'Forbidden (거부됨)', description: '클라이언트가 콘텐츠에 접근할 권리나 권한이 없습니다. 서버가 요청된 리소스를 주는 것을 거부하고 있습니다.' },
                { code: '404', name: 'Not Found (찾을 수 없음)', description: '서버가 요청받은 리소스를 찾을 수 없습니다.' },
                { code: '405', name: 'Method Not Allowed (허용되지 않는 메서드)', description: '요청 메서드가 서버에 알려져 있지만 대상 리소스에서 지원하지 않습니다.' },
                { code: '406', name: 'Not Acceptable (허용되지 않음)', description: '요청 헤더에 정의된 조건에 맞는 응답을 생성할 수 없습니다.' },
                { code: '407', name: 'Proxy Authentication Required (프록시 인증 필요)', description: '프록시 서버를 통한 인증이 필요함을 나타냅니다.' },
                { code: '408', name: 'Request Timeout (요청 시간 초과)', description: '서버가 클라이언트의 요청을 기다리다 시간이 초과되었습니다.' },
                { code: '409', name: 'Conflict (충돌)', description: '요청이 서버의 현재 상태와 충돌합니다.' },
                { code: '410', name: 'Gone (사라짐)', description: '요청한 리소스가 더 이상 서버에 존재하지 않으며 영구적으로 삭제되었습니다.' },
                { code: '411', name: 'Length Required (길이 필요)', description: 'Content-Length 헤더가 정의되지 않아 서버가 요청을 거부했습니다.' },
                { code: '412', name: 'Precondition Failed (사전 조건 실패)', description: '요청 헤더의 사전 조건이 서버와 일치하지 않습니다.' },
                { code: '413', name: 'Payload Too Large (페이로드 너무 큼)', description: '요청 본문이 서버가 정의한 제한보다 큽니다.' },
                { code: '414', name: 'URI Too Long (URI 너무 긺)', description: '클라이언트가 요청한 URI가 너무 길어서 서버가 처리하지 않습니다.' },
                { code: '415', name: 'Unsupported Media Type (지원되지 않는 미디어 타입)', description: '요청된 데이터의 미디어 형식을 서버가 지원하지 않습니다.' },
                { code: '416', name: 'Range Not Satisfiable (범위 만족할 수 없음)', description: '요청의 Range 헤더가 가용한 범위를 벗어났습니다.' },
                { code: '417', name: 'Expectation Failed (기대 실패)', description: 'Expect 헤더에 지정된 기대 사항을 서버가 충족할 수 없습니다.' },
                { code: '418', name: 'I\'m a teapot (나는 찻주전자)', description: '서버가 찻주전자로 커피를 끓이는 것을 거부합니다. (HTCPCP 만우절 농담)' },
                { code: '421', name: 'Misdirected Request (잘못된 방향의 요청)', description: '요청이 응답을 생성할 수 없는 서버로 전달되었습니다.' },
                { code: '422', name: 'Unprocessable Entity (처리할 수 없는 엔티티)', description: '요청 구문은 맞지만 의미상 오류로 인해 처리할 수 없습니다.' },
                { code: '423', name: 'Locked (잠김)', description: '접근하려는 리소스가 잠겨 있습니다.' },
                { code: '424', name: 'Failed Dependency (의존성 실패)', description: '이전 요청이 실패하여 현재 요청도 실패했습니다.' },
                { code: '425', name: 'Too Early (너무 빠름)', description: '서버가 재전송 공격의 위험이 있는 요청을 처리하지 않으려 합니다.' },
                { code: '426', name: 'Upgrade Required (업그레이드 필요)', description: '서버가 현재 프로토콜을 거부하며 프로토콜 업그레이드가 필요함을 알립니다.' },
                { code: '428', name: 'Precondition Required (사전 조건 필요)', description: '서버가 요청에 조건부 헤더를 포함할 것을 요구합니다.' },
                { code: '429', name: 'Too Many Requests (너무 많은 요청)', description: '정해진 시간 동안 너무 많은 요청을 보냈습니다 (속도 제한).' },
                { code: '431', name: 'Request Header Fields Too Large (요청 헤더 필드 너무 큼)', description: '요청 헤더의 크기가 너무 커서 서버가 처리하지 않습니다.' },
                { code: '451', name: 'Unavailable For Legal Reasons (법적 이유로 불가)', description: '정부 검열 등 법적인 이유로 제공할 수 없는 리소스를 요청했습니다.' },
            ]
        },
        {
            id: "serverError",
            title: "5xx - 서버 오류",
            color: "var(--vscode-charts-red)",
            codes: [
                { code: '500', name: 'Internal Server Error (서버 내부 오류)', description: '서버 내부에서 처리할 수 없는 예외적인 상황이 발생했습니다.' },
                { code: '501', name: 'Not Implemented (구현되지 않음)', description: '서버가 요청 메서드를 지원하지 않거나 처리할 능력이 없습니다.' },
                { code: '502', name: 'Bad Gateway (배드 게이트웨이)', description: '게이트웨이나 프록시 서버가 상위 서버로부터 잘못된 응답을 받았습니다.' },
                { code: '503', name: 'Service Unavailable (서비스 가용 불가)', description: '서버가 일시적으로 요청을 처리할 수 없습니다 (대체로 점검 중이거나 과부하).' },
                { code: '504', name: 'Gateway Timeout (게이트웨이 시간 초과)', description: '게이트웨이나 프록시 서버가 상위 서버로부터 제시간에 응답을 받지 못했습니다.' },
                { code: '505', name: 'HTTP Version Not Supported (지원되지 않는 HTTP 버전)', description: '요청에 사용된 HTTP 버전을 서버가 지원하지 않습니다.' },
                { code: '506', name: 'Variant Also Negotiates (배리언트 협상 오류)', description: '서버 내부 구성 오류로 인해 리소스 협상이 잘못되었습니다.' },
                { code: '507', name: 'Insufficient Storage (용량 부족)', description: '요청을 처리하는 데 필요한 저장 용량이 부족합니다.' },
                { code: '508', name: 'Loop Detected (루프 탐지)', description: '요청 처리 중 무한 루프가 탐지되었습니다.' },
                { code: '510', name: 'Not Extended (확장 필요)', description: '요청을 처리하기 위해 추가적인 확장이 필요합니다.' },
                { code: '511', name: 'Network Authentication Required (네트워크 인증 필요)', description: '클라이언트가 네트워크 접근 권한을 얻기 위해 인증이 필요함을 나타냅니다.' },
            ]
        }
    ];

    private styles = css`
        ${BaseTool.styles}

        .http-category {
            margin-bottom: 16px;
        }

        .category-title {
            margin-bottom: 8px;
            opacity: 0.8;
        }

        .http-item {
            display: flex;
            align-items: flex-start;
            min-height: 32px;
            margin-bottom: 8px;
            position: relative;
            background-color: var(--vscode-panel-background);
            box-shadow: inset 0 0 0 1px var(--vscode-panel-border);
            border-radius: 2px;
            overflow: hidden;
        }

        .http-separator {
            width: 1px;
            height: 20px;
            margin-top: 6px;
            background-color: var(--vscode-panel-border);
        }

        .http-content {
            flex: 1;
        }

        .http-value {
            flex: 1;
            padding: 6px 10px;
            word-break: break-all;
        }

        .http-description {
            padding: 0 10px 6px 10px;
            opacity: 0.75;
        }

        .http-description-hidden {
            display: none;
        }

        .http-label {
            width: 50px;
            padding: 6px 10px;
            text-align: right;
        }

        .expand-collapse-button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 8px;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--vscode-foreground);
            opacity: 0.8;
            transition: transform 0.2s;
        }

        .expand-collapse-button:hover {
            opacity: 1;
        }

        .expand-collapse-button-active {
            transform: rotate(180deg);
        }
    `;

    toggleExpand(code: string) {
        const newExpandedItems = new Set(this.expandedItems);
        if (newExpandedItems.has(code)) {
            newExpandedItems.delete(code);
        } else {
            newExpandedItems.add(code);
        }
        this.expandedItems = newExpandedItems;
    }

    protected renderTool() {
        return html`
            <style>${this.styles}</style>
            <div class="tool-inner-container">
                <p class="opacity-75">${t('http-status-code', 'tools').description}</p>
                <hr />
                
                ${this.statusCategories.map(category => this.renderCategory(category))}
            </div>
        `;
    }

    private renderCategory(category: StatusCodeCategory) {
        const translatedTitle = t('http-status-code', 'tools').categories?.[category.id] || category.title;
        return html`
            <div class="http-category">
                <h3 class="category-title">${translatedTitle}</h3>
                ${category.codes.map(item => this.renderDetailItem(item, category.color))}
            </div>
        `;
    }

    private renderDetailItem(item: StatusCode, color: string) {
        const isExpanded = this.expandedItems.has(item.code);
        const translated = t('http-status-code', 'tools').codes?.[item.code];
        const name = translated?.name || item.name;
        const description = translated?.description || item.description;

        return html`
            <div class="http-item">
                <div class="http-label" style="color: ${color}">${item.code}</div>
                <div class="http-separator"></div>
                <div class="http-content">
                    <div class="http-value">${name}</div>
                    <div class="http-description ${isExpanded ? '' : 'http-description-hidden'}">${description}</div>
                </div>
                <button class="expand-collapse-button ${isExpanded ? 'expand-collapse-button-active' : ''}" @click=${() => this.toggleExpand(item.code)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </button>
            </div>
        `;
    }
}