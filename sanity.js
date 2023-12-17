import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
const client = sanityClient({
    projectId:"ma3lfyux",
    dataset:"production",
    useCdn:true,
    apiVersion:"2021-10-21",
})

const builder=imageUrlBuilder(client);
export const urlFor=(s)=>builder.image(s);

export default client;