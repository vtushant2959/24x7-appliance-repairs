import { NextResponse } from "next/server";
import { submitLead } from "@/app/actions";
export async function POST(request: Request) {
  const body = await request.json();
  const result = await submitLead(body);
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}
;
