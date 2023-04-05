import { NextRequest, NextResponse } from "next/server";
import { COOKIE_NAME } from "@lib/constants";
import { getCurrentExperiment } from "@lib/optimize";

export const config = {
  matcher: ["/ab/marketing", "/ab/about"],
};

export function middleware(req: NextRequest) {
  const experiment = getCurrentExperiment();

  let cookie = req.cookies.get(COOKIE_NAME)?.value;
  // console.log(cookie, "cookie new");

  if (!cookie) {
    let n = Math.random() * 100;

    const variant = experiment.variants.find((v, i) => {
      if (v.weight >= n) return true;
      n -= v.weight;
    });

    cookie = `${experiment.id}.${variant.id}`;
  }

  const [, variantId] = cookie.split(".");
  const url = req.nextUrl;
  // console.log(url.pathname, "url");
  // `0` is the original version
  if (variantId !== "0") {
    url.pathname = url.pathname.replace("about", `${cookie}/`);
    url.pathname = url.pathname.replace("marketing", `${cookie}/`);
    // console.log(`/${cookie}/`, "Newest cookie");
    // console.log(url.pathname, "url.pathname");
  }

  const res = NextResponse.rewrite(url);
  // console.log(res, "res");

  // Add the cookie if it's not there
  if (!req.cookies.has(COOKIE_NAME)) {
    res.cookies.set(COOKIE_NAME, cookie);
  }

  return res;
}
