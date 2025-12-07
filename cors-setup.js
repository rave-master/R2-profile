

// Run this in browser console on Cloudflare Dashboard
// First, get a fresh API token from Profile → API Tokens

const accountId = '86684c814a2fe7dd897881493ef8cc18';
const apiToken = '4YsngZbNDfOESIYgUoQrk1uwkPK-2uB4kaaR61uC'; // Get fresh one from dashboard

// Use curl command instead (run in terminal):
const curlCommand = `curl -X PUT "https://api.cloudflare.com/client/v4/accounts/${accountId}/r2/buckets/user-profiles/cors" \
     -H "Authorization: Bearer ${apiToken}" \
     -H "Content-Type: application/json" \
     -d '{
          "allowedOrigins": ["*"],
          "allowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
          "allowedHeaders": ["*"],
          "maxAgeSeconds": 3000
     }'`;

console.log('Run this command in terminal:');
console.log(curlCommand);