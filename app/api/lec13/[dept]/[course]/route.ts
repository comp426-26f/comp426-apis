import { NextRequest, NextResponse } from "next/server";
import {catalog, Dept} from "../catalog"

export async function GET(req: NextRequest, {params}: {params: Promise<{dept: string, course: string}>}) {
    const {dept, course} = await params;
    const courses: Record<string, {title: string, desc: string}> = catalog[dept.toUpperCase() as Dept];
    if (!!courses && !! courses[course]) {
    return NextResponse.json({
        dept: dept.toUpperCase(),
        course: course, 
        title: courses[course]["title"],
        description: courses[course]["desc"],
    });
    } else {
        return NextResponse.json({
            success: false,
            error: 'Not found.'
        }, {
            status: 404
        });
    }
}

