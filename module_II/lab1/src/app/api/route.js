import { NextResponse } from "next/server";
import data from 'lab1/mocks/data.json'

export async function GET(){
    return NextResponse.json(data)
}