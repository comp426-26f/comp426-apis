import { NextRequest, NextResponse } from "next/server";
import {catalog, Dept} from "./catalog"

export async function GET(req: NextRequest, {params}: {params: Promise<{dept: string}>}) {
    const {dept} = await params;

    if (!!catalog[dept.toUpperCase() as Dept]) {
        return NextResponse.json({dept: dept.toUpperCase(), courses: Object.keys(catalog[dept.toUpperCase() as Dept])});
    } else {
        return NextResponse.json({
            success: false,
            error: 'Not found.'
        }, {
            status: 404
        });
    }
}


