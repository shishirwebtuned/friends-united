// app/our-fight/[slug]/page.tsx
import React from "react";
import { client } from "@/lib/sanity.client";
export const revalidate = 60; // seconds
import { paddingX } from "@/data/paddingData";
import DemandDetail from "./DemandDetail";
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
    return builder.image(source);
}

export const dynamicParams = false;

export async function generateStaticParams() {
    const services = await client.fetch(`
        *[_type == "services"]{ link }`
        ,
        {},
        { cache: "no-store" }
    );
    return services.map((service: any) => ({
        slug: service.link.replace(/^\//, ""),
    }));
}

interface PageParams {
    params: { slug: string };
}

export default async function page({ params }: PageParams) {
    const { slug } = await params;
    const currentLink = `/${slug}`;

    const service = await client.fetch(
        `*[_type == "services" && link == $link][0]{
            title,
            description,
            order,
            image,
            link,
            demands,
            demandText,
            demandTitle,
            references,
            details
        }`,
        { link: currentLink },
        { cache: "no-store" }
    );

    if (!service) {
        return (
            <div className={`${paddingX} py-10 text-center`}>
                <h2 className="text-2xl font-staatliches">Service Not Found</h2>
            </div>
        );
    }

    // Convert Sanity image to URL
    const serviceWithImageUrl = {
        ...service,
        image: service.image ? urlFor(service.image).width(800).url() : null,
    };
    console.log("serviceData", serviceWithImageUrl)
    return <DemandDetail key={slug} service={serviceWithImageUrl} />;
}
