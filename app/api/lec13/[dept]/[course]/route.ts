import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: Promise<{dept: string, course: string}>}) {
    const {dept, course} = await params;
    return NextResponse.json({dept: dept.toUpperCase(), course: parseInt(course)});
}

