import {v2 as cloudinary} from "cloudinary"
import { NextResponse, NextRequest } from "next/server";




cloudinary.config({
 cloud_name: "dpy0duqcb", // add your cloud_name
 api_key: "363227882323843", // add your api_key
 api_secret: "jG5xoS4-30XQeyHapUFvCJ3vKCY", // add your api_secret
 secure: true
});

export async function GET(req, {params}) {
  const url = req.url.split("?");
  const searchTerm = url[1]
  console.log(url, searchTerm)
    try {
      // const resources = await cloudinary.api.resources({
      //   type: "upload",
      //   prefix: "",
      // });

      const resources = await cloudinary.search.expression(searchTerm).execute();
  
      return NextResponse.json(resources.resources);
    } catch (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  