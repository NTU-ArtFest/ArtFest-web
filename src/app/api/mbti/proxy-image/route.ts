// src/app/api/image-proxy/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // Get the target URL from the query parameters
    const { searchParams } = new URL(request.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
        return NextResponse.json(
            { error: "Missing 'url' query parameter" },
            { status: 400 }
        );
    }

    const encodedUrl = encodeURIComponent(targetUrl);
    const decodedUrl = decodeURIComponent(encodedUrl);
    console.log(`[Image Proxy] Attempting to fetch: ${decodedUrl}`); // Server-side log

    try {
        const response = await fetch(decodedUrl, {
            method: "GET",
            headers: {
                'Accept': 'image/*'
            }
        });

        if (!response.ok) {
            console.error(
                `[Image Proxy] Failed to fetch image. Status: ${response.status} ${response.statusText}, URL: ${targetUrl}`
            );
            return NextResponse.json(
                {
                    error: `Failed to fetch image from source: ${response.statusText}`,
                },
                { status: response.status }
            );
        }

        // Get the response body as a ReadableStream
        const imageStream = response.body;
        const contentType =
            response.headers.get("content-type") || "application/octet-stream"; // Get actual type or default

        // Stream the image data back to the client
        // Create a new NextResponse using the stream
        return new NextResponse(imageStream, {
            status: 200, // Success status
            headers: {
                "Content-Type": contentType,
                // Set appropriate cache headers if desired
                "Cache-Control": "public, max-age=86400", // Cache for 1 day example
                // Optional: Add Content-Length if you can get it reliably, but streaming often omits it
                // 'Content-Length': response.headers.get('content-length') || '',
            },
        });
    } catch (error) {
        console.error("[Image Proxy] Internal fetch error:", error);
        // Return a generic server error response
        return NextResponse.json(
            { error: "Image proxy failed due to an internal error" },
            { status: 500 }
        );
    }
}
