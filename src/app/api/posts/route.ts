import { NextResponse } from "next/server";

export async function GET()  {
    return  NextResponse.json({
        status: 200,
        body: {menssage: "GET /api/posts"}
    })
}

