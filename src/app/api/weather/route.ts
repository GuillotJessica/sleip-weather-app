import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const openweathermap = `https://api.openweathermap.org/data/3.0/onecall?${request.nextUrl.searchParams}&units={metric}&exclude={minutely,hourly,alerts}&appid=${process.env.WEATHER_APP_ID}`;
  try {
    const response = await fetch(openweathermap);
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.log("ERROR", err);
  }
}
