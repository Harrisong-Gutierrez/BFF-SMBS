import { NextResponse , NextRequest} from "next/server";

export async function GET(req: NextRequest, context: any)  {
    const {params} = context;
    return  NextResponse.json({
        status: 200,
        body: {menssage: `GET /api/post/id`}
    })
}

