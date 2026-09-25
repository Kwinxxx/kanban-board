export type LabelVariant = 'must' | 'medium' | 'tiny' | 'huge';

export interface Label {
    id: string;
    text: string;
    variant: LabelVariant;
}