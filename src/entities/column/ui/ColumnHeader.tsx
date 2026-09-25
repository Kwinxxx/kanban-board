import type { Column } from "../model/types";

export interface ColumnHeaderProps {
    title: string;
    tasksCount: number;
}

export const ColumnHeader = ({ title, tasksCount }: ColumnHeaderProps ) => {
    return (
        <div className="flex items-center justify-between mb-2" >
            <div className="flex items-center gap-1">
                <span className="font-medium text-lg text-black">
                    {title}
                </span>
                <span className="px-3.5 py-0.5 bg-white text-base text-black rounded-full" >
                    {tasksCount}
                </span>
            </div>
            <button className="text-black hover: text-gray-600 transition-colors">
                ⋮
            </button>
        </div>
    )
}