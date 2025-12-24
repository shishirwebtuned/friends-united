import { defineField , defineType } from "sanity";

export default defineType({
    name: "ourstory",
    title: "Our Story",
    type: "document",
    fields: [
        defineField({
            name: "sections",
            title: "Sections",
            type: "array",
            of: [
                defineField({
                    name: "section",
                    title: "Section",
                    type: "object",
                    fields: [
                        {
                            name: "title",
                            title: "Title",
                            type: "string",
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: "content",
                            title: "Content",
                            type: "array",
                            of: [{ type: "string" }],
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: "points",
                            title: "Points",
                            type: "array",
                            of: [{ type: "string" }],
                        },
                        {
                            name: "ending",
                            title: "Ending",
                            type: "string",
                        },
                        {
                            name: "subTitle",
                            title: "Sub Title",
                            type: "string",
                        },
                        {
                            name: "subPoints",
                            title: "Sub Points",
                            type: "array",
                            of: [{ type: "string" }],
                        },
                    ],
                }),
            ],
        }),
    ],
});
                    