import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"
export const client=createClient({
    projectId:"0x89yqin",
    dataset:"production",
    apiVersion:'2023-02-02',
    useCdn:true,
    token:process.env.SANITY_TOKEN
})
const builder=imageUrlBuilder(client);
export const urlFor=(source)=>builder.image(source)