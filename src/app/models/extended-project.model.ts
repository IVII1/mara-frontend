import { Image } from "./image.model";

export class ExtendedProject {
    id!: number;
    image_url!: string;
    description!: string
    cloudinary_id!: string;
    title!: string;
    material!: string;
    height!: number;
    width!: number;
    depth!: number;
    units!: string;
    production_year!: number;
    images!: Image[]
    create_at!: string;
    updated_at!: string;
}
