import { NextResponse } from "next/server";
import data from 'happy-travels/mocks/data.json'

export async function GET(){
    return NextResponse.json(data)
}