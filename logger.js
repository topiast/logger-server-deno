import { serve } from 'https://deno.land/std@0.171.0/http/server.ts'

const handleRequest = async (request) => {
  const { method, url, headers } = request;
  const body = new Uint8Array(await Deno.readAll(request.body));

  console.log('=== New Request ===');
  console.log(`Method: ${method}`);
  console.log(`URL: ${url}`);
  console.log('Headers:', headers);
  console.log('Body:', new TextDecoder().decode(body));

  request.respond({ body: 'Request logged successfully\n' });
}

serve(handleRequest, { port: 3000 })