// HTTP status codes are grouped into categories based on the first digit, which represents the general nature of the response. Here's what the different categories mean:

// ------------------------------------------------------------------------------------------------------

// 1xx – Informational Responses
// Meaning: The request was received, and the server is continuing to process it.
// Common Codes:
// 100 Continue: Indicates that the initial part of the request has been received, and the client should continue sending the rest of the request.
// 101 Switching Protocols: Informs the client that the server is switching to a different protocol as requested.

// ------------------------------------------------------------------------------------------------------

// 2xx – Success
// Meaning: The request was successfully received, understood, and processed.
// Common Codes:
// 200 OK: The request was successful, and the response contains the expected data.
// 201 Created: A new resource was successfully created.
// 204 No Content: The server successfully processed the request but is not returning any content.

// ------------------------------------------------------------------------------------------------------

// 3xx – Redirection
// Meaning: The client must take additional action to complete the request, often involving a new location.
// Common Codes:
// 301 Moved Permanently: The resource has been permanently moved to a new URL.
// 302 Found: The resource is temporarily located at a different URL.
// 304 Not Modified: The cached version of the requested resource is still valid, so no new data is sent.
// ------------------------------------------------------------------------------------------------------

// 4xx – Client Errors
// Meaning: There was an issue with the request, often caused by the client.
// Common Codes:
// 400 Bad Request: The server couldn't understand the request due to invalid syntax.
// 401 Unauthorized: Authentication is required, but it is either missing or invalid.
// 403 Forbidden: The client does not have permission to access the resource.
// 404 Not Found: The requested resource could not be found on the server.

// ------------------------------------------------------------------------------------------------------

// 5xx – Server Errors
// Meaning: The server failed to fulfill a valid request due to an error on its side.
// Common Codes:
// 500 Internal Server Error: The server encountered an unexpected error.
// 502 Bad Gateway: The server received an invalid response from an upstream server.
// 503 Service Unavailable: The server is temporarily unavailable, often due to maintenance or overload.
// 504 Gateway Timeout: The server didn’t receive a timely response from an upstream server.

// ----------------------------------------------------------------------------------------------------------

// 5. Handling Requests and Responses
// Topics Covered:
// Understanding Request and Response Objects
// Request (req): Data sent from the client
// Response (res): Data sent back to the client
// Parsing Incoming Requests
// Use body-parser for parsing JSON and URL-encoded data

// Sending Responses
// Send JSON:
// res.json({ message: 'Success' });
// Send files:
// res.sendFile('/path/to/file');
