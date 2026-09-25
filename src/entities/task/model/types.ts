import type { Label } from "@/entities/label";

export interface Task {
    id: string;
    title: string;
    description: string;
    labels: Label[];
    columnId: string;
    order: number;
}