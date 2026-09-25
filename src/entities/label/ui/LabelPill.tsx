import type { Label } from "../model/types";
import { labelVariantsStyle } from "../model/variants";

interface LabelPillProps {
    label: Label;
}


export const LabelPill = ({ label }: LabelPillProps ) => {
    return (
        <span className={`px-2 py-0.5 rounded-full text-sm font-medium ${labelVariantsStyle[label.variant]}`} >
            {label.text}
        </span>
    )
};