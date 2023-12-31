import { serve } from 'https://deno.land/std@0.171.0/http/server.ts'

const handleRequest = async (request) => {
  const { method, url, headers, body } = request;



  console.log('=== New Request ===');
  console.log(`Method: ${method}`);
  console.log(`URL: ${url}`);
  console.log('Headers:', headers);
  console.log('Body:', await request.text());

  return new Response('Request logged successfully\n');
}

serve(handleRequest, { port: 3000 })