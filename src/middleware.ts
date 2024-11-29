import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export const config = {};

export function middleware(req: NextRequest) {
  if (!isEnableBasicAuth()) {
    return NextResponse.next();
  }

  const { BASIC_AUTH_PASSWORD, BASIC_AUTH_USERNAME } = process.env;

  const basicAuth = req.headers.get('authorization');

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === BASIC_AUTH_USERNAME && pwd === BASIC_AUTH_PASSWORD) {
      return NextResponse.next();
    }
  }

  return Response.json(
    { error: 'Unauthorized' },
    {
      status: 401,
      headers: { 'WWW-Authenticate': 'Basic realm="Secure Area"' },
    },
  );
}

function isEnableBasicAuth() {
  return process.env.BASIC_AUTH_ENABLED === 'true';
}
