# Timestamp Microservice

This microservice converts dates to Unix timestamps and UTC strings.

## API Endpoints

- `GET /api/:date?` - Convert a date
  - If no date is provided, returns current time
  - Accepts:
    - Date strings (e.g., "2015-12-25")
    - Unix timestamps (e.g., 1451001600000)
  - Returns JSON with:
    - `unix`: Unix timestamp in milliseconds
    - `utc`: UTC date string (e.g., "Thu, 01 Jan 1970 00:00:00 GMT")

## Examples

1. Valid date string:
Returns:
```json
{
  "unix": 1451001600000,
  "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
}
{
  "error": "Invalid Date"
}