import { CityType } from "@/app/types";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${request.nextUrl.search}&limit=5&appid=${process.env.WEATHER_APP_ID}`;
  try {
    const response = await fetch(url);
    const data: CityType[] = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (err) {
    console.log("ERROR", err);
  }
}
