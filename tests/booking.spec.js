import { Bookinglocators } from "./pages/bookinglocators";
import { test } from "@playwright/test";

test("new", async({page})=>{

const booking = new Bookinglocators(page)
await booking.homepage("https://www.booking.com/", "madurai")



}
)