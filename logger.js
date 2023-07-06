import { serve } from 'https://deno.land/std/http/server.ts';

const server = serve({ port: 3000 });

console.log('Logger app is running on port 3000');

for await (const request of server) {
  const { method, url, headers } = request;
  const body = new Uint8Array(await Deno.readAll(request.body));

  console.log('=== New Request ===');
  console.log(`Method: ${method}`);
  console.log(`URL: ${url}`);
  console.log('Headers:', headers);
  console.log('Body:', new TextDecoder().decode(body));

  request.respond({ body: 'Request logged successfully\n' });
}
