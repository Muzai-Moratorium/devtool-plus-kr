export const en = {
	webview: {
		searchPlaceholder: "E.g. UUID Generator",
		emptyStateMessage: "Select a tool from the Tools Explorer",
		recentTools: "Recent Tools",
		about: "About DevTool+",
		pinned: "Pinned",
	},
	categories: {
		"Encode / Decode": "Encode / Decode",
		"UI Design": "Design",
		"Data": "Data Formatting",
		"Text": "Text Utilities",
		"Utility": "Developer Utilities",
		"Cryptography": "Cryptography",
		"Productivity": "Productivity",
	},
	tools: {
		"base64-encoder": {
			label: "Base64 Encoder / Decoder",
			description:
				"Base64 is an encoding scheme that converts binary data into a text format using 64 characters (A-Z, a-z, 0-9, +, /) for safe data transmission across systems that handle text only.",
			encode: "Encode",
			decode: "Decode",
			downloadFile: "Download File",
			downloadPrefix: "Download",
		},
		"json-editor": {
			label: "JSON Editor",
			description:
				"Validate and format (pretty-print) or minify your JSON data.",
			placeholder: "Paste or type your JSON here.",
			format: "Format",
			minify: "Minify",
		},
		"uuid-generator": {
			label: "UUID Generator",
			description:
				"Generate Universal Unique Identifiers (UUID/GUID). Supports v4.",
			generate: "Generate",
			copy: "Copy",
			version: "Version",
			placeholder: "Output will appear here",
		},
		"url-encoder": {
			label: "URL Encoder / Decoder",
			description:
				"URL encoding converts special characters into a transmitted format over the Internet, replacing unsafe characters with a '%' followed by two hexadecimal digits.",
			encode: "Encode",
			decode: "Decode",
			placeholder: "Enter URL",
		},
		"url-parser": {
			label: "URL Parser",
			description:
				"Analyze URL components like protocol, domain, path, and query parameters to extract detailed information.",
			params: "Params",
			detail: "Detail",
		},
		"ascii-encoder": {
			label: "ASCII Binary / Hex",
			description:
				"Convert text and binary data between ASCII, Binary, and Hexadecimal formats.",
			hex: "Hex",
			binary: "Binary",
		},
		"unicode-inspector": {
			label: "Unicode Inspector",
			description:
				"Investigate Unicode code points, encoding information, and character specifications for any text.",
			encode: "Encode",
			decode: "Decode",
		},
		"escape-html-entities": {
			label: "Escape HTML Entities",
			description:
				"Convert special characters like <, >, and & into HTML entities to prevent code injection and ensure proper rendering.",
			escape: "Escape",
			unescape: "Unescape",
		},
		"color-convertor": {
			label: "Color Convertor",
			description:
				"Convert colors between formats like HEX, RGB, HSL, and CMYK. Supports color picking and direct editing.",
		},
		"color-palette": {
			label: "Color Palette Generator",
			description:
				"Generate harmonious color schemes (complementary, analogous, etc.) based on a base seed color.",
		},
		"gradient-maker": {
			label: "Gradient Maker",
			description:
				"Visually design and generate CSS linear and radial gradients with multiple color stops.",
		},
		"cubic-bezier": {
			label: "Cubic Bezier",
			description:
				"Create and visualize CSS cubic-bezier timing functions for animations and transitions.",
		},
		"contrast-checker": {
			label: "Contrast Checker",
			description:
				"Calculate contrast ratios between text and background to ensure Web Content Accessibility Guidelines (WCAG) compliance.",
		},
		"color-mixer": {
			label: "Color Mixer",
			description:
				"Blend multiple colors together and observe changes in hue, saturation, and lightness.",
		},
		"data-format-convertor": {
			label: "Data Format Convertor",
			description:
				"Seamlessly convert between structured data formats including JSON, YAML, XML, and TOML.",
		},
		"yaml-editor": {
			label: "YAML Editor",
			description:
				"Validate and format YAML data to ensure structural integrity and readability.",
			format: "Format",
			minify: "Minify",
		},
		"html-xml-editor": {
			label: "HTML / XML Editor",
			description:
				"Validate and pretty-print HTML and XML documents to identify syntax errors and improve formatting.",
			format: "Format",
			minify: "Minify",
		},
		"datetime-convertor": {
			label: "Datetime Convertor",
			description:
				"Convert between various date and time formats including Unix timestamps, ISO 8601, and human-readable strings.",
		},
		"diff-checker": {
			label: "Difference Checker",
			description:
				"Analyze differences between two text blocks, highlighting additions, deletions, and modifications visually.",
		},
		"markdown-table-builder": {
			label: "Markdown Table Builder",
			description:
				"Visually build and edit Markdown tables, managing rows and columns with an intuitive interface.",
		},
		"lorem-ipsum": {
			label: "Lorem Ipsum",
			description:
				"Generate placeholder text (dummy text) for design mockups by paragraph or word count.",
		},
		"slug-generator": {
			label: "Slug Generator",
			description:
				"Convert titles or text into URL-friendly slugs optimized for SEO and readability.",
		},
		"qr-code-generator": {
			label: "QR Code Generator",
			description:
				"Generate QR codes for URLs or text data and save them as images for sharing or printing.",
		},
		"http-status-code": {
			label: "HTTP Status Code",
			description:
				"Look up meanings and detailed specifications for HTTP response status codes like 200, 404, or 500.",
			categories: {
				informational: "1xx - Informational",
				success: "2xx - Success",
				redirection: "3xx - Redirection",
				clientError: "4xx - Client Error",
				serverError: "5xx - Server Error",
			},
			codes: {
				"100": { "name": "Continue", "description": "The server has received the request headers and the client should proceed to send the request body." },
				"101": { "name": "Switching Protocols", "description": "The requester has asked the server to switch protocols and the server has agreed to do so." },
				"102": { "name": "Processing", "description": "The server has received and is processing the request, but no response is available yet." },
				"103": { "name": "Early Hints", "description": "Used to return some response headers before final HTTP message." },
				"200": { "name": "OK", "description": "The request has succeeded." },
				"201": { "name": "Created", "description": "The request has been fulfilled and a new resource has been created." },
				"202": { "name": "Accepted", "description": "The request has been accepted for processing, but the processing has not been completed." },
				"203": { "name": "Non-Authoritative Information", "description": "The returned metadata is not exactly the same as is available from the origin server." },
				"204": { "name": "No Content", "description": "The server successfully processed the request, but is not returning any content." },
				"205": { "name": "Reset Content", "description": "The server successfully processed the request, but is not returning any content. The requester should reset the document view." },
				"206": { "name": "Partial Content", "description": "The server is delivering only part of the resource due to a range header sent by the client." },
				"207": { "name": "Multi-Status", "description": "The message body that follows is an XML message and can contain a number of separate response codes." },
				"208": { "name": "Already Reported", "description": "The members of a DAV binding have already been enumerated in a previous reply to this request." },
				"226": { "name": "IM Used", "description": "The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance." },
				"300": { "name": "Multiple Choices", "description": "The request has more than one possible response. The user agent should choose one of them." },
				"301": { "name": "Moved Permanently", "description": "The URL of the requested resource has been changed permanently. The new URL is given in the response." },
				"302": { "name": "Found", "description": "The URI of requested resource has been changed temporarily. New changes in the URI might be made in the future." },
				"303": { "name": "See Other", "description": "The server sent this response to direct the client to get the requested resource at another URI with a GET request." },
				"304": { "name": "Not Modified", "description": "This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response." },
				"307": { "name": "Temporary Redirect", "description": "The server sends this response to direct the client to get the requested resource at another URI with the same method that was used in the prior request." },
				"308": { "name": "Permanent Redirect", "description": "This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header." },
				"400": { "name": "Bad Request", "description": "The server cannot or will not process the request due to an apparent client error." },
				"401": { "name": "Unauthorized", "description": "Authentication is required and has failed or has not yet been provided." },
				"402": { "name": "Payment Required", "description": "Reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micropayment scheme." },
				"403": { "name": "Forbidden", "description": "The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource." },
				"404": { "name": "Not Found", "description": "The server can not find the requested resource." },
				"405": { "name": "Method Not Allowed", "description": "The request method is known by the server but is not supported by the target resource." },
				"406": { "name": "Not Acceptable", "description": "The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers." },
				"407": { "name": "Proxy Authentication Required", "description": "Similar to 401 Unauthorized, but it indicates that the client must first authenticate itself with the proxy." },
				"408": { "name": "Request Timeout", "description": "The server timed out waiting for the request." },
				"409": { "name": "Conflict", "description": "This response is sent when a request conflicts with the current state of the server." },
				"410": { "name": "Gone", "description": "This response is sent when the requested content has been permanently deleted from server, with no forwarding address." },
				"411": { "name": "Length Required", "description": "Server rejected the request because the Content-Length header field is not defined and the server requires it." },
				"412": { "name": "Precondition Failed", "description": "The client has indicated preconditions in its headers which the server does not meet." },
				"413": { "name": "Payload Too Large", "description": "Request entity is larger than limits defined by server." },
				"414": { "name": "URI Too Long", "description": "The URI requested by the client is longer than the server is willing to interpret." },
				"415": { "name": "Unsupported Media Type", "description": "The media format of the requested data is not supported by the server." },
				"416": { "name": "Range Not Satisfiable", "description": "The range specified by the Range header field in the request cannot be fulfilled." },
				"417": { "name": "Expectation Failed", "description": "This response code means the expectation indicated by the Expect request header field cannot be met by the server." },
				"418": { "name": "I'm a teapot", "description": "The server refuses the attempt to brew coffee with a teapot." },
				"421": { "name": "Misdirected Request", "description": "The request was directed at a server that is not able to produce a response." },
				"422": { "name": "Unprocessable Entity", "description": "The request was well-formed but was unable to be followed due to semantic errors." },
				"423": { "name": "Locked", "description": "The resource that is being accessed is locked." },
				"424": { "name": "Failed Dependency", "description": "The request failed due to failure of a previous request." },
				"425": { "name": "Too Early", "description": "Indicates that the server is unwilling to risk processing a request that might be replayed." },
				"426": { "name": "Upgrade Required", "description": "The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol." },
				"428": { "name": "Precondition Required", "description": "The origin server requires the request to be conditional." },
				"429": { "name": "Too Many Requests", "description": "The user has sent too many requests in a given amount of time (\"rate limiting\")." },
				"431": { "name": "Request Header Fields Too Large", "description": "The server is unwilling to process the request because its header fields are too large." },
				"451": { "name": "Unavailable For Legal Reasons", "description": "The user agent requested a resource that cannot legally be provided, such as a web page censored by a government." },
				"500": { "name": "Internal Server Error", "description": "The server has encountered a situation it does not know how to handle." },
				"501": { "name": "Not Implemented", "description": "The request method is not supported by the server and cannot be handled." },
				"502": { "name": "Bad Gateway", "description": "This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response." },
				"503": { "name": "Service Unavailable", "description": "The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded." },
				"504": { "name": "Gateway Timeout", "description": "This error response is given when the server is acting as a gateway and cannot get a response in time." },
				"505": { "name": "HTTP Version Not Supported", "description": "The HTTP version used in the request is not supported by the server." },
				"506": { "name": "Variant Also Negotiates", "description": "The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process." },
				"507": { "name": "Insufficient Storage", "description": "The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request." },
				"508": { "name": "Loop Detected", "description": "The server detected an infinite loop while processing the request." },
				"510": { "name": "Not Extended", "description": "Further extensions to the request are required for the server to fulfill it." },
				"511": { "name": "Network Authentication Required", "description": "Indicates that the client needs to authenticate to gain network access." }
			},
		},
		"data-unit-convertor": {
			label: "Data Unit Convertor",
			description:
				"Convert between digital storage units including Bytes, KB, MB, GB, TB, and more.",
			binary: "Binary",
			decimal: "Decimal",
		},
		"unix-path-convertor": {
			label: "UNIX / Windows Path Convertor",
			description:
				"Convert file paths between UNIX (forward slash) and Windows (backslash) formats.",
		},
		"number-base-convertor": {
			label: "Number Base Convertor",
			description:
				"Freely convert numbers between decimal, binary, octal, and hexadecimal bases.",
		},
		"token-generator": {
			label: "Token Generator",
			description:
				"Generate secure, random tokens for API keys, session identifiers, or other authentication needs.",
		},
		"password-generator": {
			label: "Password Generator",
			description:
				"Create strong, cryptographically secure passwords with customizable length and character sets.",
		},
		"jwt-inspector": {
			label: "JWT Inspector",
			description:
				"Decode and inspect the header and payload of JSON Web Tokens to verify claims and data.",
		},
		"aes-encryption": {
			label: "AES Encryption / Decryption",
			description:
				"Securely encrypt and decrypt data using the Advanced Encryption Standard (AES) symmetric-key algorithm.",
			encrypt: "Encrypt",
			decrypt: "Decrypt",
		},
		"sha-hashing": {
			label: "SHA Hashing",
			description:
				"Generate secure digital fingerprints for data integrity using SHA-256, SHA-512, and other hashing algorithms.",
		},
		"rsa-key-generator": {
			label: "RSA Key Generator",
			description:
				"Generate RSA public and private key pairs for asymmetric encryption and digital signatures.",
		},
		"rsa-encryption": {
			label: "RSA Encryption / Decryption",
			description:
				"Encrypt data with public keys and decrypt with private keys using RSA asymmetric cryptography.",
			encrypt: "Encrypt",
			decrypt: "Decrypt",
		},
		"signature-verifier": {
			label: "Signature Signer / Verifier",
			description:
				"Generate and verify digital signatures to ensure message authenticity and non-repudiation.",
			sign: "Sign",
			verify: "Verify",
		},
	},
};

export type TranslationMap = typeof en;
export type TranslationKey = keyof TranslationMap;
