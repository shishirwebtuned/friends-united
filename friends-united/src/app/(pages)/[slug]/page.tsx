// app/our-fight/[slug]/page.tsx
import React from "react";
import { newservicesData } from "@/data/data";
import { paddingX } from "@/data/paddingData";
import DemandDetail from "./DemandDetail";

export const dynamicParams = false;

export async function generateStaticParams() {
    return newservicesData.map((service) => ({
        slug: service.link.replace(/^\//, ""),
    }));
}

interface PageParams {
    params: { slug: string };
}

export default async function page({ params }: PageParams) {
    const { slug } = await params;
    const currentLink = `/${slug}`;
    const service = newservicesData.find((s) => s.link === currentLink);

    if (!service) {
        return (
            <div className={`${paddingX} py-10 text-center`}>
                <h2 className="text-2xl font-staatliches">Service Not Found</h2>
            </div>
        );
    }

    return <DemandDetail key={slug} service={service} />;
}
