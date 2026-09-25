import { Button } from "@/shared/ui/button";
import type { Task } from "../model/types";
import { LabelPill } from "@/entities/label";

interface TaskCardProps {
    task: Task;
}

export const TaskCard = ({task}: TaskCardProps) => {
    return (
        <div className="bg-main-bg flex flex-col rounded-xl p-2">
            <div className="flex justify-between">
                <h3 className="font-medium text-lg text-black mb-1">
                    {task.title}
                </h3>
                <Button variant='ghost'>⋮</Button>
            </div>
            <p className="font-normal text-label-text text-base mb-3 line-clamp-2">
                {task.description}
            </p>
            {task.labels.length > 0 &&(
                <div className="flex items-center gap-1 flex-wrap">
                    {task.labels.map((label) => (
                        <LabelPill key={label.id} label={label}/>
                    ))}
                </div>
            )}
        </div>
    )
}