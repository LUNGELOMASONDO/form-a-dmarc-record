import { IDMARCRecordTag } from "../IDMARCRecordTag";
import { TagImportance } from "../TagImportance";

export class PolicyTag implements IDMARCRecordTag{
    tag = "p";
    importance = TagImportance.MANDATORY;
    value?: string;
}