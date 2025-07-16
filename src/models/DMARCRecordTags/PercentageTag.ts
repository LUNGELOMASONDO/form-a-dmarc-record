import { IDMARC1RecordTag } from '../IDMARC1RecordTag';
import { TagImportance } from '../TagImportance'

export class PercentageTag implements IDMARC1RecordTag{
    readonly tag = 'pct';
    importance = TagImportance.OPTIONAL;
    value?: number;
    readonly purpose = "Percentage of messages subjected to filtering";
}